const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(function(req,res,next){ /// this was not working error status 500 Internal server error 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*" );  //"GET,PUT,POST,DELETE"
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  next();
})

/*
var allowCrossDomain = function (req, res, next) {   //gave Application error so cant be launched 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*" );  //"GET,PUT,POST,DELETE"
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  next();
};

app.configure(function () {
  app.use(allowCrossDomain);
  //some other code
});
*/
app.use(express.static(__dirname + "/dist/linkedinSocialLogin"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/linkedinSocialLogin/index.html"));
});
app.listen(process.env.PORT || 3000);
