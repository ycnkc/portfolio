document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1 // Elementin %15'i göründüğünde animasyon başlar
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Bir kez göründükten sonra takip etmeyi bırakır (performans için)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // .reveal sınıfı olan tüm elementleri gözlemle
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});