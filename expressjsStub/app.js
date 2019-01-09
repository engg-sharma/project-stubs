global.BASE_URL = __dirname;
require(BASE_URL + "/constants/all.js");
// require(BASE_URL + "/dbConn/mongodbConn");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.listen(port, function(){
    console.log("server listening on port :" +  port);
});

app.use(express.static('public'));
app.use(bodyParser);

app.get("/", function(request, response){

});



app.put("/signup", function(request, response){
    mongoHandler.addUser(request.body, createUserCb.bind(null, request, response));
});
// mongoHandler.addUser("body", createUserCb.bind(null, "request", "response"));

var createUserCb = function(request, response, data){
    console.log("request" + request);
    console.log("response" + response);
    console.log(data);
};

app.put("/login", function(request, response){
    mongoHandler.getUser(request.body, getUserCb.bind(null, request, response));
});

var getUserCb = function(request, response, data){
    console.log("request" + request);
    console.log("response" + response);
    console.log(data);
};
