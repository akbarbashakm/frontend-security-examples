# Authentication & Authorization Vulnerabilities 🔐

## What are Auth Vulnerabilities?

Authentication & Authorization flaws are among the most critical security issues. Authentication is **"Who are you?"** while Authorization is **"What can you do?"**. When these systems are weak, attackers can gain unauthorized access to user accounts, sensitive data, and admin functions.

## Types of Auth Vulnerabilities

### 1. **Broken Authentication** 🚨
- Weak password policies
- Session management flaws  
- Credential stuffing vulnerabilities
- Insecure password recovery

### 2. **Broken Access Control** 🎯
- Vertical privilege escalation (user → admin)
- Horizontal privilege escalation (user → other user)
- Insecure Direct Object References (IDOR)
- Missing function-level access control

### 3. **Session Management Issues** 🍪
- Session fixation
- Session hijacking
- Insecure session storage
- Missing session timeout

### 4. **JWT Vulnerabilities** 🔑
- Algorithm confusion attacks
- Weak signing keys
- Missing signature verification
- Sensitive data in payload

## Real-World Impact

- **Account takeover**: Access to user accounts
- **Data breaches**: Unauthorized access to sensitive information
- **Financial fraud**: Unauthorized transactions
- **Privacy violations**: Access to personal data
- **System compromise**: Admin-level access to applications

## Common Attack Scenarios

### Scenario 1: Password Brute Force
```
1. Attacker identifies login endpoint
2. Uses common password lists  
3. No rate limiting or account lockout
4. Successfully guesses weak passwords
5. Gains access to user accounts
```

### Scenario 2: IDOR (Insecure Direct Object Reference)
```
1. User logs into application
2. URL shows: /profile?userId=123
3. Attacker changes to: /profile?userId=124
4. Application doesn't verify authorization
5. Attacker accesses other user's profile
```

### Scenario 3: Privilege Escalation
```
1. Regular user discovers admin functions
2. Changes role parameter: role=admin
3. Application trusts client-side data
4. User gains administrative privileges
5. Can now access sensitive admin functions
```

## Practical Examples

This module demonstrates realistic auth vulnerabilities:

### Files in this folder:
- `vulnerable-login.html` - Weak authentication system
- `broken-access-control.html` - Authorization bypass examples
- `session-vulnerabilities.html` - Session management flaws
- `jwt-vulnerabilities.html` - JWT implementation issues
- `secure-auth.html` - Proper authentication implementation
- `auth-bypass-techniques.html` - Common bypass methods

### Testing Process:
1. **Test weak authentication** - Password attacks, session issues
2. **Try access control bypass** - IDOR, privilege escalation
3. **Exploit session flaws** - Hijacking, fixation
4. **Attack JWT implementation** - Algorithm confusion, key attacks
5. **Learn secure implementations** - Proper auth patterns

## Authentication Vulnerability Categories

### A1. Weak Password Policies
- ❌ No minimum length requirements
- ❌ No complexity requirements  
- ❌ Common passwords allowed
- ❌ No password history
- ❌ Default credentials

### A2. Session Management
- ❌ Predictable session IDs
- ❌ Session fixation
- ❌ No session timeout
- ❌ Insecure session storage
- ❌ Session in URL parameters

### A3. Multi-Factor Authentication
- ❌ MFA bypass vulnerabilities
- ❌ Weak backup codes
- ❌ SMS interception
- ❌ TOTP replay attacks
- ❌ Recovery mechanism flaws

## Authorization Vulnerability Categories

### B1. Vertical Access Control
- ❌ Missing admin checks
- ❌ Role-based bypass
- ❌ Privilege escalation
- ❌ Function-level missing controls

### B2. Horizontal Access Control  
- ❌ IDOR vulnerabilities
- ❌ User data leakage
- ❌ Cross-user data access
- ❌ Parameter manipulation

### B3. Context-dependent Access Control
- ❌ State-based bypass
- ❌ Time-based access issues
- ❌ Location-based bypass
- ❌ Business logic flaws

## Testing Methodology

### Step 1: Authentication Testing
```bash
# Test for weak passwords
Username: admin
Password: admin, password, 123456

# Test for default credentials  
admin/admin, admin/password, root/root

# Test for SQL injection in login
Username: admin' OR '1'='1
Password: anything
```

### Step 2: Session Analysis
```bash
# Check session cookies
- Secure flag
- HttpOnly flag  
- SameSite attribute
- Expiration time

# Test session fixation
1. Get session ID before login
2. Login with that session
3. Check if session ID changes
```

### Step 3: Access Control Testing
```bash
# Test IDOR
/user/123/profile → /user/124/profile
/api/users/me → /api/users/admin

# Test privilege escalation
role=user → role=admin
userType=normal → userType=admin
```

## Security Best Practices

### ✅ Strong Authentication
- **Strong password policies** with complexity requirements
- **Multi-factor authentication** for sensitive accounts
- **Account lockout** after failed attempts
- **Secure password recovery** mechanisms
- **Regular credential rotation**

### ✅ Secure Session Management  
- **Cryptographically random** session IDs
- **Session regeneration** after login/privilege change
- **Secure session storage** with proper flags
- **Session timeout** for inactive users
- **Concurrent session limits**

### ✅ Proper Authorization
- **Principle of least privilege** - minimum required access
- **Server-side access control** - never trust client data
- **Resource-based permissions** - check access per resource
- **Regular access reviews** - audit and update permissions
- **Defense in depth** - multiple layers of controls

Ready ah? Let's start exploring authentication vulnerabilities! 🚀

**⚠️ Important**: These examples are for educational purposes only. Never test these techniques on systems you don't own! 