import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Component/home/HomePage';
import { Admin_Login } from './Component/admin/Admin_Login';
import { AdminDashBord } from './Component/admin/AdminDashBord';
import { Author_Login } from './Component/author/Author_Login';
import { Author_signUp } from './Component/author/Author_signUp';
import { AuthorDashbord } from './Component/author/AuthorDashbord';
import { Book_Detail_Page } from './Component/Books/Book_Detail_Page';
import { Books_Related_Author } from './Component/Books/Books_Related_Author';
import { Books_Related_Category } from './Component/Books/Books_Related_Category';
import { Add_New_Category } from './Component/categories/Add_New_Category';
import { Protected } from './Component/Protected';
import { Show_All_Books } from './Component/admin/Admin Manage/Show_All_Books';
import { Show_All_Authors } from './Component/admin/Admin Manage/Show_All_Authors';
import { Show_All_Category } from './Component/admin/Admin Manage/Show_All_Category';
import { Authors_All_Books } from './Component/author/Author Manage/Authors_All_Books';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/adminLogin' element={<Admin_Login />}></Route>
        <Route path='/adminDashBord' element={<Protected component={AdminDashBord} />}></Route>
        <Route path='/show-all-books' element={<Protected component={Show_All_Books} />}></Route>
        <Route path='/show-all-authors' element={<Protected component={Show_All_Authors} />}></Route>
        <Route path='/show-all-category' element={<Protected component={Show_All_Category} />}></Route>
        <Route path='/authorLogin' element={<Author_Login />}></Route>
        <Route path='/authorDashbord' element={<Protected component={AuthorDashbord} />}></Route>
        <Route path='/authorSignup' element={<Author_signUp />}></Route>
        <Route path='/show-logged-in-author-book' element={<Protected component={Authors_All_Books} />}></Route>
        <Route path='/showBookDetails/:bookId' element={<Protected component={Book_Detail_Page} />}></Route>
        <Route path='/booksRelatedCategory/:categoryName' element={<Protected component={Books_Related_Category} />}></Route>
        <Route path='/showAuthorDetails/:author_name' element={<Protected component={Books_Related_Author} />}></Route>
        <Route path='/addNewCategory' element={<Protected component={Add_New_Category} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
