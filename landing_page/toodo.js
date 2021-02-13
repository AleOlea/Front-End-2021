//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("clic", deleteCheck);

//Functions

function addTodo(event){
    event.preventDefault();
    console.log("hello");
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");
//Create LI
   const newTodo = document.createElement("li")
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

//Check mark button
const completedButton = document.createElement("button");
completedButton.innerHTML = "hello";
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Check trashButton
const trashButton = document.createElement("button");
trashButton.innerHTML = "bye";
trashButton.classList.add("trash-button");
todoDiv.appendChild(trashButton);

function deleteCheck(e){
    const item = e.target;
//Delete todo
if (item.classList[0] === "trash-btn" ) {
    const todo = item.parentElement;
    todo.remove()

}

}





//APPEND TO LIST

todoList.appendChild(todoDiv)

//Clear Todo INPUT value
todoInput.value = "";
}

