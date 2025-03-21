const nameUser = document.querySelector(".name");
const surname = document.querySelector(".surname");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const contactInfo = document.querySelector(".contact-info");
const saveContact = document.querySelector(".save-contact");
const clearContact = document.querySelector(".clear-contact");

function loadContact() {
    const contact = JSON.parse(localStorage.getItem('contact'));
    if (contact) {
        nameUser.value = contact.name;
        surname.value = contact.surname;
        phone.value = contact.phone;
        email.value = contact.email;
        contactInfo.innerText = `${contact.name} ${contact.surname} - ${contact.phone} (${contact.email})`;
    }
}

loadContact();

saveContact.addEventListener("click", () => {
    const contact = {
                name: nameUser.value,
                surname: surname.value,
                phone: phone.value,
                email: email.value
            };
            localStorage.setItem('contact', JSON.stringify(contact));
            loadContact();
})

clearContact.addEventListener("click", () => {
    localStorage.removeItem('contact');
    contactInfo.innerText = '';
    nameUser.value = '';
    surname.value = '';
    phone.value = '';
    email.value = '';
})