
const headers = document.querySelectorAll('.dropdownSection div > button');

headers.forEach(header => {
    const content = header.nextElementSibling;
    content.style.display = 'none';
    header.addEventListener('click', function() {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});