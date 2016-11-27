var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true;
res.send('Hello Home Page');


});

app.get('/dynamic', function(req, res){

var lis = '';
var time = Date();
for(var i =0; i<5; i++){

lis = lis + '<li>coding</li>';

}
var output = `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    Hello, dynamic
    <ul>
    ${lis}
    </ul>
    ${time}
  </body>
</html>
`
res.send(output);


});

app.get('/login', function(req, res){

res.send('Login please');


});

app.get('/template', function(req, res){

res.render('temp', {time:Date(), title:'Jade'});

});

app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.jpg">')
})

app.listen(3000, function(){

console.log('Connected 3000 port!');

});
