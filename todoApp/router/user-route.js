const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

router.post('/login', (req, res) => {
    User.findOne({email: req.body.email})
        .exec()
        .then((result) => {
            if(!result) {
                return res.json({success: false, error: "User not Found"})
            }
            bcrypt.compare(req.body.password, result.password, (err, ret) => {
                if(err) {
                    return res.json({success: false, error: 'Hashing Issue'})
                }else if(ret) {
                    const payload = {
                        userId : result._id,
                        email: result.email
                    }
                    const token = JWT.sign(payload, 'aminkey')
                    return res.json({success: true, message: "Login Successfully", token: token})
                }
                res.json({success: false, message: "Password dot not mached"})
            })
        }).catch((err) => {
            res.json({success: false, error: 'Server Error'})
        })
})


router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.json({success: false, error: "Hashing Issue"})
        }
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        })
        user.save()
            .then((_) => {
                res.json({success: true, message: "Account has been created"})
            })
            .catch((err) => {
                if(err.code === 11000) {
                    return res.json({success: false, error:"E-mail already Exists"})
                }
                res.json({success: false, error: "Server Errro"})
            })
    })
 })

router.get('/profile', checkAuth, (req, res) => {
     User.findOne({_id: req.userData.userId})
         .exec()
         .then((result) => {
            res.json({success: true, data: result})
         })
         .catch((err) => {
            res.json({success: true, error: "Server Error"})
         })
})

module.exports = router;