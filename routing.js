let express = require("express");

let router = express.Router();

 //exporting router class

router.get("/admin",function(req,res){
    res.send("Hey there! I'm ADMIN DOT");
})

router.get("/id",function(req,res){
    res.send("Hey there! ID view is here.");
})

module.exports=router;
