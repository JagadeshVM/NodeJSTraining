let express = require('express');

let app = express();

let bodyparser = require("body-parser");

let router = require("./routing");

let router1 = require("./routing1");

app.use(bodyparser.json());

app.use("/product",router);

app.use("/user",router1);



app.listen(3000,function(){
    console.log("server is running");
});

app.get("/",function(req,res,next){
    let query = req.query.id;
    console.log(query);
    res.send("Hello World!");
    next();

},function(req,res,next){
    console.log("Second Call Back Function");
    next();
},function(req,res){
    console.log("Third Call Back Function");
});

app.get("/user",function(req,res){
    res.send("Hello User!");

});

app.get("/employee/:id",function(req,res){
    let id=req.params.id;
    if(id===1000)
    {
        res.send(`Your ID is ${id}`);
    }
    else{
        res.send("ERROR");
    }

});

app.post("/form",function(req,res){
    let output = req.body.code;
    res.send(`POST RECIEVED. THE CODE IS ${output}`);
})
