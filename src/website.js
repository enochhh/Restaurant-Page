import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main; 
}

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Restaurant';

    header.appendChild(restaurantName);
    header.appendChild(createNav());
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const copyright = document.createElement('p');
    copyright.textContent = "Copyright © enochhh";
    footer.appendChild(copyright);
    return footer;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = "Home";
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveBtn(contactBtn);
        loadContact();
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function setActiveBtn(btn) {
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach((btn) => {
        if(btn !== this) {
            btn.classList.remove('active');
        }
    });
    btn.classList.add('active');
}

function loadWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveBtn(document.querySelector('.nav-btn'));
    loadHome();
}

export default loadWebsite;

