//jshintesversion:6
const express=require('express');

const app=express();
const {exec}=require("child_process");
app.use(express.static("oth"));
;
app.get("/",function(req,res){
  res.sendFile(__dirname+"/main.html");
});

app.get("/send",function(req,res){

  let command=req.query.cmd;
  exec(command,fun);

  function fun(error,stdout,stderr){

    let s="<html lang='en' dir='ltr'><head><link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx' crossorigin='anonymous'><style>body{text-align:center}form{background-color:#3AB4F2;margin:10px 0 10px;padding:10px 0 10px}</style></head><body><form action='/' method='get'><div class='jumbotron'><h1 class='display-4'>Web Application Output!</h1><p class='lead'><pre><h2>"+stdout+"</h2></pre></p><hr class='my-4'><p>Docker Web application also supports linux commands</p><p class='lead'><input type='submit' class='btn btn-primary btn-lg' href='#' value='Return to Main Page' role='button'></p></div></form><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js' integrity='sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa' crossorigin='anonymous'></script></body></html>";


    res.send(s);}
    function lw(){
    }

});

app.get('/about',function fun(req,res){
  res.sendFile(__dirname+"/w1.html");
});
app.get('/contact',function fun(req,res){
  res.sendFile(__dirname+"/contact.html")
})

app.listen(3000,function(){
  console.log("server started");
})
