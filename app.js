const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

let todoArray = [];

addTaskButton.addEventListener("click", (a) => {
a.preventDefault();
let todo = localStorage.getItem("todo");

if (todo === null) {
    todoArray = [];
} else {
    todoArray = JSON.parse(todo);
}  
todoArray.push(text.value);
text.value = "";
localStorage.setItem("todo", JSON.stringify(todoArray));
 displayTodo();
});

function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, index) => {
        htmlCode += `<div>
            <p>${list}</p>
            <button onclick='edit(${index})'>Edit</button>
           <button onclick='deleteTodo(${ind})'>Delete</button>
        </div>`;
    });
    listBox.innerHTML = htmlCode;
}
