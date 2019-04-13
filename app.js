var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("new-task-button");
var listArea = document.getElementById("list-container");

// Creating the event listener. The submitButton is taken from the variable above
// The add event listener takes 2 arguments, the click and an insulator function which fires another funciton "addNewTask"
addButton.addEventListener('click' , function(){
	console.log("button clicked");
	addNewTask();
});

var todoArray = [];

function addNewTask(){
//Stores the current date using the inbuilt Javascript function - Date	
	var date = new Date();
	var task = taskInput.value;
	console.log(task);
	var todo = {
		id: todoArray.length + 1,
		// takes value of variable task and inserts into object
		task: task,
		//translates the date into user readable format
		date: date.toUTCString(),
		//status of the task the user has created
		done: false
	}
	var todoElement = formatTodo(todo);
	
	todoArray.push(todoElement);
	console.log(todoArray);
	updateTodosView();
	
	taskInput.value = '';
}

function formatTodo(item){
	var listItem = document.createElement('li');
	var itemContent = document.createElement('span');
	var taskContent = document.createTextNode(item.task);
	itemContent.appendChild(taskContent);
	listItem.appendChild(itemContent);
	listItem.setAttribute('id', item.id);
	return listItem;
}


function updateTodosView (){
	var list = document.createElement('ul');
	todoArray.forEach(function(item){
		list.appendChild(item);
	});
	listArea.replaceChild(list, listArea.firstChild);
}