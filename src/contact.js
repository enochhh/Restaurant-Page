function createContact() {
    const contactField = document.createElement('div');
    contactField.classList.add('contact-field');

    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = "(555) 555-5555";

    const map = document.createElement('div');
    map.classList.add('map');
    map.textContent = "include map here";

    contactField.appendChild(contact);
    contactField.appendChild(map);

    return contactField;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;