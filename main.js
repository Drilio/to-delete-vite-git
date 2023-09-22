const app = document.querySelector('#app');

const div = document.createElement('div');
div.classList.add('container');

const form = document.createElement('form');
const label = document.createElement('label');

const text = document.createElement('input');
text.setAttribute('type','text');

const submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.setAttribute('id', 'submit-button');
submit.innerHTML = "Submit";

const toDoList = document.createElement('div');
toDoList.setAttribute('id', 'to-do');


app.appendChild(div);

div.appendChild(form);

form.appendChild(label);
form.appendChild(text);
form.appendChild(submit);

div.appendChild(toDoList);

document.getElementById('submit-button').addEventListener("click", submitTodo);

function submitTodo(e){
    e.preventDefault();

    const contener = document.createElement('div')
    contener.setAttribute('class', 'contener');

    const toDo = document.createElement('p');

    const deleteButton = document.createElement('button');

    deleteButton.innerHTML = "DELETE";
    
    toDo.innerHTML = text.value;
    toDoList.appendChild(contener)
    contener.appendChild(toDo);
    contener.appendChild(deleteButton);
    text.value = "";
}






