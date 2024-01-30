/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createPriority.js":
/*!*******************************!*\
  !*** ./src/createPriority.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPriority)\n/* harmony export */ });\nfunction createPriority(priority) {\n    switch(priority) {\n        case 'high':\n            return 'priority-high';\n        case 'medium':\n            return 'priority-medium';\n        default:\n            return 'priority-low';\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/createPriority.js?");

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createToDoItem)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _orderTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderTodos */ \"./src/orderTodos.js\");\n\n\n\n\nfunction createToDoItem() {\n\n    const tasks = document.querySelector('.tasks');\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const cancelBtn = document.querySelector('.cancel-btn');\n    const addTodoForm = document.querySelector('.new-todo-item-form');\n\n    const inboxBtn = document.querySelector('.inbox');\n    inboxBtn.addEventListener('click', () => {\n        (0,_orderTodos__WEBPACK_IMPORTED_MODULE_1__.resetTodos)();\n    })\n\n    //orders tasks based on current date\n    const todayTasksBtn = document.querySelector('.today');\n    todayTasksBtn.addEventListener('click', () => {\n        const todayDate = new Date();\n        todayDate.setHours(0,0,0,0);\n        (0,_orderTodos__WEBPACK_IMPORTED_MODULE_1__.orderTodos)(todayDate);\n    })\n\n    //orders tasks based on 7 days from current date\n    const nextSevenDaysTasksBtn = document.querySelector('.nextSevenDays');\n    nextSevenDaysTasksBtn.addEventListener('click', () => {\n        const checkedDate = new Date();\n        const cutoffDate = checkedDate.getDate() + 7;\n        checkedDate.setDate(cutoffDate);\n        (0,_orderTodos__WEBPACK_IMPORTED_MODULE_1__.orderTodos)(checkedDate);\n    })\n\n    cancelBtn.addEventListener('click', () => {\n        addTodoForm.classList.add('hidden');\n        addTodoForm.reset();\n    })\n\n    addTaskBtn.addEventListener('click', function() {\n        addTodoForm.classList.remove('hidden');\n    })\n\n    addTodoForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n\n        addTodoForm.classList.add('hidden');\n\n        const formData = new FormData(addTodoForm);\n        const title = formData.get('title');\n        const description = formData.get('description');\n        const date = formData.get('date');\n        const priority = formData.get('new-priority');\n        const todoItem = (0,_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, date, priority);\n\n        addTodoForm.reset();\n        tasks.appendChild(todoItem);\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/createTodo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/createTodo.js\");\n\n\n(0,_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/orderTodos.js":
/*!***************************!*\
  !*** ./src/orderTodos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orderTodos: () => (/* binding */ orderTodos),\n/* harmony export */   resetTodos: () => (/* binding */ resetTodos)\n/* harmony export */ });\nfunction orderTodos(cutoffDate) {\n    //should todos be an array? list?\n    //one main fuction or divide it into categories ie date, priority, etc...\n    //array filtering by date and list by date \n    // with a cutoff date\n    const taskList = document.querySelectorAll('.new-todo-item');\n\n    taskList.forEach((task) => {\n        const date = task.lastElementChild.textContent;\n        const testDate1 = new Date(parseInt(date.substring(0, 4)), parseInt(date.substring(5, 7)) - 1, parseInt(date.substring(8)));\n        if (!(testDate1 <= cutoffDate)) {\n            task.style.display='none';\n        } else {\n            task.style.display='flex';\n        }\n    })\n}\n\nfunction resetTodos() {\n    const taskList = document.querySelectorAll('.new-todo-item');\n\n    taskList.forEach((task) => {\n        task.style.display='flex';\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/orderTodos.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todo)\n/* harmony export */ });\n/* harmony import */ var _createPriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPriority */ \"./src/createPriority.js\");\n\n\nfunction todo(title, description, date, priority) {\n\n    const task = document.createElement('div');\n    task.classList.add('new-todo-item');\n\n    const addPriority = (0,_createPriority__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(priority);\n    task.classList.add(addPriority);\n\n    const left_task_panel = document.createElement('div');\n    left_task_panel.classList.add('left-task-panel');\n\n    const right_task_panel = document.createElement('div');\n    right_task_panel.classList.add('right-task-panel');\n\n    const btn = document.createElement('button');\n    btn.classList.add('task-clear-btn');\n\n    //Sets todos as complete\n    btn.addEventListener('click', () => {\n        task.remove()\n    })\n\n    const taskContent = document.createElement('div');\n\n    left_task_panel.appendChild(btn);\n    left_task_panel.appendChild(taskContent);\n\n    const taskTitle = document.createElement('p');\n    taskTitle.textContent = title;\n\n    const taskDescription = document.createElement('p');\n    taskDescription.classList.add('description');\n    taskDescription.textContent = description;\n\n    taskContent.appendChild(taskTitle);\n    taskContent.appendChild(taskDescription);\n\n    const taskDate = document.createElement('p');\n    taskDate.textContent = date;\n    \n    right_task_panel.appendChild(taskDate);\n\n    task.appendChild(left_task_panel);\n    task.append(right_task_panel);\n\n    return task;\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;