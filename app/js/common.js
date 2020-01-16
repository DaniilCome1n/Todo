function addTask(){
    let taskContainer = document.querySelector('.taskContainer');
    let newElem = document.createElement('div');
    newElem.className = "task";
    let mainInput = document.querySelector('.mainInput');
    newElem.innerHTML = mainInput.value;
    taskContainer.prepend(newElem);
    mainInput.value = "";

}

const targetButton = document.querySelector('.button');
targetButton.addEventListener("click",addTask);


const taskContainer = document.querySelector('.taskContainer');
taskContainer.onclick = function(event){
    event.target.remove();
}







