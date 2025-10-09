document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.navButton, .navBarButton');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navigate(button.id);
        });
    });
});

function navigate(pageName) {
    let url = `${pageName}.html`; 
    window.location.href = url;
}