function typedText(element, text, speed = 50) {
    let typed = false;
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !typed) {
                typed = true;
                type();
            }
        });
    });

    observer.observe(element);
}
const elements = document.querySelectorAll(".typedText");

elements.forEach(el => {
    const text = el.getAttribute("data-text");
    typedText(el, text, 50);
});