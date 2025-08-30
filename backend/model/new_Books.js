const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(`${process.env.CONNECT}`);

const AddNewBookSchema = mongoose.Schema({
    "book_name": String,
    "book_category": String,
    "author": String,
    "description": String,
    "book_image": String,
})
const AddNewBookModel = mongoose.model('books', AddNewBookSchema);
module.exports = AddNewBookModel;