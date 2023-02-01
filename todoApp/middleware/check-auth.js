const JWT = require('jsonwebtoken');
const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decode = JWT.verify(token, "aminkey")
        req.userData  = decode;
        next()
    }catch(e) {
      res.json({success: true, error: "Auth failed"})
    }
}

module.exports = checkAuth