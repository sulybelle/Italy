document.addEventListener('DOMContentLoaded', () => { 
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
  
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
     
    menuItem.forEach(item => {
        if(item.href === currentLocation){
            item.classList.add('active');
        }
    });
    const audio = document.getElementById("myAudio");
const musicBtn = document.getElementById("music-control");
const musicIcon = document.getElementById("music-icon");

musicBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        musicBtn.classList.add("playing");
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");  
    } else {
        audio.pause();
        musicBtn.classList.remove("playing");
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");  
    }
}); 
document.addEventListener('DOMContentLoaded', () => {
     
    const stars = document.querySelectorAll('.rating-stars i');
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                 
                stars.forEach(s => {
                    s.classList.remove('active');
                    s.classList.remove('fas');
                    s.classList.add('far');
                });
                 
                for (let i = 0; i < rating; i++) {
                    stars[i].classList.add('active', 'fas');
                    stars[i].classList.remove('far');
                }
            });
             
            star.addEventListener('mouseover', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    }
                });
            });
            
            star.addEventListener('mouseout', function() {
                const activeStars = document.querySelectorAll('.rating-stars .active');
                stars.forEach(s => {
                    if (!s.classList.contains('active')) {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });
    }
     
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#e74c3c';
                    isValid = false;
                     
                    input.addEventListener('input', function() {
                        if (this.value.trim()) {
                            this.style.borderColor = '';
                        }
                    });
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('Хабарламаңыз сәтті жіберілді! Біз жақын арада сізге хабарласамыз.');
                this.reset(); 
                if (this.classList.contains('feedback-form')) {
                    stars.forEach(s => {
                        s.classList.remove('active', 'fas');
                        s.classList.add('far');
                    });
                }
            } else {
                alert('Барлық міндетті өрістерді толтырыңыз.');
            }
        });
    });
});
});