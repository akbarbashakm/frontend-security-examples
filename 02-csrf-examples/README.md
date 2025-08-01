# CSRF (Cross-Site Request Forgery) Examples 🎯

## What is CSRF?

CSRF is attack ah where attacker tricks users into performing actions they didn't intend to do on a website where they're already authenticated. Simply sollanumna, oru malicious website la irundhu victim's browser through legitimate website ku unauthorized requests anuppuvom.

## How CSRF Works

1. **User logs in** to legitimate site (bank.com)
2. **Browser stores** authentication cookies
3. **User visits** malicious site (attacker.com) 
4. **Malicious site triggers** request to bank.com
5. **Browser automatically** sends stored cookies
6. **Bank thinks** it's a legitimate request from user
7. **Attack succeeds** - money transferred without user knowledge!

## Types of CSRF Attacks

### 1. GET-based CSRF
- Simple image tags or links
- **Example**: `<img src="https://bank.com/transfer?to=attacker&amount=1000">`

### 2. POST-based CSRF  
- Hidden forms with auto-submit
- **Example**: Bank transfer forms, password changes

### 3. JSON-based CSRF
- Modern APIs with JSON payloads
- **Harder to exploit** but still possible

## Real-World Impact

- **Financial theft**: Money transfers, purchases
- **Account takeover**: Password/email changes  
- **Social engineering**: Posting on behalf of users
- **Privacy breach**: Changing privacy settings
- **Data manipulation**: Deleting posts, changing profiles

## CSRF vs XSS Difference

| CSRF | XSS |
|------|-----|
| Forces user to perform actions | Executes malicious scripts |
| Uses user's existing session | Injects code into page |
| Attack from external site | Attack within target site |
| No code execution on target | Direct code execution |

## Practical Examples

Eppo we'll create realistic scenarios to understand CSRF attacks:

### Files in this folder:
- `vulnerable-bank.html` - Vulnerable banking application
- `vulnerable-social.html` - Social media profile example  
- `attack-pages/` - Malicious pages that perform CSRF
- `secure-examples.html` - Proper CSRF protection
- `csrf-tokens.js` - Token-based protection demo

### Testing Process:
1. **Setup**: Run vulnerable applications
2. **Login**: Authenticate to target sites
3. **Attack**: Visit malicious pages in same browser
4. **Observe**: See unauthorized actions performed
5. **Learn**: Understand prevention techniques

## Common Vulnerable Actions

- ✅ **Money transfers** (most critical)
- ✅ **Password changes** 
- ✅ **Email updates**
- ✅ **Privacy settings**
- ✅ **Account deletions**
- ✅ **Social media posts**
- ✅ **File uploads**
- ✅ **Admin actions**

Ready ah? Let's start with a vulnerable banking example! 🏦 