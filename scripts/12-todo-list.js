// const todoList = [];
const todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];

renderTodoList();

function saveToStorage(){
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

function renderTodoList(){
    let todoListHTML = '';
    todoLists.forEach((todoObject) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });
    const todoListss = document.querySelector('.js-todo-list');
    todoListss.innerHTML = todoListHTML;


        document.querySelectorAll('.delete-todo-button').forEach((deleteButton, index) => { 
        deleteButton.addEventListener('click', () => {
            console.log(index);
            todoLists.splice(index, 1);
            saveToStorage();
            renderTodoList();
        });
    });
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;
    const name = inputElement.value;
    // const display = document.querySelector('.displayTodo');

    todoLists.push({name, dueDate});
    inputElement.value = '';
    saveToStorage();
    // display.innerHTML = todoList.join('<br>');
    renderTodoList();
}


