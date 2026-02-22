// const todoList = [];
let todoLists = JSON.parse(localStorage.getItem('todoLists')) || [];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';
    for(let i = 0; i < todoLists.length; i++){
        const {name, dueDate} = todoLists[i];

        todoListHTML += `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="deleteTodo(${i})" class="delete-todo-button">Delete</button>
        `;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    }

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;
    const name = inputElement.value;

        if(name === '' || dueDate === ''){
        alert('Please enter todo name and date');
        return;
    }
    // const display = document.querySelector('.displayTodo');

    todoLists.push({name, dueDate});
    inputElement.value = '';
    dateInputElement.value = '';
    // display.innerHTML = todoList.join('<br>');
    saveToStorage();
    renderTodoList();
}

function deleteTodo(index){
    todoLists.splice(index, 1);
    saveToStorage();
    renderTodoList();
}

function saveToStorage(){
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

