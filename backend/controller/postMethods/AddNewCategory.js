const CategoryModel = require('../../model/categoryTable')

const CategoryData = async (req, res) => {
    //console.log(req.body)

    let data = CategoryModel({ 
        category : req.body.category 
    });

    let result = await CategoryModel.findOne({category : req.body.category});
    
    // console.log(result)
    if (result == null){
        let response = await data.save()
        if(response != null) {
            res.json({"token": req.body.authdata, "success": true, "message": 'Category Added Successfully'});
        }
    }
    else{
        res.json({message : 'Category Already Exist'})
        // console.log('Category Already Exist');
    }

}
module.exports = CategoryData;