var http = require("http");
var express=require("express");
var app=express();

//let us initiate basic handler and add router explicitly

app.use(express.bodyParser());
app.use(app.router);

//basic routes def starts here

//when a browser places a GET request / the response will be followed

app.get("/",function(request,response){
	response.send("i am from / GET request");
});


//let us construct basic form

app.get("/teste1",function(request,response){
	response.sendfile("./testeProlog.html");  //i am sending file to client browser which is of html 

});

app.get("/prolog",function(request,response){
	swipl.initialise();

	var m = swipl.module("mymod");

	m.assert("likes(romeo, julia).");
	
	var r = m.call_predicate("likes", ["romeo", "X"]);
	
	response.write(r.X);
		
	response.end();
	
	swipl.cleanup();
});

//thank you
var swipl = require('../prolog/swipl');

http.createServer(app).listen(9000);

