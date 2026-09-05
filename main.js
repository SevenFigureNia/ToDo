const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

function addTask() {
    const task = input.value.trim();

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    const span = document.createElement('span');
    span.textContent = '\u00D7';
    li.appendChild(span);
    list.appendChild(li);
    input.value = '';
}

list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
});

button.addEventListener('click', addTask);
