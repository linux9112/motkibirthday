/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // Login Validation logic (page 1)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name').value.trim().toLowerCase();
            const phoneInput = document.getElementById('phone').value.trim();

            const requiredName = "dinda";
            const requiredPhone = "123456789";

            if (nameInput === requiredName && phoneInput === requiredPhone) {
                window.location.href = 'page2.html';
            } else {
                alert('Wrong Details! Please try again.');
            }
        });
    }

    // Page 6 Surprise Box logic
    const giftbox = document.getElementById('giftbox');
    if (giftbox) {
        giftbox.addEventListener('click', () => {
            giftbox.classList.add('opened');
            setTimeout(() => {
                const surpriseBtn = document.getElementById('next-btn');
                if (surpriseBtn) {
                    surpriseBtn.style.display = 'inline-block';
                    surpriseBtn.classList.add('fade-in');
                }
            }, 1000); // show button after 1s
        });
    }

});
