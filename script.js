
function localstorageGetvalues(){
    let getinlocalStorage=localStorage.getItem("TodoItems");
    let parsedItems=JSON.parse(getinlocalStorage);

    if(parsedItems===null){
        return [];
    }
    else{
        return parsedItems;
    }
}


let Todolist=localstorageGetvalues();

let saveButtonEle=document.getElementById("savebutton");
saveButtonEle.onclick=function (){
    localStorage.setItem("TodoItems",JSON.stringify(Todolist));
}


function onTodoStatusChange(checklistId,labelId){
    let checkboxElement=document.getElementById(checklistId)
    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle("checked")
}

function deleteContainer(TodoId){
    let lielement=document.getElementById(TodoId);
    containerItem.removeChild(lielement);
    let findIndex=Todolist.findIndex(function(eachTodo){
        let eachTodoId="todo"+eachTodo.uniqueNo;
        if(eachTodoId===TodoId){
            return true;
        }
        else{
            return false;
        }
    })
    Todolist.splice(findIndex,1);
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
    Todolist.push(newTodo);
    createAndAppendChild(newTodo);
    inputTextElement.value="";
}


for(let Todo of Todolist ){
    createAndAppendChild(Todo)
}

