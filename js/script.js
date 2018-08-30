function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}


function Add() {
    var task = document.getElementById('input').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

function show(){
    var todos= get_todos();
    len=todos.length;
    var element="";
    for(var i=0;i<len;i++){
        element+= "<li id='"+(i)+"'>" + todos[i] +"<input type='checkbox' onClick='task_completed(this)' class='" + i + "'>" +
         "<button onClick='remove(this.id)' id='" + i + "'>x</button>" + "</li>";
    }
    document.getElementById("list").innerHTML=element;
}

function remove(id){
    var todos = get_todos();
    console.log(id);
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}

function task_completed(elm){
    var id = elm.className;
    var x = document.getElementById(id);
    x.style.background = 'green';   
    x.style.textDecoration = 'line-through';   
}
