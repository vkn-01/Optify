const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskContent = document.createElement('div');
        taskContent.classList.add('task');
        taskContent.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        const doneButton = document.createElement('button');
        doneButton.classList.add('done-button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(doneButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task')) {
        event.target.classList.toggle('completed');
    }
});
