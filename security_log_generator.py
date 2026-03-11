"""
SIEM Log Generator - Creates Realistic Security Logs for Splunk Practice
Author: Joseph Chimakpa Njoku
Purpose: Generate sample security events to practice SIEM analysis
"""

import random
import datetime
import json
import time
import os

class SecurityLogGenerator:
    """Generates realistic security logs for SIEM training"""
    
    def __init__(self, output_file="security_logs.json"):
        self.output_file = output_file
        self.ip_addresses = [
            "192.168.1.10", "192.168.1.15", "192.168.1.20",
            "10.0.0.5", "10.0.0.12", "172.16.0.8",
            "203.0.113.45",  # Suspicious external IP
            "198.51.100.78",  # Another external IP
            "192.0.2.123"     # Test IP
        ]
        
        self.usernames = [
            "admin", "jnjoku", "user123", "sysadmin", 
            "guest", "root", "administrator", "test_user"
        ]
        
        self.event_types = [
            "LOGIN_SUCCESS", "LOGIN_FAILURE", "FILE_ACCESS",
            "FILE_MODIFIED", "NETWORK_SCAN", "MALWARE_DETECTED",
            "PRIVILEGE_ESCALATION", "DATA_EXFILTRATION",
            "BRUTE_FORCE_ATTEMPT", "SUSPICIOUS_PROCESS"
        ]
        
        self.attack_patterns = {
            "BRUTE_FORCE": ["LOGIN_FAILURE", "LOGIN_FAILURE", "LOGIN_FAILURE", "LOGIN_SUCCESS"],
            "PORT_SCAN": ["NETWORK_SCAN"] * 5,
            "MALWARE_EXECUTION": ["FILE_MODIFIED", "SUSPICIOUS_PROCESS", "MALWARE_DETECTED"],
            "DATA_BREACH": ["PRIVILEGE_ESCALATION", "FILE_ACCESS", "DATA_EXFILTRATION"]
        }
    
    def generate_timestamp(self, offset_minutes=0):
        """Generate timestamp for log entry"""
        now = datetime.datetime.now() - datetime.timedelta(minutes=offset_minutes)
        return now.strftime("%Y-%m-%d %H:%M:%S")
    
    def generate_normal_event(self):
        """Generate normal security event"""
        event_type = random.choice(["LOGIN_SUCCESS", "FILE_ACCESS", "FILE_MODIFIED"])
        
        return {
            "timestamp": self.generate_timestamp(random.randint(0, 1440)),
            "event_type": event_type,
            "source_ip": random.choice(self.ip_addresses[:6]),  # Internal IPs
            "username": random.choice(self.usernames[:4]),  # Normal users
            "severity": "LOW",
            "description": f"Normal {event_type.lower().replace('_', ' ')} activity",
            "host": "WORKSTATION-" + str(random.randint(1, 10))
        }
    
    def generate_suspicious_event(self):
        """Generate suspicious security event"""
        event_type = random.choice([
            "LOGIN_FAILURE", "BRUTE_FORCE_ATTEMPT", 
            "NETWORK_SCAN", "PRIVILEGE_ESCALATION"
        ])
        
        severity = "MEDIUM" if event_type in ["LOGIN_FAILURE", "NETWORK_SCAN"] else "HIGH"
        
        return {
            "timestamp": self.generate_timestamp(random.randint(0, 120)),
            "event_type": event_type,
            "source_ip": random.choice(self.ip_addresses[6:]),  # External IPs
            "username": random.choice(["admin", "root", "administrator"]),
            "severity": severity,
            "description": f"Suspicious {event_type.lower().replace('_', ' ')} detected",
            "host": "SERVER-" + str(random.randint(1, 5))
        }
    
    def generate_attack_scenario(self, attack_type):
        """Generate a complete attack scenario"""
        events = []
        pattern = self.attack_patterns.get(attack_type, ["SUSPICIOUS_PROCESS"])
        
        base_time = random.randint(10, 60)
        attacker_ip = random.choice(self.ip_addresses[6:])
        
        for i, event_type in enumerate(pattern):
            events.append({
                "timestamp": self.generate_timestamp(base_time - i * 2),
                "event_type": event_type,
                "source_ip": attacker_ip,
                "username": random.choice(["admin", "root"]),
                "severity": "CRITICAL",
                "description": f"Attack pattern: {attack_type} - Step {i+1}",
                "host": "SERVER-1",
                "attack_id": f"ATK-{random.randint(1000, 9999)}"
            })
        
        return events
    
    def generate_logs(self, num_events=100, include_attacks=True):
        """Generate complete set of security logs"""
        logs = []
        
        print("\n" + "="*60)
        print("🔐 SECURITY LOG GENERATOR")
        print("="*60)
        print(f"📊 Generating {num_events} security events...")
        
        # Generate mostly normal events (80%)
        normal_count = int(num_events * 0.8)
        for _ in range(normal_count):
            logs.append(self.generate_normal_event())
        
        # Generate suspicious events (15%)
        suspicious_count = int(num_events * 0.15)
        for _ in range(suspicious_count):
            logs.append(self.generate_suspicious_event())
        
        # Generate attack scenarios (5%)
        if include_attacks:
            attack_types = ["BRUTE_FORCE", "PORT_SCAN", "MALWARE_EXECUTION", "DATA_BREACH"]
            for attack_type in attack_types:
                logs.extend(self.generate_attack_scenario(attack_type))
        
        # Sort by timestamp
        logs.sort(key=lambda x: x['timestamp'], reverse=True)
        
        # Save to file
        with open(self.output_file, 'w') as f:
            for log in logs:
                f.write(json.dumps(log) + "\n")
        
        print(f"✅ Generated {len(logs)} total events")
        print(f"📁 Saved to: {self.output_file}")
        
        # Statistics
        severity_counts = {}
        event_counts = {}
        
        for log in logs:
            severity = log.get('severity', 'UNKNOWN')
            event_type = log.get('event_type', 'UNKNOWN')
            
            severity_counts[severity] = severity_counts.get(severity, 0) + 1
            event_counts[event_type] = event_counts.get(event_type, 0) + 1
        
        print("\n📈 Event Statistics:")
        print(f"   🟢 LOW severity: {severity_counts.get('LOW', 0)}")
        print(f"   🟡 MEDIUM severity: {severity_counts.get('MEDIUM', 0)}")
        print(f"   🟠 HIGH severity: {severity_counts.get('HIGH', 0)}")
        print(f"   🔴 CRITICAL severity: {severity_counts.get('CRITICAL', 0)}")
        
        print("\n🎯 Top Event Types:")
        for event_type, count in sorted(event_counts.items(), key=lambda x: x[1], reverse=True)[:5]:
            print(f"   • {event_type}: {count}")
        
        print("\n" + "="*60)
        print("🚀 READY FOR SPLUNK!")
        print("="*60)
        print("\n💡 Next Steps:")
        print("   1. Install Splunk")
        print("   2. Add this file as a data input")
        print("   3. Search for: sourcetype=json")
        print("   4. Filter by: severity=CRITICAL")
        print("   5. Build dashboards to detect attacks!")
        
        return logs

def main():
    """Main function to run the log generator"""
    generator = SecurityLogGenerator("security_logs.json")
    
    print("\n🔐 SIEM Training Log Generator")
    print("="*60)
    print("\nThis tool generates realistic security logs for practice.")
    print("Perfect for learning Splunk, ELK, or other SIEM tools!\n")
    
    # Generate logs
    logs = generator.generate_logs(num_events=200, include_attacks=True)
    
    # Create additional log file in CSV format for compatibility
    csv_file = "security_logs.csv"
    with open(csv_file, 'w') as f:
        f.write("timestamp,event_type,source_ip,username,severity,description,host\n")
        for log in logs:
            f.write(f"{log['timestamp']},{log['event_type']},{log['source_ip']},"
                   f"{log['username']},{log['severity']},{log['description']},"
                   f"{log.get('host', 'UNKNOWN')}\n")
    
    print(f"\n📄 Also created CSV format: {csv_file}")
    print("\n✨ Happy SIEM hunting! ✨\n")

if __name__ == "__main__":
    main()
