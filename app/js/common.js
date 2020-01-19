let taskContainer = document.querySelector('.taskContainer');

const targetButton = document.querySelector('.button');
targetButton.addEventListener("click",addTask);

function createElem(elem,container){
    container.prepend(elem);
}

function addListToLocal(){
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

function addTask(){
    let mainInput = document.querySelector('.mainInput');
    let newElem = document.createElement('li');
    newElem.className = "task";
    newElem.innerHTML = mainInput.value;
        if(mainInput.value == ""){
            console.log("Enter task");
        }else{
            createElem(newElem,taskContainer);
        }
    mainInput.value = "";
    addListToLocal();
}

taskContainer.onclick =(e)=>{
    e.target.remove();
    addListToLocal();
}

if(localStorage.getItem("tasks")){
    taskContainer.innerHTML = localStorage.getItem("tasks");
}







