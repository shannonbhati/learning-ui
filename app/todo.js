var TODO_LIST = JSON.parse(localStorage.getItem("todo_list")) || [];
// if (TODO_LIST == null) {
// 	TODO_LIST = [];
// }


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

function getAllCompleted(index) {
	return TODO_LIST.filter(function(item) {
		return true
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