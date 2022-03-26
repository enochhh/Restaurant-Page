function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.appendChild(createText('Some placeholder text 1'));
    home.appendChild(createText('Some placeholder text 2'));
    home.appendChild(createText('Some placeholder text 3'));

    return home;
}

function createText(txt) {
    const text = document.createElement('p');
    text.innerText = txt;
    return text;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;