const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form")

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(savedAddInput, 500));
form.addEventListener("submit", submitForm);

const formData = {};

updateInput ();

function savedAddInput(event){
    event.preventDefault();
    const { email, message } = form.elements;
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    console.log(formData)
  
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))

}

function submitForm (event) {
    event.preventDefault();

    const { email, message } = form.elements;
    formData[email.name] = email.value;
    formData[message.name] = message.value;
    console.log(formData)
    
    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset();
}


function updateInput () {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
        return;
    }
    auditInput = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = auditInput.email;
    form.elements.message.value = auditInput.message;
}