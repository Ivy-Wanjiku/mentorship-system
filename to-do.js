const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = todoInput.value;

  if (newTask === '') {
      alert('Please enter a task!');
      return;
  }
  todoInput.value = '';
  addTask(newTask);
  saveData()
});

function addTask(task) {
  const listItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  listItem.appendChild(checkBox);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listItem.appendChild(deleteButton);
  

  todoList.appendChild(listItem);
  checkBox.addEventListener('change', function() {
      if (this.checked) {
          taskText.style.textDecoration = 'line-through';
      } else {
          taskText.style.textDecoration = 'none';
      }
  });
 
  deleteButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
  });

 // If i exclude this part it means that  the task added will not be displayed

  editButton.addEventListener('click', function() {
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
       
        taskText.textContent = this.previousSibling.value;
        listItem.classList.remove('editing');
        editButton.textContent = 'Edit';
    } else {
       
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.textContent;
        listItem.insertBefore(input, taskText);
        listItem.removeChild(taskText);
        listItem.classList.add('editing');
        editButton.textContent = 'Save';
        
    }
});

saveData();
}
//if this part is excluded when I reload my do to list on the website the task that I had added would not
//be displayed again
// function saveData() {
//   const tasks = [];
//   document.querySelectorAll('#todo-list li').forEach(task => {
//       const taskText = task.querySelector('span').textContent;
//       const isCompleted = task.classList.contains('completed');
//       tasks.push({ text: taskText, completed: isCompleted });
//   });
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   savedTasks.forEach(task => {
//       addTask(task.text);
//     });
//   });
function deleteTask(task) {
  task.remove();
  const taskText = task.querySelector('span').textContent;
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = savedTasks.findIndex(t => t.text === taskText);
  if (taskIndex !== -1) {
    savedTasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }}