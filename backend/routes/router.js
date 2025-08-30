const express = require('express');
//multer for image upload
const multer = require('multer');

const AdminLoginData = require('../controller/postMethods/AdminLoginData');
const AuthorSignupData = require('../controller/postMethods/AuthorSignupData');
const AddNewCategory = require('../controller/postMethods/AddNewCategory');
const AuthorLoginData = require('../controller/postMethods/AuthorLoginData');
const AddNewBook = require('../controller/postMethods/AddNewBook');
const GetAllBooks = require('../controller/getMethods/GetAllBooks')
const GetAllAuthors = require('../controller/getMethods/GetAllAuthors')
const GetAllCategory = require('../controller/getMethods/GetAllCategory');
const GetDetailedBooks =  require('../controller/getMethods/GetDetailedBooks');
const showDetailedBooks = require('../controller/getMethods/showDetailedBooks');
const getBooksByCategory = require('../controller/getMethods/GetBooksByCategory');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const GetLoginAuthor = require('../controller/getMethods/GetLoginAuthor');
const router = express.Router();

// BOOK IMAGE POST IN /uploads/books FOLDER
const booksStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/books/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  const uploadBooks = multer({ storage: booksStorage })

  // AUTHOR IMAGE POST IN /uploads/author FOLDER
const authorStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/author')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const uploadAuthor = multer({ storage: authorStorage })

router.get('/' , (req , res) => {
    res.send('Hello world');
})

// Admin Login
router.post('/api/adminlogin' , AdminLoginData);

// ADMIN DASHBOARD
router.post('/api/addNewCategory' , AuthMiddleware ,AddNewCategory);

// AUTHOR SIGNUP
router.post('/api/authorSignup', uploadAuthor.single('author_image') , AuthorSignupData);

// AUTHOR LOGIN 
router.post('/api/authorLogin' ,  AuthorLoginData);

// AUTHOR DASHBOARD
router.post('/api/authorDashbord' , uploadBooks.single('book_image'), AddNewBook)

// GET ALL BOOKS
router.get('/api/showAllBook', GetAllBooks);

// GET ALL CATEGORIES 
router.get("/api/getAllcategory", GetAllCategory)

// GET ALL AUTHORS
router.get('/api/getallauthor' , GetAllAuthors);

// ALL BOOKS OF THIS AUTHOR
router.get('/api/getAuthorsUsingId/:authorName' , GetDetailedBooks);

// DETAILED BOOKS
router.get('/api/showDetailedBook/:bookId',  showDetailedBooks)

//GET BOOKS BY CATEGORY
router.get('/api/getBooksByCategory/:categoryName', getBooksByCategory)

//Login Author'
router.get('/api/loged-in-author' , AuthMiddleware , GetLoginAuthor)
module.exports = router;