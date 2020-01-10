const User = require('./dbconnection');



const insertdata= function()
{
    const userdata = new User({
        username:"user1",
        password:"123456",
        email:"monesh@gmail.com"
    })

    return userdata.save().then(
        function(result){
            return result;
        console.log("Saved Successfully");
    }).catch(
        function(error){
        console.log("Error Occured");
    })
}



const finddata = function(){
   return  User.find().then(
        function(result)
        {
            console.log(result);
            return result;

        }
    ).catch(function(error)
    {
        console.log("Cannot fetch details right now");
    })
}

module.exports = finddata;
