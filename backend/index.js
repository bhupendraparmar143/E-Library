const express = require('express');
const app = express();
//multer for image upload
const multer = require('multer');
const upload = multer({dest : './uploads/'})
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
//cors

app.use('/uploads/books/',express.static('uploads/books'));
app.use('/uploads/author',express.static('uploads/author'));

const cors = require('cors');
//admin login model
const AdminModel = require('./model/adminLogin');
//import router
const routes = require('./routes/router');
const dotenv = require('dotenv');
dotenv.config();

//middelware
app.use(cors());
app.use(routes);


app.listen(process.env.PORT, () => {
    console.log(`App is listenin on ${process.env.PORT}`);
})