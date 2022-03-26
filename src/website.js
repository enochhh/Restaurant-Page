function loadWebsite() {
    const content = document.getElementById('content');
    const text = document.createElement('p');
    text.textContent = "Hello";
    content.appendChild(text);
}

export default loadWebsite;

