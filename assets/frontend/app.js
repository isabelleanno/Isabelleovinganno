// This app's main JavaScript file!

// Import main css file
import './scss/main.scss';
// Import Bootstrap JavaScript (this includes offcanvas)
import 'bootstrap';


//Find all mailto: buttons, and replace with copied to clipboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    mailtoLinks.forEach(link => {
        const email = link.href.replace('mailto:', '').split('?')[0];
        
        link.href = '#';
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Copy email to clipboard
            navigator.clipboard.writeText(email).then(function() {
                // Show success alert
                alert('Email address copied: ' + email);
            }).catch(function(err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Email address copied: ' + email);
            });
        });
    });
});
