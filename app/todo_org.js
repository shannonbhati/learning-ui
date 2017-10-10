var todoOrg = {
	init: function() {
		todoOrg.renderList(TODO_LIST);
		todoOrg.setup();

	},
	renderList: function(todoList) {
		var listHtml = "";
		// <input type = "checkbox" value= "status">
		todoList.forEach(function(task, index) {
			listHtml += "<li><div class='input-group'><span class='input-group-addon'><input type='checkbox' " + (task.completed ? "checked" : "") + " class='  todo_check' id=C_" + index + " data-id='" + index + "'/></span><span class='form-control'>" + task.name + "</span> </div></li>";
		});
		$("#todo-list").html(listHtml)
	},
	setup: function() {
		todoOrg.todoTextEnterListener()
		todoOrg.checkBoxHandler()
		todoOrg.allEventClickListener();
		todoOrg.completedButtonListener();
		todoOrg.clearButtonListener();
		todoOrg.clearCompletedButtonListener();
		todoOrg.showActiveButtonListener();
	},
	checkBoxHandler: function(argument) {
		$(document).on('click', '.todo_check', function(event) {

			var cId = $(event.target).attr('data-id');
			if ($(event.target).is(":checked")) {
				markCompleted(cId);
			} else {
				markInActive(cId);
			}
			/* Act on the event */
		});
	},
	todoTextEnterListener: function() {
		$("#todo-text").keypress(function(e) {
			var key = e.which;
			if (key == 13) {
				var n = $(e.target).val();
				addToList(n);
				todoOrg.renderList(TODO_LIST)
			}

			/* Act on the event */
		});
	},
	allEventClickListener: function() {
		$(document).on('click', '.all', function(event) {
			todoOrg.renderList(TODO_LIST);
		})

	},
	completedButtonListener: function(argument) {
		$(document).on('click', '.Completed', function(event) {
			todoOrg.renderList(getAllCompleted());
		})
	},
	clearButtonListener: function(argument) {
		$(document).on('click', '.clear', function(event) {
			clearAll();
			todoOrg.renderList(TODO_LIST);
		})
	},
	clearCompletedButtonListener: function(argument) {

		$(document).on('click', '.clearCompleted', function(event) {
			clearAllCompleted();
			todoOrg.renderList(TODO_LIST);
		})
	},
	showActiveButtonListener: function(argument) {
		$(document).on('click', '.active', function(event) {
			todoOrg.renderList(getAllActive());
		})
	},

}