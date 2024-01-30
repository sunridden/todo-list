export function orderTodos(cutoffDate) {
    //should todos be an array? list?
    //one main fuction or divide it into categories ie date, priority, etc...
    //array filtering by date and list by date 
    // with a cutoff date
    const taskList = document.querySelectorAll('.new-todo-item');

    taskList.forEach((task) => {
        const date = task.lastElementChild.textContent;
        const testDate1 = new Date(parseInt(date.substring(0, 4)), parseInt(date.substring(5, 7)) - 1, parseInt(date.substring(8)));
        if (!(testDate1 <= cutoffDate)) {
            task.style.display='none';
        } else {
            task.style.display='flex';
        }
    })
}

export function resetTodos() {
    const taskList = document.querySelectorAll('.new-todo-item');

    taskList.forEach((task) => {
        task.style.display='flex';
    })
}

export function orderTodosByClass(projectName) {
    const taskList = document.querySelectorAll('.new-todo-item');

    taskList.forEach((task) => {
        if (!(task.classList.contains(projectName))) {
            task.style.display='none';
        } else {
            task.style.display='flex';
        }
    })
}