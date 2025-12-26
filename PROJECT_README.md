# 🐍 Portfolio Backend API - Python Project

## 📋 Project Overview
A professional Flask-based REST API that powers your portfolio website with contact forms, visitor tracking, and project showcase functionality.

## ✨ Features

### 1. **Contact Form Backend**
- Receive and store messages from visitors
- Email validation
- Timestamp tracking
- Read/unread status

### 2. **Visitor Analytics**
- Track total visitors
- Increment counter automatically
- Display live statistics

### 3. **Project Showcase API**
- Serve project data dynamically
- JSON format for easy integration
- Filter by technology, date, etc.

### 4. **Admin Dashboard Data**
- View all messages
- Get portfolio statistics
- Monitor activity

## 🚀 How to Run

### Step 1: Install Dependencies
```bash
cd my-portfolio
pip install -r requirements.txt
```

### Step 2: Run the Backend Server
```bash
python portfolio_backend.py
```

The server will start at: `http://localhost:5000`

### Step 3: Test the Contact Form
Open `contact_form_example.html` in your browser to see it in action!

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/api/projects` | Get all projects |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/visitors` | Get visitor count |
| POST | `/api/visitors/increment` | Increment visitors |
| GET | `/api/messages` | Get all messages |
| GET | `/api/stats` | Get portfolio statistics |

## 🔧 Technologies Used

- **Python 3.14** - Programming language
- **Flask** - Web framework
- **Flask-CORS** - Cross-origin requests
- **JSON** - Data storage
- **REST API** - Architecture pattern

## 📝 Example API Requests

### Get Projects
```javascript
fetch('http://localhost:5000/api/projects')
  .then(res => res.json())
  .then(data => console.log(data.projects));
```

### Submit Contact Form
```javascript
fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

## 🎯 Integration with Your Portfolio

Add this to your existing portfolio website:

```html
<!-- In your index.html contact section -->
<script>
async function sendMessage(formData) {
  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return await response.json();
}
</script>
```

## 🌟 Portfolio Value

This project demonstrates:
- ✅ **Backend Development** - Flask API creation
- ✅ **REST API Design** - Professional endpoint structure
- ✅ **Data Management** - JSON storage and retrieval
- ✅ **Frontend Integration** - Connecting HTML/JS to Python
- ✅ **Error Handling** - Proper validation and responses
- ✅ **Real-World Application** - Functional portfolio feature

## 🚀 Deployment Options

1. **Heroku** - Free tier available
2. **PythonAnywhere** - Great for Flask apps
3. **Railway** - Modern deployment platform
4. **DigitalOcean** - VPS hosting

## 📚 What You Learned

- Building REST APIs with Flask
- Handling HTTP requests (GET, POST)
- JSON data manipulation
- CORS configuration
- Error handling
- File I/O operations
- API documentation

## 💼 Add to Resume

**Portfolio Backend API** - Python, Flask, REST API
- Developed RESTful API with 7 endpoints serving portfolio data
- Implemented contact form backend with data validation
- Created visitor analytics tracking system
- Integrated frontend HTML/JavaScript with Python backend

## 🎓 Next Steps

1. Add email functionality (SendGrid, SMTP)
2. Implement database (SQLite, PostgreSQL)
3. Add authentication (JWT tokens)
4. Deploy to production
5. Add unit tests
6. Create admin dashboard

---

**Built with ❤️ using Python & Flask**
