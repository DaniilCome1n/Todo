'use strict';

var taskContainer = document.querySelector('.taskContainer');

var targetButton = document.querySelector('.button');
targetButton.addEventListener("click", addTask);

function createElem(elem, container) {
    container.prepend(elem);
}

function addListToLocal() {
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

function addTask() {
    var mainInput = document.querySelector('.mainInput');
    var newElem = document.createElement('div');
    newElem.className = "task";
    newElem.innerHTML = mainInput.value;
    createElem(newElem, taskContainer);
    mainInput.value = "";
    addListToLocal();
}

taskContainer.onclick = function (e) {
    e.target.remove();
    addListToLocal();
};

if (localStorage.getItem("tasks")) {
    taskContainer.innerHTML = localStorage.getItem("tasks");
}