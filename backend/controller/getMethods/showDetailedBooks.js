const AddNewBookModel = require('../../model/new_Books')
const showDetailedBooks = async (req, res) => {
    // console.log(req.params)
    let bookData = await AddNewBookModel.findOne({ _id: req.params.bookId });
    // console.log(bookData)
    res.json({bookRecord : bookData});
}
module.exports = showDetailedBooks;