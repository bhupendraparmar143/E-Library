const AddNewBookModel = require('../../model/new_Books')
const GetDetailedBooks = async(req, res) => {
// console.log(req.params)
let data = await AddNewBookModel.find({author : req.params.authorName})
// console.log(data)
res.json({booksData : data})
}
module.exports = GetDetailedBooks;