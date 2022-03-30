function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    // const homeImg = document.createElement('img');
    // homeImg.src = 'images/patio.webp';
    
    // home.appendChild(createText('Some placeholder text 1'));
    // home.appendChild(createText('Some placeholder text 2'));
    // home.appendChild(createText('Some placeholder text 3'));
    home.appendChild(homeImg);
    return home;
}


function createText(txt) {
    const text = document.createElement('p');
    text.textContent = txt;
    return text;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;