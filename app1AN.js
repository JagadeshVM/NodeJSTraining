// setTimeout(function(){
//     console.log("hello");
// },3000);

// console.log("world");

const http = require('http');

const os = require('os');

const url = require('url');

const fs = require('fs');

const queryModule = require('querystring');

var freeMemory = os.freemem();


const server = http.createServer(function(req,res){
    console.log('Server listening at PORT 3000');
    console.log(req.url, req.method);
    res.setHeader("Content-Type","text/html");
    const path = url.parse(req.url).pathname;

    if(req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.write('hello world');
        res.write(' <h1> Response Sent </h1>');
        res.write(`Please Login
        <form method="POST" action="http://localhost:3000/formdata">
        <h3><label for="user1">UserName:</label><h3>
        <input type="text" name="user" id="user1">
        <h3><label for="pass1">Password:</label><h3>
        <input type="password" name="pass" id="pass1">
        <button type="submit">Submit</button>`);
        return res.end();
    }

    if( path ==="/formdata")
    {
        var bot = "";
        var querydata = url.parse(req.url).query;
        var username = queryModule.parse(querydata).user;
        var password = queryModule.parse(querydata).pass;
        console.log(username,password);

        fs.writeFile('message.txt', username,function(err){
            if(!err)
            {
                console.log("File has been written");
            }
            else{

            }
        })

        req.on("data",function(chunks){
            console.log("chunking");
            console.log(chunks.toString());
            bot = chunks.toString()
        })
        req.on("end",function(){

            var username = queryModule.parse(bot).user;
            var password = queryModule.parse(bot).pass;
            console.log(`data processing complete , ${username}`);
        })

        res.setHeader("Content-Type","text/html");
        res.write('hello world');
        res.write(' <h1> FormData Page</h1>');
        return res.end();
    }
    

    if(req.url==="/user"){
        res.setHeader("Content-Type","text/html");
        res.write('hello world');
        res.write(' <h1> Welcome !</h1>');
        res.write(`Free Memory is : ${freeMemory}`);
        return res.end();
    }
    
    console.log(freeMemory);
    
    res.write('Default Response');
    res.end();
});

server.listen(3000);
