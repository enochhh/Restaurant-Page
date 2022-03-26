function createHeader() {
    const header = document.createElement('div'); 
    header.innerText = "Menu";
}

function createMenu() {
    const menu = document.createElement('div');
    menu.innerText = "Menu";
    return menu;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.appendChild(createMenu());
}



export default loadMenu; 