const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(function(req,res,next){
  res.header("Access - Control - Allow - Origin", "*");
 next();
})
app.use(express.static(__dirname + "/dist/linkedinSocialLogin"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/linkedinSocialLogin/index.html"));
});
app.listen(process.env.PORT || 3000);
