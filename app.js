 let todo_list=[
  { 
    item:'buy milk',
    duedate:'23/1/2024'
  },
  { 
    item:'go to college',
    duedate:'23/1/2024'
  }
];
 DisplayItems();

 function addTodo(){
  let inputElement=document.querySelector("#todo-input");
  let dateElement=document.querySelector("#todo-date");
  let todoItem=inputElement.value;
  let tododate=dateElement.value;
  todo_list.push({item:todoItem,
    duedate:tododate});
  inputElement.value='';
  dateElement.value='';

  DisplayItems();
 }

 function DisplayItems(){
  let ContainerElement=document.querySelector(".todo-container");
  let newHtml='';
    for(let i=0;i<todo_list.length;i++){
      let Item=todo_list[i].item;
      let duedate=todo_list[i].duedate;
      newHtml+=`
        <span>${Item}</span>
        <span>${duedate}</span>
        <button class="btn_delete" onclick="todo_list.splice(${i},1);
        DisplayItems();">Delete</button>
      `;
    }
    ContainerElement.innerHTML=newHtml;
  }
