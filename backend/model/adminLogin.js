const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://bhupiparmar1430cc:9c90QG8jN8ew2iR7@booksrepository.npr91mc.mongodb.net/?retryWrites=true&w=majority`);

const adminSchema = mongoose.Schema({
    "email" : String,
    "password" : String,
    "status" : String
})
const AdminModel = mongoose.model('adminLogin' , adminSchema);
module.exports = AdminModel;