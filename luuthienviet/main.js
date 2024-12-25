function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button onclick="deleteTask(this)">X</button>
        `;
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskItem.addEventListener('click', function (e) {
            if (e.target.tagName !== 'BUTTON') {
                toggleTaskCompletion(taskItem);
            }
        });

        taskList.appendChild(taskItem);
    });
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(item => ({
        text: item.querySelector('span').textContent, 
        completed: item.classList.contains('completed')
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    taskItem.addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') {
            toggleTaskCompletion(taskItem);
        }
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();
    saveTasks();
}
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
    saveTasks();
}

function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle('completed');
    saveTasks();
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.addEventListener('DOMContentLoaded', loadTasks);


