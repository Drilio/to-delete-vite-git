const app = document.querySelector('#app');

const div = document.createElement('div');
div.classList.add('container');

const form = document.createElement('form');
const label = document.createElement('label');

const text = document.createElement('input');
text.setAttribute('type','text');

const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.innerHTML = "Submit";

app.appendChild(div);

div.appendChild(form);

form.appendChild(label);
form.appendChild(text);
form.appendChild(submit);


