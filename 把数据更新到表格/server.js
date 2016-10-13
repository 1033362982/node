var app = express();
app.set("view engine","jade");


app.get("/",function(req,res){
	var title = "主页"
	res.render("home",{title:title})
})

app.get("/table",function(req,res){
	var title = "表格"
	var table = [
		{name:"zhang",age:12,sex:"male"},
		{name:"li",age:15,sex:"male"},
		{name:"wang",age:16,sex:"female"},
		{name:"zhao",age:11,sex:"male"},
		{name:"liu",age:18,sex:"female"}
	]
	res.render("table",{title:title})
})



app.listen(3000,function(){
	console.log("服务器已经启动");
})
