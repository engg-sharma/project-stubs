const mongoose = require("mongoose");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(doc => {
        if (doc.length >= 1) {
            res.status(500).json({
                message: "Internal Server Error"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash)=> {
                if (err) {
                    res.status(500).json({
                        // Cannot create hash
                        message: "Internal Server Error"
                    });
                } else {
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    newUser.save()
                    .then(result => {

                        const token = jwt.sign({
                                email: newUser.email,
                                userId: newUser._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: process.env.COOKIE_EXPIRES_IN
                            }
                        );

                        res.cookie("access-token", token, {expires: new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRES_IN))});
                        res.status(200).json({
                            message: "User Created",
                            token: token,
                            user: {
                                _id: result._id,
                                email: result.email
                            }
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: "Internal Server Error"
                        })
                    })
                }
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Internal Server Error"
        })
    });
}

exports.login = (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(doc => {
        if (doc.length < 1) {
            res.status(401).json({
                // Auth Failed
                message: "Unauthorized"
            })
        } else {
            bcrypt.compare(req.body.password, doc[0].password, (err, result) => {
                if (err || !result) {
                    res.status(401).json({
                        message: "Unauthorized"
                    });
                }
                if (result) {
                    console.log(process.env.COOKIE_EXPIRES_IN);
                    console.log(typeof process.env.COOKIE_EXPIRES_IN);
                    const token = jwt.sign({
                            email: doc[0].email,
                            userId: doc[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: process.env.COOKIE_EXPIRES_IN
                        }
                    );

                    const cookieObj = {
                        expires: new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRES_IN)),
                    }
                    res.cookie("access-token", token, cookieObj);
                    res.status(200).json({
                        message: "Auth Successful",
                        token: token,
                        user: {
                            "_id": doc[0]._id,
                            email: doc[0].email
                        }
                    });
                }
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Internal Server Error"
        });
    })
}
