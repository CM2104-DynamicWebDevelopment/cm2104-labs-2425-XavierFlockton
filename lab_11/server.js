var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
});

app.get('/add', function(req, res){
    var x = req.query.x;
    var y = req.query.y;
    res.send("X + Y="+(parseInt(x)+parseInt(y)));
});

app.get('/calc', function(req, res){
    var x = req.query.x;
    var y = req.query.y;
    var operator = req.query.operator;

    if (operator == "add"){
        res.send("X + Y="+(parseInt(x)+parseInt(y)));
    }else if (operator == "sub"){
        res.send("X - Y="+(parseInt(x)-parseInt(y)));
    }else if (operator == "mul"){
        res.send("X * Y="+(parseInt(x)*parseInt(y)));
    }else if (operator == "div"){
        res.send("X / Y="+(parseInt(x)/parseInt(y)));
    }else{
        res.send("That is not a  accepted operator");
    }
});

app.listen(8080);