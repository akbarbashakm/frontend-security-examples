# 🛡️ Frontend Security Learning Hub

A comprehensive, interactive learning platform for mastering web security vulnerabilities and best practices. Built with real-world examples, live demos, and hands-on exercises.

## 🌟 Features

- **8 Complete Security Modules** - From XSS to Dependency Vulnerabilities
- **Interactive Live Demos** - Try attacks and see defenses in action
- **Real-World Examples** - Vulnerable and secure implementations
- **Beautiful UI** - Modern, responsive design with smooth animations
- **GitHub Pages Ready** - Deploy instantly as a static site

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/frontend-security-hub.git
   cd frontend-security-hub
   ```

2. **Open the main page:**
   ```bash
   open index.html
   ```
   Or simply visit: `https://yourusername.github.io/frontend-security-hub`

3. **Start learning!** 🎯

## 📚 Security Modules

### 1. **Cross-Site Scripting (XSS)** 🎯
- **Reflected XSS** - Script injection via URL parameters
- **Stored XSS** - Persistent script storage in databases
- **DOM-based XSS** - Client-side script manipulation
- **Live Demo:** Try XSS payloads in real-time

### 2. **Cross-Site Request Forgery (CSRF)** 🔄
- **GET-based CSRF** - URL manipulation attacks
- **POST-based CSRF** - Form submission attacks
- **JSON-based CSRF** - API endpoint attacks
- **Live Demo:** Banking transfer simulation

### 3. **Content Security Policy (CSP)** 🛡️
- **Script-src directives** - Control script execution
- **Style-src directives** - Control CSS loading
- **Frame-src directives** - Control iframe content
- **Live Demo:** CSP violation testing

### 4. **Authentication & Authorization** 🔐
- **Broken Authentication** - Weak login systems
- **Broken Access Control** - Privilege escalation
- **Session Management** - Session hijacking
- **Live Demo:** Auth bypass techniques

### 5. **Input Validation & Sanitization** 📝
- **SQL Injection** - Database manipulation
- **Command Injection** - System command execution
- **Path Traversal** - File system access
- **Live Demo:** Input validation testing

### 6. **Secure Data Storage** 💾
- **Encryption at Rest** - Data protection
- **Key Management** - Secure key handling
- **Session Security** - Secure session storage
- **Live Demo:** Encryption examples

### 7. **HTTPS & TLS Security** 🔒
- **Certificate Management** - SSL/TLS certificates
- **Cipher Suites** - Encryption algorithms
- **Security Headers** - HTTP security headers
- **Live Demo:** TLS configuration testing

### 8. **Dependency Vulnerabilities** 📦
- **Supply Chain Attacks** - Malicious dependencies
- **Vulnerability Scanning** - Automated security checks
- **Dependency Management** - Secure package handling
- **Live Demo:** Dependency scanning tools

## 🎮 Interactive Features

### **Live Security Demos**
- **XSS Attack Simulator** - Inject scripts and see them execute
- **CSRF Banking Demo** - Simulate cross-site request forgery
- **CSP Protection Tester** - Test Content Security Policy
- **Input Validation Checker** - Validate and sanitize input

### **Real-World Examples**
Each module includes:
- ✅ **Vulnerable implementations** - See how attacks work
- ✅ **Secure implementations** - Learn proper defenses
- ✅ **Attack demonstrations** - Step-by-step attack guides
- ✅ **Best practices** - Production-ready security patterns

## 📁 Project Structure

