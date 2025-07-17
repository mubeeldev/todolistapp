let todoList =
    JSON.parse(localStorage.getItem('todoList')) || [
        {text: 'Learn JavaScript'},
        {text: 'Build a Todo App'}
        
    ]


const todoListElement = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

let render = '';

function renderTodoList() {
    for(let i = 0; i < todoList.length; i++) {
        console.log(todoList[i].text);
        render += `
            <li class="todo-item item${i}">
                <span class="todo-text fw-bold text-white fs-5 ">${todoList[i].text}</span>
                <input type="checkbox" class="completed${i} check" / >
                <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
            </li>
        `;
        document.getElementById('todo-list').innerHTML = render;
    }
}
function addTodo() {
    const todotext = todoInput.value;
    if(todotext.trim() === '') {
        alert('Please enter a todo item');
        return;
    }else {
        todoList.push({text: todotext});
        todoInput.value = '';
        render = '';
        renderTodoList();
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    render = '';
    renderTodoList();
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
renderTodoList();