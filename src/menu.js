function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(
        createMenuEntry(
            'Filet Mignon' ,
            'Juicy and delicious', 
            '$45'
        )
    );
    return menu;
}

function createMenuEntry(name, description, price) {
    const menuEntry = document.createElement('div'); 
    menuEntry.classList.add('menu-entry');

    const title = document.createElement('h2');
    title.textContent = name;

    const describe = document.createElement('p');
    describe.textContent = description;

    const cost = document.createElement('p');
    cost.textContent = price;

    // const foodPic = document.createElement('img');
    // foodPic.src = PLACEHOLDER;
    // foodPic.alt = PLACEHOLDER;

    menuEntry.appendChild(title);
    menuEntry.appendChild(describe);
    menuEntry.appendChild(cost); 
    //menuEntry.appendChild(foodPic);

    return menuEntry;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu; 