```
frontend-security-hub/
├── index.html                 # Main GitHub Pages site
├── README.md                  # This file
├── 01-xss-examples/          # Cross-Site Scripting
│   ├── vulnerable-reflected.html
│   ├── vulnerable-stored.html
│   ├── vulnerable-dom.html
│   ├── secure-examples.html
│   └── xss-payloads.md
├── 02-csrf-examples/         # Cross-Site Request Forgery
│   ├── vulnerable-bank.html
│   ├── secure-examples.html
│   ├── attack-pages/
│   └── csrf-tokens.js
├── 03-csp-examples/          # Content Security Policy
│   ├── no-csp.html
│   ├── basic-csp.html
│   ├── strict-csp.html
│   └── csp-report-only.html
├── 04-auth-examples/         # Authentication & Authorization
│   ├── vulnerable-login.html
│   ├── secure-auth.html
│   └── auth-bypass-techniques.html
├── 05-input-validation/      # Input Validation & Sanitization
│   ├── vulnerable-form.html
│   ├── secure-form.html
│   └── validation-libraries.html
├── 06-secure-storage/        # Secure Data Storage
│   ├── vulnerable-storage.html
│   ├── advanced-storage.html
│   └── key-management.html
├── 07-https-tls/             # HTTPS & TLS Security
│   ├── vulnerable-http.html
│   ├── advanced-tls.html
│   └── tls-testing.html
└── 08-dependency-vulnerabilities/ # Dependency Security
    ├── vulnerable-dependencies.html
    ├── secure-dependencies.html
    └── security-tools.html
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and modern features
- **CSS3** - Responsive design with animations
- **JavaScript (ES6+)** - Interactive functionality
- **Web Crypto API** - Client-side encryption
- **GitHub Pages** - Static site hosting

## 🚀 Deployment

### **GitHub Pages (Recommended)**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Frontend Security Learning Hub"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/frontend-security-hub
   ```

### **Local Development**

```bash
# Start a local server
python -m http.server 8000
# or
npx serve .

# Open in browser
open http://localhost:8000
```

## 🎯 Learning Path

### **Beginner Level**
1. Start with **XSS examples** - Most common vulnerability
2. Try **CSRF demos** - Understand cross-site attacks
3. Explore **Input Validation** - Foundation of security

### **Intermediate Level**
4. Study **CSP implementation** - Modern defense mechanism
5. Practice **Authentication** - User security
6. Learn **Secure Storage** - Data protection

### **Advanced Level**
7. Master **HTTPS/TLS** - Transport security
8. Analyze **Dependency Vulnerabilities** - Supply chain security

## 🔧 Customization

### **Adding New Modules**
1. Create a new folder: `09-new-module/`
2. Add `README.md` with module description
3. Create vulnerable and secure examples
4. Update `index.html` with new module card

### **Modifying Demos**
- Edit JavaScript functions in `index.html`
- Update CSS styles for custom themes
- Add new interactive features

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b new-feature`
3. **Make your changes**
4. **Test thoroughly** - Ensure all demos work
5. **Commit changes:** `git commit -am 'Add new feature'`
6. **Push to branch:** `git push origin new-feature`
7. **Submit a Pull Request**

### **Contribution Guidelines**
- ✅ Add comprehensive documentation
- ✅ Include both vulnerable and secure examples
- ✅ Test all interactive features
- ✅ Follow existing code style
- ✅ Add security best practices

## 📖 Educational Use

This project is designed for:
- **Security Researchers** - Study attack vectors
- **Web Developers** - Learn secure coding practices
- **Security Students** - Hands-on vulnerability training
- **Penetration Testers** - Practice attack techniques
- **Security Educators** - Teaching web security concepts

## ⚠️ Security Notice

**Important:** These examples are for educational purposes only!

- 🚨 **Never use vulnerable code in production**
- 🚨 **Only test on your own systems**
- 🚨 **Respect responsible disclosure**
- 🚨 **Follow ethical hacking guidelines**

## 📚 Additional Resources

### **Security Standards**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE/SANS Top 25](https://cwe.mitre.org/top25/)
- [Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

### **Security Tools**
- [Burp Suite](https://portswigger.net/burp) - Web application security testing
- [OWASP ZAP](https://owasp.org/www-project-zap/) - Free security scanner
- [Snyk](https://snyk.io/) - Dependency vulnerability scanning
- [Security Headers](https://securityheaders.com/) - Header analysis

### **Learning Platforms**
- [PortSwigger Web Security Academy](https://portswigger.net/web-security)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- [HackTheBox](https://www.hackthebox.com/) - Penetration testing practice

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OWASP** - For security standards and guidelines
- **Security Researchers** - For vulnerability discoveries
- **Open Source Community** - For tools and libraries
- **Security Educators** - For teaching best practices

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/frontend-security-hub/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/frontend-security-hub/discussions)
- **Email:** your-email@example.com

---

**🛡️ Happy Learning! Stay Secure! 🛡️**

*Built with ❤️ for the security community* 