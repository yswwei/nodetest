var Add = function(){
	this.name = "add";
	this.showname=function(){
		console.log("showname:"+this.name);
	}
	//exports.showname = this.showname;
}

var Sub = function(){
	this.name = "sub";
}

var example = function(){
	var add = new Add();
	var sub = new Sub();
	add.showname.call(sub,null);
}

var http = require("http");
var server = http.createServer(function(req,res){
	res.writeHead(200,{});
	res.write("Hello test Call");
	res.end();
	example();
	console.log("httpcreateServer");
});
server.listen(8888);

