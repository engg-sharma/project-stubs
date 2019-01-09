MongoHandler.prototype.constructor = MongoHandler;

function MongoHandler(){
    this.mongoClient = require('mongodb').MongoClient;
    this.mongoClient.connect(mongoUrl, function(err, db) {
      if (err) throw err;
      console.log("Database created!");
      db.close();
    });
};

MongoHandler.prototype.addUser = function (body, cb) {
    console.log("body : " + body);
    cb("sth");
};

MongoHandler.prototype.getUser = function (body, cb) {
    console.log("body : " + body);
    cb("sth");
};

global.mongoHandler = new MongoHandler();
