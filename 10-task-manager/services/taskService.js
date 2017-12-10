var taskList = [
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Plan vacation', isCompleted : true}
];

//callback based
/*function getAll(callback){
	setTimeout(function(){
		callback(taskList);
	},4000);
}*/

function getAll(){
	var promise = new Promise(function(resolveFn, rejectFn){
		setTimeout(function(){
			resolveFn(taskList);
		},4000);	
	});
	return promise;
}

module.exports = {
	getAll : getAll
}