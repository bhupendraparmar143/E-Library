const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://bhupiparmar1430cc:9c90QG8jN8ew2iR7@booksrepository.npr91mc.mongodb.net/?retryWrites=true&w=majority`);

const authorSignupSchema = mongoose.Schema({
    "author_name" : String,
    "author_email" : String,
    "author_password" : String,
    "author_image" : String,
    "author_status" : String
})

const AuthorModel = mongoose.model('authordata' , authorSignupSchema);
module.exports = AuthorModel;