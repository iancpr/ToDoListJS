var taskInput = document.GetElementByID("task");
var submitButton = document.getElementByID("submitButton");
var divList = document.getElementByID("myToDoList");

// Creating the event listener. The submitButton is taken from the variable above
// The add event listener takes 2 arguments, the click and an insulator function which fires another funciton "Add new task"
submitButton.addEventListener('click' , function(){
	addNewTask();
});

var todoArray = [];
