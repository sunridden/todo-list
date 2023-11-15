import todo from "./todo";

export default function createToDoItem() {

    const tasks = document.querySelector('.tasks');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const addTodoForm = document.querySelector('.new-todo-item-form');


    cancelBtn.addEventListener('click', () => {
        addTodoForm.classList.add('hidden');
        addTodoForm.reset();
    })

    addTaskBtn.addEventListener('click', function() {
        addTodoForm.classList.remove('hidden');
    })

    addTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        addTodoForm.classList.add('hidden');

        const formData = new FormData(addTodoForm);
        const title = formData.get('title');
        const description = formData.get('description');
        const date = formData.get('date');
        const todoItem = todo(title, description, date);
        addTodoForm.reset();
        tasks.appendChild(todoItem);
    })
}