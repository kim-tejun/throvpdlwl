document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-trigger");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    scrollElements.forEach((el) => observer.observe(el));
});