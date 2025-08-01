# XSS (Cross-Site Scripting) Examples 🚨

## What is XSS?

XSS is when malicious scripts are injected into trusted websites. Oru website la attacker malicious JavaScript code inject pannuvom, adhoda result ah other users browser la execute aagum.

## Types of XSS

### 1. Reflected XSS (Non-Persistent)
- User input immediately returned by server
- URL parameters la malicious script inject pannuvom
- **Example**: Search results page

### 2. Stored XSS (Persistent) 
- Malicious script stored in database
- Every user visits panrappo execute aagum
- **Example**: Comment sections, user profiles

### 3. DOM-based XSS
- Client-side JavaScript modify panradhu unsafe
- Server involvement illa
- **Example**: URL fragment processing

## Impact of XSS

- **Session hijacking**: User cookies steal pannalam
- **Data theft**: Sensitive information access
- **Defacement**: Website content change pannalam
- **Malware distribution**: Users ku malware spread pannalam

## Practical Examples

Let's see vulnerable and secure implementations for each type!

### Files in this folder:
- `vulnerable-reflected.html` - Reflected XSS example
- `vulnerable-stored.html` - Stored XSS example
- `vulnerable-dom.html` - DOM-based XSS example
- `secure-examples.html` - Secure implementations
- `xss-payloads.md` - Common XSS payloads for testing

### How to test:
1. Open each HTML file in browser
2. Try the provided malicious inputs
3. Check how secure version prevents the attack
4. Use browser developer tools to understand the execution 