import loadMenu from "./menu";

function loadWebsite() {
    const content = document.getElementById('content');
    const text = document.createElement('p');
    text.textContent = "Hello";
    content.appendChild(text);
    content.appendChild(createMain());
    content.appendChild(loadMenu());
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main; 
}

export default loadWebsite;

