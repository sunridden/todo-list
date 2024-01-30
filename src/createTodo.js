import todo from "./todo";
import { orderTodos } from "./orderTodos";
import { resetTodos } from "./orderTodos";

export default function createToDoItem() {

    const tasks = document.querySelector('.tasks');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const addTodoForm = document.querySelector('.new-todo-item-form');

    const inboxBtn = document.querySelector('.inbox');
    inboxBtn.addEventListener('click', () => {
        resetTodos();
    })

    //orders tasks based on current date
    const todayTasksBtn = document.querySelector('.today');
    todayTasksBtn.addEventListener('click', () => {
        const todayDate = new Date();
        todayDate.setHours(0,0,0,0);
        orderTodos(todayDate);
    })

    //orders tasks based on 7 days from current date
    const nextSevenDaysTasksBtn = document.querySelector('.nextSevenDays');
    nextSevenDaysTasksBtn.addEventListener('click', () => {
        const checkedDate = new Date();
        const cutoffDate = checkedDate.getDate() + 7;
        checkedDate.setDate(cutoffDate);
        orderTodos(checkedDate);
    })

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
        const priority = formData.get('new-priority');
        const todoItem = todo(title, description, date, priority);

        addTodoForm.reset();
        tasks.appendChild(todoItem);
    })
}