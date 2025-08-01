# XSS (Cross-Site Scripting) Examples 🚨

## What is XSS?

XSS is when malicious scripts are injected into trusted websites. An attacker injects malicious JavaScript code into a website, and the result gets executed in other users' browsers.

## Types of XSS

### 1. Reflected XSS (Non-Persistent)
- User input immediately returned by server
- Malicious script injected via URL parameters
- **Example**: Search results page

### 2. Stored XSS (Persistent) 
- Malicious script stored in database
- Executes every time users visit the page
- **Example**: Comment sections, user profiles

### 3. DOM-based XSS
- Client-side JavaScript modifies content unsafely
- No server involvement required
- **Example**: URL fragment processing

## Impact of XSS

- **Session hijacking**: Steal user cookies and sessions
- **Data theft**: Access sensitive information
- **Defacement**: Modify website content
- **Malware distribution**: Spread malware to users

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