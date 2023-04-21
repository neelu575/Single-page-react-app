import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import HomePage from './Pages/HomePage';
import BlogPost2 from './Pages/BlogPost2';
import BlogPost3 from './Pages/BlogPost3';
import BlogPost1 from './Pages/BlogPost1';

const App = () => {
  document.title = "My React App";
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog/The Importance of Developing a Growth Mindset.' element={<BlogPost1 />} />
          <Route path='/blog/Benefits of Meditation' element={<BlogPost2 />} />
          <Route path='/blog/Tips for Effective Time Management.' element={<BlogPost3 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

