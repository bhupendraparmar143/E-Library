const AddNewBookModel = require('../../model/new_Books')
const getBooksByCategory = async(req,res)=>{
    // console.log(req.params)
    let data = await AddNewBookModel.find({book_category : req.params.categoryName})
    // console.log(data)
    res.json({booksByCategory : data})
}
module.exports = getBooksByCategory;