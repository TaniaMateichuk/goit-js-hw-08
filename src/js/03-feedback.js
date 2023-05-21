
import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textAreaEl = document.querySelector('.feedback-form textarea');
console.dir(formEl);
const LOCALSTORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onCreatLocalObject, 500));
formEl.addEventListener('submit', onFormSubmit);


let formDate = JSON.parse(localStorage.getItem('LOCALSTORAGE_KEY')) || {};
const { email, message } = formEl.elements;
reloadPage();

function onCreatLocalObject(evt) {
    formDate = { email: email.value, message: message.value };
    const stringifyKey = localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(formDate) );
}

function reloadPage() {
  if (formDate) {
    email.value = formDate.email || '';
    message.value = formDate.message || '';
  }
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    }
    localStorage.removeItem('LOCALSTORAGE_KEY');
    evt.currentTarget.reset();
}



