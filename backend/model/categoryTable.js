const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// mongoose.connect(`mongodb+srv://bhupiparmar1430cc:9c90QG8jN8ew2iR7@booksrepository.npr91mc.mongodb.net/?retryWrites=true&w=majority`);
mongoose.connect(`${process.env.CONNECT}`);

const categorySchema = mongoose.Schema({
    "category" : String,
})
const CategoryModel = mongoose.model('categories' , categorySchema);
module.exports = CategoryModel;