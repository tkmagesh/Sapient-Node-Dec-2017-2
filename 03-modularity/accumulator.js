module.exports = function(){
	var result = 0;
	return {
		add : function(value){
			result += value;
		},
		getResult : function(){
			return result;
		}
	};
}