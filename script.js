let Todolist = [
    {
        text: "Learn Javascript",
        uniqueNo: 1
    },
    {
        text: "Learn HTML",
        uniqueNo: 2
    },
    {
        text: "Learn CSS",
        uniqueNo: 3
    }
]

function onTodoStatusChange(checklistId,labelId){
    let checkboxElement=document.getElementById(checklistId)
    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle("checked")
}

function deleteContainer(TodoId){
    let lielement=document.getElementById(TodoId);
    containerItem.removeChild(lielement);
}


let btnEle=document.getElementById("addBtn");
btnEle.onclick=function (){
    addTodoItem()
}



function createAndAppendChild(Todo) {
    let checklistId="checklist"+Todo.uniqueNo;
    let labelId="label"+Todo.uniqueNo;
    let TodoId="todo"+Todo.uniqueNo;

    let liEle = document.createElement("li");
    liEle.classList.add("containerElement", "d-flex", "flex-row");
    liEle.id=TodoId;
    containerItem.appendChild(liEle);

    let inputEle = document.createElement("input");
    inputEle.type = "checkbox";
    inputEle.id = checklistId;
    inputEle.onclick=function (){
        onTodoStatusChange(checklistId,labelId);
    }
    liEle.appendChild(inputEle);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    liEle.appendChild(labelContainer);

    let labelEle = document.createElement("label");
    labelEle.setAttribute("for", checklistId);
    labelEle.textContent = Todo.text;
    labelEle.id=labelId
    labelContainer.appendChild(labelEle);

    let deleteItem = document.createElement("div");
    deleteItem.classList.add("delete-icon");
    labelContainer.appendChild(deleteItem);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    deleteIcon.onclick= function (){
        deleteContainer(TodoId);
    }
    deleteItem.appendChild(deleteIcon);
}


function addTodoItem(){
    let TodoCount=Todolist.length;
    TodoCount=TodoCount+1;
    let inputTextElement=document.getElementById("inputText");
    let inputTextValue=inputTextElement.value;

    newTodo={
        text:inputTextValue,
        uniqueNo:TodoCount
    }
    createAndAppendChild(newTodo);
}


for(let Todo of Todolist ){
    createAndAppendChild(Todo)
}
