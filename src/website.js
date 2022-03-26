import loadMenu from "./menu";
import loadHome from "./home";

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main; 
}

function loadWebsite() {
    const content = document.getElementById('content');
    const text = document.createElement('p');
    text.textContent = "Hello";
    content.appendChild(text);
    content.appendChild(createMain());
    // content.appendChild(loadMenu());
    content.appendChild(loadHome());
}

export default loadWebsite;

