const AdminModel = require('../../model/adminLogin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AdminLoginData = async (req, res)=> {
    // console.log(req.body)
    const authData = await AdminModel.findOne({email : req.body.email});
    if(authData != null){
        // password compare 
        bcrypt.compare(req.body.password, authData.password, function(err, result) {
            if(err) {  res.json({message: "Invalid user", success: false})   }
            if(result == true){
                jwt.sign({userAuthData: authData}, process.env.SECRATE_KEY, {expiresIn: '1hr'}, function(error, token){
                    res.json({token: token, message: "Login Successfully", success: true});
                } )
            }
        })
    }
    else{
        res.json({message: "Invalid user", success: false}) ;
    }
}
module.exports = AdminLoginData;