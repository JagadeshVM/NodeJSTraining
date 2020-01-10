let express = require('express');

let app = express();

let bodyparser = require("body-parser");

let router = require("./routing");

app.use(bodyparser.json());

app.use("/register",router);


app.listen(3000,function(){
    console.log("SERVER ON");
});

