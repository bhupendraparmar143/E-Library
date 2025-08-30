const AddNewBookModel = require('../../model/new_Books');
const AddNewBook = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    const data = AddNewBookModel({
        "book_name": req.body.book_name,
        "book_category": req.body.book_category,
        "author": req.body.author,
        "description": req.body.description,
        "book_image": req.file.filename,
    })
    // console.log(data);
    const result = await AddNewBookModel.findOne({ book_name: req.body.book_name, author: req.body.author })
    // console.log(result);
    if (result == null) {
        let x = await data.save();
        res.json({ 'message' : 'Book Added Successful' });
        // console.log(x)
    }
    else {
        // console.log("Book Alredy Axist")
        res.json({'message' : 'Book Alredy Axist'});
    }
}
module.exports = AddNewBook;