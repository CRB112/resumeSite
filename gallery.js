function initGalleryWheelScroll() {
    const wrapper = document.querySelector('.gallery-wrapper');
    if (!wrapper) return;

    let isScrolling = false;

    wrapper.addEventListener('wheel', (event) => {
        if (event.target.closest('.gallery-wrapper') !== wrapper) return;

        event.preventDefault();

        if (isScrolling) return;

        isScrolling = true;
        const delta = event.deltaY || event.deltaX || 0;
        const scrollSpeed = .5;
        wrapper.scrollLeft += delta * scrollSpeed;
        setTimeout(() => { isScrolling = false; }, 1);
    }, { passive: false });
}
document.addEventListener('DOMContentLoaded', initGalleryWheelScroll);