
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const totalCountSpan = document.getElementById('total-count');
const completedCountSpan = document.getElementById('completed-count');
const clearBtn = document.getElementById('clear-btn');


document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
    toggleAddButton();
});


function toggleAddButton() {
    addBtn.disabled = todoInput.value.trim() === '';
}


todoInput.addEventListener('input', toggleAddButton);


toggleAddButton();


addBtn.addEventListener('click', addTodo);
clearBtn.addEventListener('click', clearAllTodos);

todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && !addBtn.disabled) addTodo();
});


todoList.addEventListener('click', handleTodoClick);


function addTodo() {
    const todoText = todoInput.value.trim();

    
    if (todoText === '') {
        alert("Please enter a task!");
        return;
    }

    
    const todo = {
        id: Date.now(), 
        text: todoText,
        completed: false
    };

    
    createTodoElement(todo, true);
    
    
    saveLocalTodo(todo);

    
    todoInput.value = '';

    
    toggleAddButton();
    
    updateStats();
}

function createTodoElement(todo, toTop = true) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.setAttribute('data-id', todo.id);

    if (todo.completed) {
        li.classList.add('completed');
    }

    li.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <div class="actions">
            <button class="action-btn edit-btn">Edit</button>
            <button class="action-btn delete-btn">Delete</button>
        </div>
    `;

    if (toTop) {
        todoList.prepend(li);
    } else {
        todoList.appendChild(li);
    }
}

function handleTodoClick(e) {
    const item = e.target;
    const li = item.closest('li');
    
    
    if (!li) return;

    const todoId = li.getAttribute('data-id');
    
    const clickedInsideActions = item.closest('.actions');
    const clickedInput = item.classList.contains('edit-input') || item.tagName === 'INPUT';
    if (!clickedInsideActions && !clickedInput) {
        li.classList.toggle('completed');
        updateLocalTodoStatus(todoId);
        updateStats();
        return;
    }
    
    if (item.classList.contains('edit-btn')) {
        const textSpan = li.querySelector('.todo-text');
        const currentText = textSpan.innerText;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'edit-input';
        input.value = currentText;
        textSpan.replaceWith(input);

        
        item.classList.remove('edit-btn');
        item.classList.add('save-btn');
        item.innerText = 'Save';

        input.focus();
        
        input.addEventListener('keypress', function(ev) {
            if (ev.key === 'Enter') item.click();
        });
        return;
    }

    
    if (item.classList.contains('save-btn')) {
        const input = li.querySelector('.edit-input');
        const newText = input.value.trim();
        if (newText === '') {
            alert('Todo cannot be empty');
            return;
        }

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.innerText = newText;
        input.replaceWith(span);

        
        item.classList.remove('save-btn');
        item.classList.add('edit-btn');
        item.innerText = 'Edit';

        
        updateLocalTodoText(todoId, newText);
        return;
    }

    
    if (item.classList.contains('delete-btn')) {
        
        li.remove();
        
        
        removeLocalTodo(todoId);
        updateStats();
    }
}

function updateStats() {
    const totalTodos = document.querySelectorAll('.todo-item').length;
    const completedTodos = document.querySelectorAll('.todo-item.completed').length;

    totalCountSpan.innerText = totalTodos;
    completedCountSpan.innerText = completedTodos;

    
    if (totalTodos > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    
    const emptyMsg = document.getElementById('empty-msg');
    if (emptyMsg) {
        if (totalTodos === 0) {
            emptyMsg.classList.remove('hidden');
        } else {
            emptyMsg.classList.add('hidden');
        }
    }
}


function clearAllTodos() {
    if (confirm('Are you sure you want to delete all tasks?')) {
        
        todoList.innerHTML = '';
        
        
        localStorage.removeItem('todos');
        
        updateStats();
    }
}



function saveLocalTodo(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    // Add new todo to front so newest appear first
    todos.unshift(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        createTodoElement(todo, false);
    });
    updateStats();
}

function removeLocalTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    
    const updatedTodos = todos.filter(todo => todo.id.toString() !== id.toString());
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function updateLocalTodoStatus(id) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    
    todos.forEach(todo => {
        if (todo.id.toString() === id.toString()) {
            todo.completed = !todo.completed;
        }
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateLocalTodoText(id, newText) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        if (todo.id.toString() === id.toString()) {
            todo.text = newText;
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}