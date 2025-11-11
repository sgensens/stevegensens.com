// Video Background Controls
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    // Ensure video plays on load
    if (video) {
        video.play().catch(function(error) {
            console.log("Video autoplay prevented:", error);
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all interest cards and blog posts
    document.querySelectorAll('.interest-card, .blog-post').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Optional: Add a function to pause/play video on user interaction
function toggleVideo() {
    const video = document.getElementById('bg-video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
