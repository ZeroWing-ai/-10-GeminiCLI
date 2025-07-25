document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.classList.add('delete-button');

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-button')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        } else if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    }
});