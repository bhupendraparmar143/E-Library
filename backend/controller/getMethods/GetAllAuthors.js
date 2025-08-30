const AuthorModel = require('../../model/authorSignup')

const getAllAuthor = async (req, res) => {
    let authorData = await AuthorModel.find({});
    res.json({ authorData: authorData })

}

module.exports = getAllAuthor;
