# Input Validation & Sanitization Examples ✅

## What is Input Validation & Sanitization?

Input validation and sanitization are crucial security practices that ensure user data is safe before processing. **Validation** checks if data meets expected format/rules, while **sanitization** removes or escapes dangerous content.

## Why Input Validation Matters

### Real-World Impact:
- **SQL Injection Prevention** - Block malicious database queries
- **XSS Protection** - Prevent script injection attacks  
- **Command Injection** - Stop system command execution
- **Path Traversal** - Block file system access attempts
- **Data Integrity** - Ensure application stability

## Types of Input Validation

### 1. **Client-Side Validation** 🖥️
- JavaScript validation in browser
- **Pros**: Fast user feedback, reduced server load
- **Cons**: Can be bypassed, not secure alone
- **Use for**: UX improvements only

### 2. **Server-Side Validation** 🖥️
- Validation on server before processing
- **Pros**: Secure, can't be bypassed
- **Cons**: Slower, requires server round-trip
- **Use for**: Security and data integrity

### 3. **Database Validation** 🗄️
- Validation at database level
- **Pros**: Last line of defense
- **Cons**: Performance impact
- **Use for**: Data integrity

## Common Validation Techniques

### **Whitelist Approach** ✅
```javascript
// Only allow specific characters
const allowedPattern = /^[a-zA-Z0-9\s]+$/;
if (!allowedPattern.test(input)) {
    throw new Error('Invalid characters');
}
```

### **Blacklist Approach** ❌
```javascript
// Block dangerous characters (less secure)
const dangerousChars = /[<>'"&]/;
if (dangerousChars.test(input)) {
    throw new Error('Dangerous characters detected');
}
```

### **Length Validation**
```javascript
if (input.length < 3 || input.length > 50) {
    throw new Error('Length must be 3-50 characters');
}
```

### **Type Validation**
```javascript
if (typeof input !== 'string') {
    throw new Error('Input must be a string');
}
```

## Sanitization Techniques

### **HTML Encoding**
```javascript
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
```

### **URL Encoding**
```javascript
function sanitizeUrl(url) {
    return encodeURIComponent(url);
}
```

### **SQL Injection Prevention**
```javascript
// Use parameterized queries
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId]);
```

## Common Attack Vectors

### **1. SQL Injection**
```sql
-- Malicious input
' OR 1=1 --

-- Results in:
SELECT * FROM users WHERE username = '' OR 1=1 --'
```

### **2. XSS (Cross-Site Scripting)**
```html
-- Malicious input
<script>alert('XSS')</script>

-- Results in:
<div><script>alert('XSS')</script></div>
```

### **3. Command Injection**
```bash
-- Malicious input
; rm -rf /; #

-- Results in:
system("ls " + userInput); // ls ; rm -rf /; #
```

### **4. Path Traversal**
```bash
-- Malicious input
../../../etc/passwd

-- Results in:
readFile("/uploads/" + userInput); // /uploads/../../../etc/passwd
```

## Practical Examples

This module demonstrates proper input validation:

### Files in this folder:
- `vulnerable-form.html` - Form without validation
- `basic-validation.html` - Simple client-side validation
- `advanced-validation.html` - Comprehensive validation
- `sanitization-examples.html` - Data sanitization techniques
- `secure-form.html` - Production-ready validation
- `validation-libraries.html` - Using validation libraries

### Testing Process:
1. **Start with vulnerable form** - See how attacks work
2. **Add basic validation** - Simple client-side checks
3. **Implement advanced validation** - Comprehensive rules
4. **Add sanitization** - Clean dangerous data
5. **Use secure patterns** - Production-ready implementation

## Validation Best Practices

### ✅ **Do's:**
- **Validate on server-side** - Never trust client-side only
- **Use whitelist approach** - Allow only known good input
- **Validate length and type** - Check data format
- **Sanitize output** - Clean data before display
- **Use parameterized queries** - Prevent SQL injection
- **Implement rate limiting** - Prevent brute force attacks

### ❌ **Don'ts:**
- **Rely on client-side only** - Can be bypassed
- **Use blacklist approach** - Easy to bypass
- **Trust user input** - Always validate
- **Display raw input** - Always sanitize
- **Use string concatenation** - For SQL queries
- **Ignore encoding** - Always encode output

## Common Validation Rules

### **Email Validation**
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
}
```

### **Phone Number Validation**
```javascript
const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
if (!phoneRegex.test(phone)) {
    throw new Error('Invalid phone number');
}
```

### **Credit Card Validation**
```javascript
function validateCreditCard(cardNumber) {
    // Luhn algorithm implementation
    const digits = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let isEven = false;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i]);
        
        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        
        sum += digit;
        isEven = !isEven;
    }
    
    return sum % 10 === 0;
}
```

### **Password Strength Validation**
```javascript
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return password.length >= minLength && 
           hasUpperCase && hasLowerCase && 
           hasNumbers && hasSpecialChar;
}
```

## Security Checklist

### **Input Validation Checklist:**
- [ ] **Server-side validation** implemented
- [ ] **Length limits** enforced
- [ ] **Type checking** performed
- [ ] **Format validation** applied
- [ ] **Whitelist approach** used
- [ ] **Rate limiting** implemented
- [ ] **Error messages** don't leak information

### **Output Sanitization Checklist:**
- [ ] **HTML encoding** for user content
- [ ] **URL encoding** for links
- [ ] **SQL parameterization** for queries
- [ ] **Command escaping** for system calls
- [ ] **Path validation** for file operations
- [ ] **Content-Type headers** set correctly

Ready ah? Let's start building secure input validation examples! 🚀

**⚠️ Important**: These examples demonstrate both vulnerable and secure implementations for educational purposes. 