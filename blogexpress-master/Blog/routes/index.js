var express = require('express');
var router = express.Router();
var path =require("path");
var fs = require("fs");


let filepath = path.join(__dirname,'data.json');
let filecontent = fs.readFileSync(filepath);
let jsonobj = JSON.parse(filecontent);

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  // res.end()

  let username = req.body.username;
  let pwd = req.body.pwd;
  console.log(jsonobj);
  for(var i=0;i<jsonobj.users.length;i++){
    if(jsonobj.users[i].username === username && jsonobj.users[i].password === pwd){
      res.end("success");
    }else{
      res.end("failed");
    }
  }


 
});

router.get('/list', function(req, res, next) {
  res.render('list',{chapterList:jsonobj.chapterList});
});

module.exports = router;
