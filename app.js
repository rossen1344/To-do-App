const text = document.getElementById('text');
const addTaskButton = document.getElementById('add-task-btn');
const saveTaskButton = document.getElementById('save-todo-btn');
const listBox = document.getElementById('listBox');
const saveIndex = document.getElementById('saveIndex');

let todoArray = [];

addTaskButton.addEventListener('click', (a) => {
a.preventDefault();
let todo = localStorage.getItem('todo');

if (todo === null) {
    todoArray = [];
} else {
    todoArray = JSON.parse(todo);
}  
todoArray.push(text.value);
text.value = '';
localStorage.setItem('todo', JSON.stringify(todoArray));
 displayTodo();
});

function displayTodo() {
    let todo = localStorage.getItem('todo');
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    let htmlCode = '';
    todoArray.forEach((list, index) => {
        htmlCode += `<div>
            <p>${list}</p>
            <button onclick='edit(${index})' type="button" class="btn btn-outline-danger">Edit</button>
            <button onclick='deleteTodo(${index})' type="button" class="btn btn-outline-warning">Delete</button>
        </div>`;
    });
    listBox.innerHTML = htmlCode;
}

function deleteTodo(index) {
    let todo = localStorage.getItem('todo');
    todoArray = JSON.parse(todo);
    todoArray.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
}

function edit(index) {
    saveIndex.value = index;
    let todo = localStorage.getItem('todo');
    todoArray = JSON.parse(todo);
    text.value = todoArray[index];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}

saveTaskButton.addEventListener('click', () => {
    let todo = localStorage.getItem('todo');
    todoArray = JSON.parse(todo);
    let id = saveIndex.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = 'block';
    saveTaskButton.style.display = 'none';
    text.value = '';
    localStorage.setItem('todo', JSON.stringify(todoArray));
    displayTodo();
   });
