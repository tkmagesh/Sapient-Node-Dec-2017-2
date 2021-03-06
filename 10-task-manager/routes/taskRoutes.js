var express = require('express');
var router = express.Router();
var taskService = require('../services/taskService');

//callback based
/*router.get('/', function(req, res, next) {
	taskService.getAll(function(taskList){
		var viewData = {
		  	tasks : taskList
		};
		res.render('tasks/index', viewData);	
	});
});
*/

router.get('/', function(req, res, next) {
	taskService.getAll()
		.then(taskList => {
			var viewData = {
			  	tasks : taskList
			};
			res.render('tasks/index', viewData);
		});
});
router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.txtTaskName,
		newTaskId = taskList.reduce(function(prevResult, task){
			return prevResult > task.id ? prevResult : task.id;
		}, 0) + 1;
	var newTask = { 
		id : newTaskId,
		name : newTaskName,
		isClosed : false
	};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskIdToToggle = parseInt(req.params.id),
		taskToToggle = taskList.filter(function(task){
			return task.id === taskIdToToggle
		})[0];
	if (taskToToggle){
		taskToToggle.isCompleted = !taskToToggle.isCompleted;
	}
	res.redirect('/tasks');
})

module.exports = router;
