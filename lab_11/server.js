var express = require('express');
var app = express();
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

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

app.get('/getform', function(req, res){
    var name = req.query.name;
    var quest = req.query.quest;
     res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.post('/postform', function(req, res){
    var name = req.body.name;
    var quest = req.body.quest;
        res.send("Hi "+name+" I am sure you will "+quest) ;
});

app.listen(8080);