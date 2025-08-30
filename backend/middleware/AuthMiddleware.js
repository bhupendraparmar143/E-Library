const jwt = require('jsonwebtoken');
const AuthMiddleware = (req, res, next) => {
    
    // console.log(req.headers.authorization)
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRATE_KEY, (error, decode)=>{
        // console.log(error)
        if(error) {  
            res.json({message: "Invalid user", success: false})
        } 
        else{
            req.body.authdata = decode.userAuthData;
            // console.log(req.body.authdata)
            next();
        }
    })  
}
module.exports = AuthMiddleware