'use strict';

var taskContainer = document.querySelector('.taskContainer');
var mainInput = document.querySelector('.mainInput');
var targetButton = document.querySelector('.button');

function getInitialTasks() {
    //Инициализация массива объектов задач
    if (localStorage.getItem("tasks")) {
        return JSON.parse(localStorage.getItem("tasks")); //Если в localStorage есть информация
    } else {
        return []; //Если страница загружается впервые
    }
}

var tasks = getInitialTasks();
tasks.forEach(addTaskToDOM); //Построение DOM-дерева на основе tasks

targetButton.addEventListener("click", createTaskElem); //Вешаем обработчик на кнопку "ADD TASK"

document.addEventListener("keydown", function (event) {
    //Обработчик нажатой клавиши "Enter"
    if (event.key == 'Enter') {
        createTaskElem();
    }
});

function addListToLocal() {
    //добавление массива задач в localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTaskValue(task) {
    //Создание текста задачи для объекта task
    task.value = mainInput.value;
}
function createTaskID(task) {
    //Генерация и cсоздание ID задачи для объекта task
    task.id = new Date();
}

function createTaskObj(task) {
    //Добавление текста задачи и ID в объект task
    createTaskValue(task);
    createTaskID(task);
}

function addTask(task) {
    //Добавление объекта задачи в массив задач
    tasks.push(task);
}

function addTaskToDOM(task) {
    //Создание элемента DOM на основе объекта задачи
    var elem = document.createElement('li');
    elem.className = 'task';
    elem.innerHTML = task.value;
    elem.setAttribute('id', task.id);
    taskContainer.append(elem);
    mainInput.value = "";
}

function createTaskElem() {
    var task = {
        id: "",
        value: ""
    };
    createTaskObj(task);
    addTask(task);
    addTaskToDOM(task);
    addListToLocal(); //Обновление localStorage
}

taskContainer.onclick = function (e) {
    //Вешаем обработчик на элемент задачи для его удаления                                       
    var delTaskIndex = tasks.findIndex(function (item) {
        return item.id == e.target.id;
    });
    tasks.splice(delTaskIndex, 1); //Удаление объекта задачи из массива задач
    e.target.remove(); //Удаление элемента DOM
    addListToLocal(); //Обновление localStorage
};