var express=require("express");
var bodyParser=require('body-parser');
var app = express();
app.use(express.static('views'));
app.use(express.static('library'));
var registerController=require('./routes/register-controller'); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html");  
})  


app.post('/register',registerController.register);
app.get('*', function (req, res) {  
  res.sendFile( __dirname + "/" + "views/pagenotfound.html");  
})  
app.listen(8012);
