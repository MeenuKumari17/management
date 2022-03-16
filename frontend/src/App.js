import React, {useState} from "react";
import './App.css'
import UserForm from "./component/UserForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewData from "./component/ViewData";
import Search from "./component/Search";

import NavBar from "./component/Navbar";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <div className="App">
        <Router>
         <NavBar/>
          <Routes>
            <Route path="/" element={<UserForm/>} />
            <Route path="/view" element={<ViewData/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        </Router>
    </div>
  );  
}

export default App;
