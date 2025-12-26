# ===== PYTHON FOR CYBERSECURITY =====
# Learn how Python is used in cybersecurity!

import hashlib
import re
import random
import string
from datetime import datetime

print("🔐 PYTHON FOR CYBERSECURITY TUTORIAL\n")

# 1. PASSWORD STRENGTH CHECKER
print("=" * 50)
print("1. PASSWORD STRENGTH CHECKER")
print("=" * 50)

def check_password_strength(password):
    """Check if a password is strong enough"""
    score = 0
    feedback = []
    
    # Check length
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("❌ Too short (min 8 characters)")
    
    # Check for uppercase
    if re.search(r'[A-Z]', password):
        score += 1
    else:
        feedback.append("❌ Add uppercase letters")
    
    # Check for lowercase
    if re.search(r'[a-z]', password):
        score += 1
    else:
        feedback.append("❌ Add lowercase letters")
    
    # Check for numbers
    if re.search(r'\d', password):
        score += 1
    else:
        feedback.append("❌ Add numbers")
    
    # Check for special characters
    if re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        score += 1
    else:
        feedback.append("❌ Add special characters (!@#$%)")
    
    # Determine strength
    if score == 5:
        strength = "🟢 STRONG"
    elif score >= 3:
        strength = "🟡 MEDIUM"
    else:
        strength = "🔴 WEAK"
    
    return strength, score, feedback

# Test passwords
test_passwords = ["password", "Password1", "P@ssw0rd!", "abc"]

for pwd in test_passwords:
    strength, score, feedback = check_password_strength(pwd)
    print(f"\nPassword: '{pwd}'")
    print(f"Strength: {strength} ({score}/5)")
    if feedback:
        for item in feedback:
            print(f"  {item}")

# 2. PASSWORD HASHING (Encryption)
print("\n" + "=" * 50)
print("2. PASSWORD HASHING (How websites store passwords)")
print("=" * 50)

def hash_password(password):
    """Hash a password using SHA-256"""
    # Convert password to bytes and hash it
    password_bytes = password.encode('utf-8')
    hash_object = hashlib.sha256(password_bytes)
    return hash_object.hexdigest()

password = "MySecureP@ss123"
hashed = hash_password(password)
print(f"\nOriginal password: {password}")
print(f"Hashed password: {hashed}")
print("\n💡 Websites store the hash, not your actual password!")
print("💡 Even if hackers steal the database, they can't reverse the hash!")

# Demonstrate that same password = same hash
print(f"\nSame password again: {hash_password(password)}")
print(f"Different password: {hash_password('DifferentPass123')}")

# 3. GENERATE SECURE PASSWORDS
print("\n" + "=" * 50)
print("3. SECURE PASSWORD GENERATOR")
print("=" * 50)

def generate_password(length=12):
    """Generate a random secure password"""
    characters = string.ascii_letters + string.digits + "!@#$%^&*"
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

print("\nGenerated secure passwords:")
for i in range(5):
    secure_pwd = generate_password(16)
    strength, score, _ = check_password_strength(secure_pwd)
    print(f"{i+1}. {secure_pwd} - {strength}")

# 4. SIMPLE ENCRYPTION (Caesar Cipher)
print("\n" + "=" * 50)
print("4. SIMPLE ENCRYPTION - Caesar Cipher")
print("=" * 50)

def caesar_encrypt(text, shift=3):
    """Encrypt text using Caesar cipher"""
    result = ""
    for char in text:
        if char.isalpha():
            ascii_offset = 65 if char.isupper() else 97
            result += chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
        else:
            result += char
    return result

def caesar_decrypt(text, shift=3):
    """Decrypt Caesar cipher"""
    return caesar_encrypt(text, -shift)

secret_message = "Meet me at midnight"
encrypted = caesar_encrypt(secret_message, 5)
decrypted = caesar_decrypt(encrypted, 5)

print(f"\nOriginal: {secret_message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")

# 5. LOG FILE ANALYSIS (Security Monitoring)
print("\n" + "=" * 50)
print("5. LOG FILE ANALYSIS - Detect Suspicious Activity")
print("=" * 50)

# Simulated log entries
logs = [
    "2025-12-26 10:15:23 - User admin logged in from 192.168.1.100",
    "2025-12-26 10:16:45 - Failed login attempt for user root from 45.123.45.67",
    "2025-12-26 10:17:12 - Failed login attempt for user admin from 45.123.45.67",
    "2025-12-26 10:17:45 - Failed login attempt for user test from 45.123.45.67",
    "2025-12-26 10:18:20 - User john logged in from 192.168.1.105",
    "2025-12-26 10:19:01 - Failed login attempt for user root from 45.123.45.67",
]

