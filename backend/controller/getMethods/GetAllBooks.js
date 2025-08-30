const AddNewBookModel = require('../../model/new_Books');

const GetAllBooks = async (req, res)=>{
    // // console.log("All Books");
    let books_data = await AddNewBookModel.find({})
    // // console.log(books_data);
    res.json({all_books : books_data})
}
module.exports = GetAllBooks;
