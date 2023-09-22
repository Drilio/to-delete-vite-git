const app = document.querySelector('#app');

const div = document.createElement('div');
div.classList.add('container');

const form = document.createElement('form');
const label = document.createElement('label');

const text = document.createElement('input');
text.setAttribute('type','text');

app.appendChild(div);

div.appendChild(form);

form.appendChild(label);
form.appendChild(text);
