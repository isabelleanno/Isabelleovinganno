// This app's main JavaScript file!

// Import main css file
import './scss/main.scss';
// Import Bootstrap JavaScript 
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
// Import GSAP for cool animations!
import { gsap } from "gsap"; 
 
document.addEventListener('DOMContentLoaded', function() {
// Alert frame
gsap.to(".alert-frame", { opacity: 1, display: "flex", duration: 0.5 });
gsap.to(".alert-frame", { opacity: 0, display: "none", duration: 1, delay: 3 });
});

// Import Swiper 
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper(".process-swiper", {
    slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });