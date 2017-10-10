var TODO_LIST = JSON.parse(localStorage.getItem("todo_list")) || [];


function addToList(taskName) {
	TODO_LIST.push({
		name: taskName,
		completed: false
	});
	localStorage.setItem("todo_list", JSON.stringify(TODO_LIST));

}

function markCompleted(index) {
	TODO_LIST[index].completed = true;
	localStorage.setItem("todo_list", JSON.stringify(TODO_LIST));
	
}

function getAllCompleted() {
	return TODO_LIST.filter(function(item) {
		return item.completed
	});
}

function getAllActive(index) {
	return TODO_LIST.filter(function(item) {
		return !item.completed
	});
} 
function markInActive(index) {
	TODO_LIST[index].completed = false;
	localStorage.setItem("todo_list", JSON.stringify(TODO_LIST));
	
}
function clearAll(){
	localStorage.removeItem("todo_list");
	TODO_LIST=[];

}
function clearAllCompleted(){
	TODO_LIST=getAllActive();
	localStorage.setItem("todo_list",JSON.stringify(TODO_LIST));

}