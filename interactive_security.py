# ===== INTERACTIVE CYBERSECURITY TOOL =====
# Now YOU can test real cybersecurity functions!

import hashlib
import re
import random
import string

def check_password_strength(password):
    """Check if a password is strong - REAL security tool!"""
    score = 0
    feedback = []
    
    if len(password) >= 8:
        score += 1
    else:
        feedback.append("❌ Too short (min 8 characters)")
    
    if re.search(r'[A-Z]', password):
        score += 1
    else:
        feedback.append("❌ Add uppercase letters")
    
    if re.search(r'[a-z]', password):
        score += 1
    else:
        feedback.append("❌ Add lowercase letters")
    
    if re.search(r'\d', password):
        score += 1
    else:
        feedback.append("❌ Add numbers")
    
    if re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
        score += 1
    else:
        feedback.append("❌ Add special characters")
    
    if score == 5:
        strength = "🟢 STRONG - Great password!"
    elif score >= 3:
        strength = "🟡 MEDIUM - Could be better"
    else:
        strength = "🔴 WEAK - Very unsafe!"
    
    return strength, score, feedback

def hash_password(password):
    """Hash password - exactly like websites do it!"""
    password_bytes = password.encode('utf-8')
    hash_object = hashlib.sha256(password_bytes)
    return hash_object.hexdigest()

def generate_secure_password(length=16):
    """Generate random secure password - like password managers!"""
    characters = string.ascii_letters + string.digits + "!@#$%^&*"
    return ''.join(random.choice(characters) for _ in range(length))

# ===== INTERACTIVE MENU =====
print("=" * 60)
print("🔐 CYBERSECURITY TOOLKIT - INTERACTIVE VERSION")
print("=" * 60)
print("\nThis is a REAL cybersecurity tool you just built!")
print("These same functions protect millions of websites.\n")

while True:
    print("\n" + "=" * 60)
    print("CHOOSE AN OPTION:")
    print("=" * 60)
    print("1. Check Password Strength (Test YOUR password)")
    print("2. Hash a Password (See how websites store it)")
    print("3. Generate Secure Password (Create a strong password)")
    print("4. Simulate Attack Detection (See brute force detection)")
    print("5. Exit")
    print("=" * 60)
    
    choice = input("\nEnter your choice (1-5): ").strip()
    
    if choice == "1":
        print("\n" + "🔍 PASSWORD STRENGTH CHECKER")
        print("-" * 60)
        test_pwd = input("Enter a password to test: ")
        strength, score, feedback = check_password_strength(test_pwd)
        
        print(f"\n📊 RESULTS:")
        print(f"Password: '{test_pwd}'")
        print(f"Strength: {strength}")
        print(f"Security Score: {score}/5")
        
        if feedback:
            print(f"\n⚠️  Recommendations:")
            for item in feedback:
                print(f"  {item}")
        else:
            print("\n✅ This password meets all security requirements!")
    
    elif choice == "2":
        print("\n" + "🔒 PASSWORD HASHER")
        print("-" * 60)
        pwd = input("Enter a password to hash: ")
        hashed = hash_password(pwd)
        
        print(f"\n📊 RESULTS:")
        print(f"Original Password: {pwd}")
        print(f"Hashed (Encrypted): {hashed}")
        print(f"\n💡 This hash is stored in the database, NOT your password!")
        print(f"💡 If hackers steal it, they CAN'T reverse it back to '{pwd}'")
        
        # Prove it's always the same
        same = hash_password(pwd)
        print(f"\n🔁 Hash the same password again: {same}")
        print(f"✅ Same hash! This is how websites verify your login.")
    
    elif choice == "3":
        print("\n" + "🎲 SECURE PASSWORD GENERATOR")
        print("-" * 60)
        length = input("Password length (press Enter for 16): ").strip()
        length = int(length) if length else 16
        
        print(f"\n🎯 Generated {length}-character passwords:\n")
        for i in range(5):
            pwd = generate_secure_password(length)
            strength, score, _ = check_password_strength(pwd)
            print(f"{i+1}. {pwd:25} {strength}")
        
        print(f"\n💡 Password managers use this same technique!")
    
    elif choice == "4":
        print("\n" + "🚨 ATTACK DETECTION SIMULATOR")
        print("-" * 60)
        print("Simulating real-time log monitoring...\n")
        
        # Simulate attack logs
        logs = [
            "Failed login from 45.123.45.67 - user: admin",
            "Failed login from 45.123.45.67 - user: root",
            "Successful login from 192.168.1.100 - user: john",
            "Failed login from 45.123.45.67 - user: test",
            "Failed login from 45.123.45.67 - user: admin",
            "Failed login from 203.0.113.5 - user: admin",
        ]
        
        attacks = {}
        for log in logs:
            print(f"📝 {log}")
            if "Failed login" in log:
                ip = log.split("from ")[1].split(" -")[0]
                attacks[ip] = attacks.get(ip, 0) + 1
        
        print("\n🔍 ANALYSIS RESULTS:")
        for ip, count in attacks.items():
            if count >= 3:
                print(f"🚨 CRITICAL ALERT: {count} failed attempts from {ip}")
                print(f"   → ACTION: Block IP {ip} immediately!")
                print(f"   → REASON: Possible brute force attack")
            else:
                print(f"⚠️  Warning: {count} failed attempts from {ip}")
        
        print(f"\n💡 Security teams use Python to monitor MILLIONS of logs per second!")
    
    elif choice == "5":
        print("\n" + "=" * 60)
        print("👋 Thanks for using the Cybersecurity Toolkit!")
        print("🔐 You now understand how security tools work!")
        print("=" * 60)
        break
    
    else:
        print("\n❌ Invalid choice. Please enter 1-5.")

print("\n💪 Remember: These simple Python scripts protect the entire internet!")
print("🎯 Keep learning and you could be building the next big security tool!\n")
