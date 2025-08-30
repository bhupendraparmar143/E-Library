const AuthorModel = require('../../model/authorSignup');
const bcrypt = require('bcrypt');

const AuthorLoginData = async (req, res) => {
    // console.log(req.body);
    const result = await AuthorModel.findOne({author_email : req.body.author_email});
    // console.log('result',result);
    if(result != null){
        bcrypt.compare(req.body.author_password , result.author_password , (error, data)=>{
            // console.log(data)
            if(data){
                res.json({"success" : true, 'message' : 'Login Successfull'});
            }
            else{
                res.json({'message' : 'Invalid Author'})
            }
        })
    }else{
        res.json({'message' : 'Invalid Author'})
    }
}

module.exports = AuthorLoginData;