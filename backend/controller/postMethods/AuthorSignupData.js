const AuthorModel = require('../../model/authorSignup');
const bcrypt = require('bcrypt');
const AuthorSignupData = async (req, res) => {
    // console.log(req.body)

    // console.log('data',data)
    // console.log('file-',req.file)
    let result = await AuthorModel.findOne({ author_name: req.body.author_name, author_email: req.body.author_email })
    console.log(result)
    if (result == null) {
        bcrypt.hash(req.body.author_password, 10, async (err, hash) => {
            if (err) {
                console.log("error", err)
            } else {
                // console.log("hash" , hash)
                let data = AuthorModel({
                    'author_name': req.body.author_name,
                    'author_email': req.body.author_email,
                    'author_password': hash,
                    'author_image': req.file.filename,
                    'author_status': 'author',
                })
                let x = await data.save();
                res.json({ 'message' : 'Author SignUp Successful'});
    }
})
    }
    else {
    
    res.json({'message' : "Author already exist"})
}
    
}
module.exports = AuthorSignupData;