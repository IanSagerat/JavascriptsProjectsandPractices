// const todoList = [];
const todoLists = [{name: 'make dinner', dueDate: '2022-12-22'}, 
    {name:'wash dishes', dueDate: '2022-12-22'}];

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';
    todoLists.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoLists.splice(${index}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });
    const todoListss = document.querySelector('.js-todo-list');
    todoListss.innerHTML = todoListHTML;
    }

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;
    const name = inputElement.value;
    // const display = document.querySelector('.displayTodo');

    todoLists.push({name, dueDate});
    inputElement.value = '';
    // display.innerHTML = todoList.join('<br>');
    renderTodoList();
}


