const app = document.querySelector('#app');

const div = document.createElement('div');
div.classList.add('container');

const form = document.createElement('form');

const text = document.createElement('imput');
text.setAttribute('type','text');

app.appendChild(div);

div.appendChild(form);

form.appendChild(text);
