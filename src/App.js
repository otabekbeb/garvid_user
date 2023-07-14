import React, { useEffect, useState } from 'react'
import Login from "./pages/js/Login"
import About from "./pages/js/About"
import Blog from './pages/js/Blog'
import Contact from './pages/js/Contact'
import Services from './pages/js/Services'
import Ourteam from './pages/js/Ourteam'
import User from "./pages/js/user"
import Mento from "./pages/js/Mentor"


import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/servis" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/ourteam" element={<Ourteam/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/mentor" element={<Mento/>}/>
       
          {/* <Route index element={} />*/}
      </Routes>
    </BrowserRouter>
    </div>
  )
}
