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

  // 3D Card Flip animation
  const flippableCards = document.querySelectorAll('.card--flippable');
    
    function flipCardToBack(card) {
        const cardFront = card.querySelector('.card-front');
        const cardBack = card.querySelector('.card-back');
        gsap.to(card, { 
            rotationY: 180, 
            duration: 1,
            onUpdate: function() {
                if (this.progress() >= 0.25) {
                    if (!cardFront.classList.contains('d-none')) {
                        card.classList.add('flipped-back');
                        cardFront.classList.add('d-none');
                        cardBack.classList.remove('d-none');
                    }
                }
            },
        });
    }
    function flipCardToFront(card) {
        const cardFront = card.querySelector('.card-front');
        const cardBack = card.querySelector('.card-back');
        gsap.to(card, { 
        rotationY: 0, 
        duration: 1,
        onUpdate: function() {
            if (this.progress() >= 0.25) {
                    if (cardFront.classList.contains('d-none')) {
                    card.classList.remove('flipped-back');
                    cardFront.classList.remove('d-none');
                    cardBack.classList.add('d-none');
                    }
                }
            }
        });
    }

  flippableCards.forEach(card => {
    let flipBackTimeout;
    let isAnimating = false;

    card.addEventListener('mouseenter', () => {
        if (flipBackTimeout) {
            clearTimeout(flipBackTimeout);
            flipBackTimeout = null;
        }
        
        if (!isAnimating && !card.classList.contains('flipped-back')) {
            isAnimating = true;
            flipCardToBack(card);

            setTimeout(() => {
                isAnimating = false;
            }, 1000);
        }
    });

    card.addEventListener('mouseleave', () => {
        flipBackTimeout = setTimeout(() => {
            if (!isAnimating && card.classList.contains('flipped-back')) {
                isAnimating = true;
                flipCardToFront(card);
                
                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            }
        });
    });
});
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
        type: "progressbar",
      },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });