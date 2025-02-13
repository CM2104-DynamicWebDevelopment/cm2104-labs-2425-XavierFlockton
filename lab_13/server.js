const MongoClient = require('mongodb-legacy').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbname = 'star_wars_quotes';

const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))


app.use(express.static('public'))

var db;

connectDB();
async function connectDB() {

 await client.connect();
 console.log('Connected successfully to server');
 db = client.db(dbname);

app.get('/all', function(req, res) {
    db.collection('quotes').find().toArray(function(err, result) {
    if (err) throw err;
    
    var output = "<h1>All the quotes</h1>";
    
    for (var i = 0; i < result.length; i++) {
        output += "<div>"
        output += "<h3>" + result[i].name + "</h3>"
        output += "<p>" + result[i].quote + "</p>"
        output += "</div>"
    }
    res.send(output);
    });
});

app.post('/quotes', function (req, res) {
    db.collection('quotes').insertOne(req.body, function(err, result) {
    if (err) throw err;
    console.log('saved to database');
    res.redirect('/');
    });
});

app.post('/search', function(req, res) {
    db.collection('quotes').find(req.body).toArray(function(err, result) {
    if (err) throw err;
    var output = "<h1>All the quotes</h1>";
    for (var i = 0; i < result.length; i++) {
        output += "<div>"
        output += "<h3>" + result[i].name + "</h3>"
        output += "<p>" + result[i].quote + "</p>"
        output += "</div>"
    }
    res.send(output);
    });
});
   
app.post('/delete', function(req, res) {
    db.collection('quotes').deleteOne(req.body, function(err, result) {
    if (err) throw err;
    res.redirect('/');
    });
});

app.post('/update', function(req, res) {
    var query = { quote: req.body.quote };
    var newvalues = { $set: {name: req.body.newname, quote: req.body.newquote } };
    db.collection('quotes').updateOne(query,newvalues, function(err, result) {
    if (err) throw err;
    res.redirect('/');
    });
});
   
   

 app.listen(8080);

}


