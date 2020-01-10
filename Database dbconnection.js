const mongoose  = require('mongoose');

const schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/hackdb").then(
    function(result)
    {
        console.log("Connected Successfully");
    }
).catch(
    function(error)
    {
        console.log("Connected Failed");
    }
);

const userschema = new schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    }
})


 //create a collection with name: users (plural) and follows userschema

module.exports = mongoose.model("User",userschema);
