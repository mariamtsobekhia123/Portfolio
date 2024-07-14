document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    const mainSection = document.querySelector('main');

    const colors = ['#f0e6f6', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc'];

    changeColorButton.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        mainSection.style.backgroundColor = randomColor;
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
