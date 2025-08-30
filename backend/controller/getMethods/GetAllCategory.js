const CategoryModel = require('../../model/categoryTable');
const AddNewBookModel = require('../../model/new_Books')

const GetAllCategory = async (req, res) => {
    // get Category
    // console.log(req.params)
    let categoryData = await CategoryModel.find({});
    
    //send data in frontEnd
    res.json({ cateData: categoryData })
}
module.exports = GetAllCategory;