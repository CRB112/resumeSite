export function setupBottomSlideInAnimation() {
    const elements = document.querySelectorAll('.slide-up');

    console.log("observing:", elements.length);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log("intersect:", entry.isIntersecting);

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0
    });

    elements.forEach((el) => observer.observe(el));
}