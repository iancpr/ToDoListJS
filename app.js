var taskInput = document.getElementByID("userTask");
var submitButton = document.getElementByID("submitButton");
var divList = document.getElementByID("myToDoList");

// Creating the event listener. The submitButton is taken from the variable above
// The add event listener takes 2 arguments, the click and an insulator function which fires another funciton "addNewTask"
submitButton.addEventListener('click' , function(){
	console.log("button clicked");
	addNewTask();
});

var todoArray = [];

function addNewTask(){
//Stores the current date using the inbuilt Javascript funtion - Date	
	var date = Date();
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
	
	todoArray.push(todo.task);
	console.log(todoArray);
	todoArray.forEach(function(item) {
		divList.appendChild("<p>" + item + "</p>");
	});
	
	taskInput.value = '';
}
