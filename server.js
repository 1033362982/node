var http=require("http");
http.createServer(function(req,res){
	res.end("hellow");
}).listen(80,"192.168.3.129",function(){
	console.log("服务器已启动")
})