let express = require("express");

let router = express.Router();

var insertdata = require('../Database/admin');

var finddata = require('../Database/admin');

let flag = 3;

router.get('/add',function(req,res){
    insertdata();
    res.send("data Added Successfully");
});

router.get('/recieve',function(req,res){

    let resultdata = finddata();
    resultdata.then(data=>{
        res.send(data)
    })
});




router.post("/",function(req,res){
    let name = req.body.name;
    let theme = req.body.theme;
    let contactNo = req.body.contactNo;
    let teamSize = req.body.teamSize;
    let edition = req.body.edition;
    let contactNoLength = contactNo.toString();
    

   
        if(theme !== 'robotics' && theme !== 'hardware' && theme !== 'software')
        {
            res.json({"message":"Theme unavailable"});
        }

        else if(contactNoLength.length !== 10){
        
             res.json({"message":"Contact Number Should be of 10 Digits"});
        }

        else if(teamSize < 3)
        {
            res.json({"message":"Team Size should be of minimum 3 members"});

        }

            res.json({"message":"Registered"});
            
})

module.exports = router;
