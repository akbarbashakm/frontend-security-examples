# Content Security Policy (CSP) Examples 🛡️

## What is CSP?

Content Security Policy (CSP) is oru website ku security layer ah act pannura HTTP header. Idhu malicious scripts, styles, and other content inject aguradhula irundhu protect pannuradhu. Simply ah sollanum na, CSP is like a bouncer for your website - only trusted content allowed inside!

## How CSP Works

1. **Server sends CSP header** with webpage
2. **Browser enforces** the security policy
3. **Blocks unauthorized** scripts, styles, images, etc.
4. **Logs violations** for monitoring
5. **Prevents most XSS** attacks automatically!

## CSP Directives

### Core Directives:
- **`default-src`** - Default policy for all content types
- **`script-src`** - Controls JavaScript execution
- **`style-src`** - Controls CSS loading
- **`img-src`** - Controls image loading
- **`connect-src`** - Controls AJAX, WebSocket connections
- **`font-src`** - Controls web font loading
- **`frame-src`** - Controls iframe embedding

### Special Keywords:
- **`'self'`** - Same origin as the document
- **`'unsafe-inline'`** - Allows inline scripts/styles (dangerous!)
- **`'unsafe-eval'`** - Allows eval() function (dangerous!)
- **`'none'`** - Blocks all sources
- **`'nonce-xxxxx'`** - Allows specific scripts with matching nonce
- **`'sha256-xxxxx'`** - Allows scripts with matching hash

## CSP Examples

### Basic CSP (Restrictive)
```http
Content-Security-Policy: default-src 'self'
```
- Only allows resources from same origin
- Blocks all inline scripts and styles
- Very secure but might break functionality

### Moderate CSP (Balanced)
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
```
- Allows same-origin resources
- Allows inline scripts and styles
- Good balance of security and functionality

### Strict CSP (Recommended)
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-xyz123'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:
```
- Uses nonces for scripts
- Allows HTTPS images
- Most secure while maintaining functionality

## Real-World Benefits

- **🛡️ XSS Prevention**: Blocks malicious script injection
- **🔒 Data Theft Prevention**: Stops unauthorized network requests
- **⚡ Performance**: Prevents loading of unwanted resources
- **📊 Monitoring**: Reports policy violations
- **🎯 Clickjacking Protection**: Controls iframe embedding

## Common CSP Challenges

### 1. **Inline Scripts Breaking**
```javascript
// ❌ This will be blocked by CSP
<script>alert('Hello');</script>

// ✅ Use external files or nonces instead
<script nonce="xyz123">alert('Hello');</script>
```

### 2. **Third-party Integrations**
```http
// ❌ Blocks Google Analytics
Content-Security-Policy: script-src 'self'

// ✅ Allow trusted domains
Content-Security-Policy: script-src 'self' https://www.google-analytics.com
```

### 3. **eval() and Similar Functions**
```javascript
// ❌ Blocked by default
eval('alert("test")');

// ✅ Avoid eval() or use 'unsafe-eval' (not recommended)
```

## Practical Examples

Eppo we'll see different CSP configurations and their effects:

### Files in this folder:
- `no-csp.html` - Vulnerable page without CSP
- `basic-csp.html` - Basic CSP implementation
- `strict-csp.html` - Strict CSP with nonces
- `csp-bypass-attempts.html` - Common bypass techniques
- `csp-report-only.html` - Testing mode without blocking
- `csp-violation-logger.html` - Monitoring violations

### Testing Process:
1. **Start with no-CSP** page and see vulnerabilities
2. **Apply basic CSP** and see what breaks
3. **Use strict CSP** with proper implementation
4. **Try bypass techniques** to understand limitations
5. **Monitor violations** in production-ready setup

## CSP Deployment Strategy

### Phase 1: Report-Only Mode
```http
Content-Security-Policy-Report-Only: default-src 'self'
```
- Test without breaking functionality
- Collect violation reports
- Identify needed allowances

### Phase 2: Gradual Enforcement
```http
Content-Security-Policy: default-src 'self'; report-uri /csp-violations
```
- Start with basic policy
- Monitor and adjust
- Add specific allowances as needed

### Phase 3: Strict Security
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-xxxxx'; style-src 'self'; report-uri /csp-violations
```
- Use nonces/hashes for inline content
- Remove unsafe-inline and unsafe-eval
- Maximum security with minimal functionality impact

Ready ah? Let's start implementing CSP step by step! 🚀 