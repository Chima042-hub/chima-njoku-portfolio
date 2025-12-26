# ===== PYTHON BASICS TUTORIAL =====

# 1. PRINTING TO CONSOLE
# The print() function displays text
print("Hello, welcome to my portfolio!")
print("Python is awesome!")

# 2. VARIABLES
# Variables store data. No need to declare types!
name = "Chima"
age = 25
height = 5.9
is_student = True

print("\n--- Variables ---")
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Student?", is_student)

# 3. DATA TYPES
print("\n--- Data Types ---")
my_string = "Hello"          # Text
my_integer = 42              # Whole number
my_float = 3.14             # Decimal number
my_boolean = True           # True or False
my_list = [1, 2, 3, 4, 5]  # List of items
my_dict = {"name": "Chima", "age": 25}  # Dictionary (key-value pairs)

print(f"String: {my_string}")
print(f"Integer: {my_integer}")
print(f"Float: {my_float}")
print(f"List: {my_list}")
print(f"Dictionary: {my_dict}")

# 4. MATH OPERATIONS
print("\n--- Math Operations ---")
a = 10
b = 3
print(f"{a} + {b} = {a + b}")    # Addition
print(f"{a} - {b} = {a - b}")    # Subtraction
print(f"{a} * {b} = {a * b}")    # Multiplication
print(f"{a} / {b} = {a / b}")    # Division
print(f"{a} ** {b} = {a ** b}")  # Power (10^3)
print(f"{a} % {b} = {a % b}")    # Modulo (remainder)

# 5. CONDITIONAL STATEMENTS (if/elif/else)
print("\n--- Conditionals ---")
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# 6. LOOPS
print("\n--- For Loop ---")
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop through a range of numbers
print("\nCounting 1 to 5:")
for i in range(1, 6):
    print(i)

print("\n--- While Loop ---")
count = 0
while count < 5:
    print(f"Count is: {count}")
    count += 1

# 7. FUNCTIONS
print("\n--- Functions ---")

def greet(name):
    """This function greets someone"""
    return f"Hello, {name}!"

def add_numbers(x, y):
    """This function adds two numbers"""
    return x + y

print(greet("Chima"))
print(f"5 + 3 = {add_numbers(5, 3)}")

# 8. LISTS - More Features
print("\n--- Lists ---")
numbers = [1, 2, 3, 4, 5]
numbers.append(6)           # Add to end
print(f"After append: {numbers}")
numbers.pop()              # Remove last item
print(f"After pop: {numbers}")
print(f"First item: {numbers[0]}")
print(f"Last item: {numbers[-1]}")
print(f"Length: {len(numbers)}")

# 9. DICTIONARIES
print("\n--- Dictionaries ---")
person = {
    "name": "Chima",
    "age": 25,
    "city": "Lagos",
    "hobbies": ["coding", "reading", "music"]
}
print(f"Name: {person['name']}")
print(f"Age: {person['age']}")
print(f"Hobbies: {person['hobbies']}")

# 10. INPUT FROM USER (commented out for now)
# name = input("What's your name? ")
# print(f"Nice to meet you, {name}!")

# 11. LIST COMPREHENSION (Advanced but cool!)
print("\n--- List Comprehension ---")
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")

# 12. TRY-EXCEPT (Error Handling)
print("\n--- Error Handling ---")
try:
    result = 10 / 2
    print(f"Division result: {result}")
except ZeroDivisionError:
    print("Can't divide by zero!")

print("\n🎉 Great job! You've learned the basics of Python!")