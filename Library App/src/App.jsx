import React from 'react'
import './App.css'
import Layout from './Components/Layout';
import AllBooks from './Pages/Book/AllBooks';
import AddBooks from './Pages/Book/AddBooks';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import UpdateBooks from './Pages/Book/UpdateBooks';
import AllAuthors from './Pages/Author/AllAuthors';
import AddAuthors from './Pages/Author/AddAuthors';
import UpdateAuthors from './Pages/Author/UpdateAuthors';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Layout><h2 style={{textAlign:"center", color:"white"}}>Welcome to Javascript Library</h2>
    <Routes>
    <Route exact path='/login' element={<Login/>}></Route>
    </Routes>

    
      <br/>
      <Routes>
      <Route path="/" element={<AllBooks/>}></Route>
      <Route path="/add-books" element={<AddBooks/>}></Route>
      <Route path="/update-books/:id" element={<UpdateBooks/>}></Route>
      </Routes>
      <br/>
      <br/>
      <br/>
      <h3 style={{textAlign:"center", color:"white"}}>Author Details</h3>
      <Routes>
      <Route path="/" element={<AllAuthors/>}></Route>
      <Route path="/add-authors" element={<AddAuthors/>}></Route>
      <Route path="/update-authors/:id" element={<UpdateAuthors/>}></Route>
      </Routes>
      </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
