// var efg=100;

// module.exports=efg


// function fun(num1,num2,callback){
// 	var result=num1+num2;
// 	callback(result);
// }
function fun(num1,num2,callback){
	
	setTimeout(function(){
		var result=num1+num2;
		callback(result);
	},1000)
}	
module.exports=
{
	fun:fun
}