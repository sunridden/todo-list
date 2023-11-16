import createPriority from "./createPriority";

export default function todo(title, description, date, priority) {

    const task = document.createElement('div');
    task.classList.add('new-todo-item');

    const addPriority = createPriority(priority);
    task.classList.add(addPriority);

    const left_task_panel = document.createElement('div');
    left_task_panel.classList.add('left-task-panel');

    const right_task_panel = document.createElement('div');
    right_task_panel.classList.add('right-task-panel');

    const btn = document.createElement('button');
    btn.classList.add('task-clear-btn');

    //Sets todos as complete
    btn.addEventListener('click', () => {
        task.remove()
    })

    const taskContent = document.createElement('div');

    left_task_panel.appendChild(btn);
    left_task_panel.appendChild(taskContent);

    const taskTitle = document.createElement('p');
    taskTitle.textContent = title;

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('description');
    taskDescription.textContent = description;

    taskContent.appendChild(taskTitle);
    taskContent.appendChild(taskDescription);

    const taskDate = document.createElement('p');
    taskDate.textContent = date;
    
    right_task_panel.appendChild(taskDate);

    task.appendChild(left_task_panel);
    task.append(right_task_panel);

    return task;
}