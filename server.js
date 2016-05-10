var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === "https"){
    res.redirect('http://' + req.hostname + req.url);
  }
  else{
    next();
  }
});

//serve folder
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port '+PORT);
});
