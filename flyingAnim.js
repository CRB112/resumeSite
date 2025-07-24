
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting & !element.classList.contains('visible')) {
            element.classList.add('visible');
            element.classList.remove('fly-out');
        } else {
            if (!element.classList.contains('fly-out')) {
            element.classList.add('fly-out');
            element.classList.remove('visible');
            }
        }
    });
}, { threshold: 0.5 });
const elementsToAnimate = document.querySelectorAll('.animateOnScroll');


elementsToAnimate.forEach(element => {
    element.classList.add('hidden');
    observer.observe(element); 
});