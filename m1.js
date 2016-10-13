// var abc=10;

// module.exports=abc


// function fun(){
// 	var a=10;
// 	var b=20;
// 	return a+b
// }
// module.exports=fun

var a=10;
var b=20;

function add(){
	return a+b;
};
function sub(){	
	return a-b;
};
module.exports={
	add:add,
	sub:sub
}