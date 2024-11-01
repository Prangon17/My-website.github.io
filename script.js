let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");

    // Wrap around if at the end or start of slides
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides and show only the current one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Controls to navigate slides
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Automatic slideshow with interval
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 6000); // Change slide every 6 seconds
// Create observer to trigger animations on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is in view
});

// Select elements to animate
document.querySelectorAll('.animate-fade-in, .animate-fade-slide-up').forEach(el => {
    observer.observe(el);
});

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
});
