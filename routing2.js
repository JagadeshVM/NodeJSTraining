let express = require("express");

let router = express.Router();

router.get("/whoami",(req,res)=>{
    res.send("I am Something 2");
});

module.exports=router;
