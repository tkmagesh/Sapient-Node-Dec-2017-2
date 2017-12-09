var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Plan vacation', isCompleted : true}
]

router.get('/', function(req, res, next) {
  res.json(taskList);
});

router.get('/:id', function(req, res, next) {
	var taskIdToReturn = parseInt(req.params.id);
  	var taskToReturn = taskList.filter(function(task){
  		return task.id === taskIdToReturn;
  	})[0];
  	if (!taskToReturn){
  		res.status(404).end();
  	} else {
  		res.status(200).json(taskToReturn);
  	}
});

router.post('/', function(req, res, next){
	var newTaskId = taskList.reduce(function(prevResult, task){
			return prevResult > task.id ? prevResult : task.id;
		}, 0) + 1;
	var newTask = req.body;
	newTask.id = newTaskId;
	taskList.push(newTask);
	res.status(201).json(newTask);
});

router.put('/:id', function(req, res, next){
	var taskIdToUpdate = parseInt(req.params.id);
	var taskToUpdate = req.body;
	taskList = taskList.map(function(task){
		return task.id === taskIdToUpdate ? taskToUpdate : task;
	});
	res.status(200).json(taskToUpdate);
});

router.delete('/:id', function(req, res, next){
	var taskIdToDelete = parseInt(req.params.id);
	taskList = taskList.filter(function(task){
		return task.id !== taskIdToDelete;
	});
	res.status(200).json({});
});


/*
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
*/
module.exports = router;
