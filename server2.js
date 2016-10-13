var express=require("express");
var app=express();
app.use(express.static("public"));
app.listen(80,"192.168.3.129",function(){
	console.log("服务器已启动")
})