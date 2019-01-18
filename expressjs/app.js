const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import route handlers
const userRoutes = require("./api/routes/users");

mongoose.connect("mongodb://subendra:" + process.env.MONGO_ATLAS_PW + "@cluster0-shard-00-00-pxwip.mongodb.net:27017,cluster0-shard-00-01-pxwip.mongodb.net:27017,cluster0-shard-00-02-pxwip.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {useNewUrlParser: true}, (err, db) => {
    if (err) {
        console.log("auth failed");
    } else {
        console.log("auth  success");
    }
});
mongoose.Promise = global.Promise;

// Middleware imports
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// FOR CORS to allow request from anywhere
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, HEAD, PATCH, DELETE, OPTIONS");
        return res.status(200).json({});
    }
    next();
})

// Routes to handle request
app.use("/users", userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
