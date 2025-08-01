// 🛡️ CSP Demo JavaScript File
// This file demonstrates how external same-origin scripts work with CSP

console.log('🎯 External JavaScript file loaded successfully!');
console.log('✅ This script is allowed because it\'s from the same origin');

// CSP Helper Functions
window.CSPDemo = {
    // Test functions for CSP violations
    testViolations: {
        inlineScript: function() {
            console.log('🚨 Testing inline script violation...');
            // This would be blocked if executed inline
            return 'Inline script test';
        },
        
        externalScript: function(url) {
            console.log('🚨 Testing external script loading:', url);
            const script = document.createElement('script');
            script.src = url;
            return script;
        },
        
        evalTest: function(code) {
            console.log('🚨 Testing eval() execution:', code);
            try {
                return eval(code);
            } catch (error) {
                console.log('✅ eval() blocked by CSP:', error.message);
                return error;
            }
        }
    },
    
    // CSP Utilities
    utils: {
        generateNonce: function() {
            // Generate a random nonce for CSP
            const array = new Uint8Array(16);
            crypto.getRandomValues(array);
            return btoa(String.fromCharCode.apply(null, array)).replace(/[+/=]/g, '');
        },
        
        checkCSPSupport: function() {
            // Check if browser supports CSP
            return 'securitypolicyviolation' in document || 'SecurityPolicyViolationEvent' in window;
        },
        
        getCurrentCSP: function() {
            // Get current CSP from meta tag
            const metaCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
            return metaCSP ? metaCSP.content : 'No CSP meta tag found';
        }
    },
    
    // Event handlers for demonstrations
    handlers: {
        onViolation: function(event) {
            console.log('🚨 CSP Violation Event:', {
                blockedURI: event.blockedURI,
                violatedDirective: event.violatedDirective,
                originalPolicy: event.originalPolicy,
                sourceFile: event.sourceFile,
                lineNumber: event.lineNumber,
                columnNumber: event.columnNumber
            });
            
            // Display violation in UI if violation log exists
            const violationLog = document.getElementById('violationLog');
            if (violationLog) {
                const timestamp = new Date().toLocaleTimeString();
                const entry = document.createElement('div');
                entry.innerHTML = `
                    <strong>[${timestamp}] CSP Violation:</strong><br>
                    Directive: ${event.violatedDirective}<br>
                    Blocked: ${event.blockedURI}<br>
                    Source: ${event.sourceFile}:${event.lineNumber}
                `;
                entry.style.color = '#dc3545';
                entry.style.marginBottom = '10px';
                entry.style.borderBottom = '1px solid #dee2e6';
                entry.style.paddingBottom = '5px';
                violationLog.appendChild(entry);
                violationLog.scrollTop = violationLog.scrollHeight;
            }
        }
    }
};

// Set up CSP violation monitoring
if (CSPDemo.utils.checkCSPSupport()) {
    document.addEventListener('securitypolicyviolation', CSPDemo.handlers.onViolation);
    console.log('✅ CSP violation monitoring enabled');
} else {
    console.log('⚠️ CSP violation events not supported in this browser');
}

// Initialize CSP demo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🛡️ CSP Demo initialized');
    console.log('📋 Current CSP Policy:', CSPDemo.utils.getCurrentCSP());
    
    // Add some demo functionality
    window.demoFunctions = {
        safeExternalLoad: function() {
            console.log('✅ This function is safely loaded from external file');
            alert('External JavaScript function executed safely!');
        },
        
        testCSPViolation: function() {
            console.log('🚨 Attempting to trigger CSP violation...');
            try {
                // This will trigger a CSP violation
                eval('console.log("This eval should be blocked")');
            } catch (error) {
                console.log('✅ CSP successfully blocked eval()');
            }
        }
    };
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSPDemo;
} 