def analyze_logs(logs):
    """Detect suspicious login patterns"""
    failed_attempts = {}
    
    for log in logs:
        if "Failed login" in log:
            # Extract IP address
            ip = log.split("from ")[-1]
            failed_attempts[ip] = failed_attempts.get(ip, 0) + 1
    
    print("\n🔍 Analyzing security logs...")
    print(f"Total log entries: {len(logs)}\n")
    
    # Report suspicious IPs
    for ip, count in failed_attempts.items():
        if count >= 3:
            print(f"🚨 ALERT: {count} failed login attempts from {ip}")
            print(f"   Possible brute force attack!")
        else:
            print(f"⚠️  Warning: {count} failed login attempts from {ip}")

analyze_logs(logs)

# 6. IP ADDRESS VALIDATOR
print("\n" + "=" * 50)
print("6. IP ADDRESS VALIDATOR")
print("=" * 50)

def is_valid_ip(ip):
    """Check if an IP address is valid"""
    pattern = r'^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$'
    match = re.match(pattern, ip)
    
    if not match:
        return False
    
    # Check each octet is 0-255
    for octet in match.groups():
        if int(octet) > 255:
            return False
    
    return True

test_ips = ["192.168.1.1", "256.1.1.1", "10.0.0.256", "172.16.0.1", "invalid.ip"]

print("\nValidating IP addresses:")
for ip in test_ips:
    valid = "✅ Valid" if is_valid_ip(ip) else "❌ Invalid"
    print(f"{ip:20} - {valid}")

# 7. PORT SCANNER CONCEPT
print("\n" + "=" * 50)
print("7. NETWORK PORT SCANNER (Concept)")
print("=" * 50)

# This is educational - showing the concept
common_ports = {
    20: "FTP Data",
    21: "FTP Control",
    22: "SSH",
    23: "Telnet",
    25: "SMTP (Email)",
    53: "DNS",
    80: "HTTP (Web)",
    443: "HTTPS (Secure Web)",
    3306: "MySQL Database",
    5432: "PostgreSQL Database",
    8080: "HTTP Alternate"
}

print("\n📡 Common Network Ports to Scan:")
for port, service in common_ports.items():
    print(f"Port {port:5} - {service}")

print("\n💡 Security professionals scan ports to find:")
print("   • Open services that could be vulnerable")
print("   • Unauthorized services running")
print("   • Network security weaknesses")

# 8. CYBERSECURITY CAREER PATHS
print("\n" + "=" * 50)
print("8. PYTHON IN CYBERSECURITY CAREERS")
print("=" * 50)

careers = {
    "Penetration Tester": [
        "Write scripts to find vulnerabilities",
        "Automate security testing",
        "Create custom exploit tools"
    ],
    "Security Analyst": [
        "Analyze log files",
        "Detect threats and anomalies",
        "Automate incident response"
    ],
    "Malware Analyst": [
        "Reverse engineer malware",
        "Analyze suspicious files",
        "Create detection signatures"
    ],
    "Security Engineer": [
        "Build security tools",
        "Automate security tasks",
        "Develop security solutions"
    ]
}

print("\n🎯 How Python is used in different roles:\n")
for role, tasks in careers.items():
    print(f"📌 {role}:")
    for task in tasks:
        print(f"   • {task}")
    print()

# 9. NEXT STEPS TO LEARN
print("=" * 50)
print("🎓 NEXT STEPS TO MASTER PYTHON IN CYBERSECURITY")
print("=" * 50)

next_steps = """
1. Learn these Python libraries:
   • Scapy - Network packet manipulation
   • Nmap - Network scanning
   • Requests - Web security testing
   • Beautiful Soup - Web scraping
   • Cryptography - Advanced encryption

2. Practice platforms:
   • HackTheBox - Hands-on hacking challenges
   • TryHackMe - Guided cybersecurity lessons
   • PicoCTF - Capture The Flag competitions

3. Certifications to pursue:
   • CompTIA Security+
   • CEH (Certified Ethical Hacker)
   • OSCP (Offensive Security Certified Professional)

4. Build projects:
   • Keylogger detector
   • Network traffic analyzer
   • Vulnerability scanner
   • Password manager
   • Encryption tool

5. IMPORTANT: Always practice ethically!
   ⚠️  Only test on systems you own or have permission to test
   ⚠️  Never use skills for illegal activities
   ⚠️  Always follow responsible disclosure
"""

print(next_steps)

print("\n🎉 You now know how Python powers cybersecurity!")
print("💪 Keep learning, stay ethical, and protect the digital world!\n")
