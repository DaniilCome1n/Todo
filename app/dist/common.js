'use strict';

function addTask() {
    var taskContainer = document.querySelector('.taskContainer');
    var newElem = document.createElement('div');
    newElem.className = "task";
    var mainInput = document.querySelector('.mainInput');
    newElem.innerHTML = mainInput.value;
    taskContainer.prepend(newElem);
    mainInput.value = "";
}

var targetButton = document.querySelector('.button');
targetButton.addEventListener("click", addTask);

var taskContainer = document.querySelector('.taskContainer');
taskContainer.onclick = function (e) {
    e.target.remove();
};