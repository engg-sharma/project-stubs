const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/checkAuth");

const fileFilter = (req, res, cb) => {
    // reject cb(null, false);
    // accept cb(null, true);
    // throw error cb(new Error, false);
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Some Message"), false);
    }
}

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, "../../uploads");
    },
    filename: function(req, res, cb){
        cb(null, Date.now() + "_" + file.filename + "_" + file.originalname);
    },
    fileFilter: fileFilter
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

const UserController = require("../controllers/userController");


router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

// router.post("/sth", checkAuth, upload.single(""), (req, res, next) => {
    // req.file.path
// });

module.exports = router;
