# ===== PORTFOLIO BACKEND API =====
# A Flask backend for your portfolio website!
# This is a REAL project you can deploy and show to employers!

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os

app = Flask(__name__)

# Restrict CORS to known frontend origins by default.
ALLOWED_ORIGINS = os.getenv(
    'PORTFOLIO_ALLOWED_ORIGINS',
    'https://chima042-hub.github.io,http://localhost:5500,http://127.0.0.1:5500'
).split(',')
CORS(app, resources={r"/api/*": {"origins": [origin.strip() for origin in ALLOWED_ORIGINS]}})

# ===== DATA STORAGE =====
DATA_FILE = 'portfolio_data.json'


def is_admin_authorized(req):
    """Simple header token check for admin routes."""
    admin_token = os.getenv('PORTFOLIO_ADMIN_TOKEN', '').strip()
    if not admin_token:
        return False

    provided = req.headers.get('X-Admin-Token', '').strip()
    return provided == admin_token

def load_data():
    """Load data from JSON file"""
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return {
        'messages': [],
        'visitors': 0,
        'projects': []
    }

def save_data(data):
    """Save data to JSON file"""
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# ===== ROUTES =====

@app.route('/')
def home():
    """API home route"""
    return jsonify({
        'message': 'Portfolio Backend API is running!',
        'version': '1.0',
        'endpoints': {
            'GET /': 'API information',
            'GET /api/projects': 'Get all projects',
            'POST /api/contact': 'Submit contact form',
            'GET /api/visitors': 'Get visitor count',
            'POST /api/visitors/increment': 'Increment visitor count',
            'GET /api/messages': 'Get all messages (admin)'
        }
    })

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all portfolio projects"""
    projects = [
        {
            'id': 1,
            'title': 'Cybersecurity Toolkit',
            'description': 'Python-based security tools including password strength checker, hash generator, and attack detection system.',
            'technologies': ['Python', 'Cryptography', 'Security'],
            'github': 'https://github.com/Chima042-hub/cybersecurity-toolkit',
            'demo': None,
            'date': '2025-12-26'
        },
        {
            'id': 2,
            'title': 'Portfolio Backend API',
            'description': 'RESTful API built with Flask to power my portfolio website with contact forms and visitor analytics.',
            'technologies': ['Python', 'Flask', 'REST API', 'JSON'],
            'github': 'https://github.com/Chima042-hub/chima-njoku-portfolio',
            'demo': None,
            'date': '2025-12-26'
        },
        {
            'id': 3,
            'title': 'Interactive Portfolio Website',
            'description': 'Modern, responsive portfolio website with dynamic project showcase and contact functionality.',
            'technologies': ['HTML', 'CSS', 'JavaScript', 'Python'],
            'github': 'https://github.com/Chima042-hub/chima-njoku-portfolio',
            'demo': 'https://chima042-hub.github.io/chima-njoku-portfolio/',
            'date': '2025-12-26'
        }
    ]
    
    return jsonify({
        'success': True,
        'count': len(projects),
        'projects': projects
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create message object
        message = {
            'id': datetime.now().timestamp(),
            'name': data['name'],
            'email': data['email'],
            'subject': data.get('subject', 'No subject'),
            'message': data['message'],
            'timestamp': datetime.now().isoformat(),
            'read': False
        }
        
        # Save to database
        db_data = load_data()
        db_data['messages'].append(message)
        save_data(db_data)
        
        # In production, you'd send an email here
        # send_email(message)
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! I will get back to you soon.',
            'id': message['id']
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/visitors', methods=['GET'])
def get_visitors():
    """Get total visitor count"""
    data = load_data()
    return jsonify({
        'success': True,
        'visitors': data.get('visitors', 0)
    })

@app.route('/api/visitors/increment', methods=['POST'])
def increment_visitors():
    """Increment visitor count"""
    data = load_data()
    data['visitors'] = data.get('visitors', 0) + 1
    save_data(data)
    
    return jsonify({
        'success': True,
        'visitors': data['visitors']
    })

@app.route('/api/messages', methods=['GET'])
def get_messages():
    """Get all messages (admin only)."""
    if not is_admin_authorized(request):
        return jsonify({
            'success': False,
            'error': 'Unauthorized'
        }), 403

    data = load_data()
    messages = data.get('messages', [])
    
    return jsonify({
        'success': True,
        'count': len(messages),
        'unread': sum(1 for m in messages if not m.get('read', False)),
        'messages': messages
    })

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get portfolio statistics"""
    data = load_data()
    messages = data.get('messages', [])
    
    return jsonify({
        'success': True,
        'stats': {
            'visitors': data.get('visitors', 0),
            'messages': len(messages),
            'unread_messages': sum(1 for m in messages if not m.get('read', False)),
            'projects': 3,
            'last_updated': datetime.now().isoformat()
        }
    })

# ===== ERROR HANDLERS =====

@app.errorhandler(404)
def not_found(e):
    return jsonify({
        'success': False,
        'error': 'Endpoint not found'
    }), 404

@app.errorhandler(500)
def server_error(e):
    return jsonify({
        'success': False,
        'error': 'Internal server error'
    }), 500

# ===== RUN SERVER =====

if __name__ == '__main__':
    port = int(os.getenv('PORT', '5000'))
    debug_mode = os.getenv('FLASK_DEBUG', 'false').lower() == 'true'

    print("=" * 60)
    print("🚀 PORTFOLIO BACKEND API STARTING...")
    print("=" * 60)
    print("\n📡 API Endpoints Available:")
    print(f"   • http://localhost:{port}/")
    print(f"   • http://localhost:{port}/api/projects")
    print(f"   • http://localhost:{port}/api/contact")
    print(f"   • http://localhost:{port}/api/visitors")
    print(f"   • http://localhost:{port}/api/messages")
    print(f"   • http://localhost:{port}/api/stats")
    print("\n🔐 Security defaults:")
    print("   • Admin endpoint requires PORTFOLIO_ADMIN_TOKEN + X-Admin-Token header")
    print(f"   • Debug mode is {'ON' if debug_mode else 'OFF'}")
    print("\n💡 Your portfolio website can now:")
    print("   ✅ Send contact form messages")
    print("   ✅ Track visitor count")
    print("   ✅ Display projects dynamically")
    print("   ✅ Show portfolio statistics")
    print("\n⚙️  Press CTRL+C to stop the server")
    print("=" * 60 + "\n")
    
    app.run(debug=debug_mode, port=port)
