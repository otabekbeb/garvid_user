import React, { useEffect, useState } from 'react'
import Login from "./pages/js/Login"
import Home from "./pages/js/Home"
import About from "./pages/js/About"
import Blog from './pages/js/Blog'
import Contact from './pages/js/Contact'
import Services from './pages/js/Services'
import Ourteam from './pages/js/Ourteam'
import User from "./pages/js/user"
import Mento from "./pages/js/Mentor"
import Video from "./pages/js/Youtube1";
import Contacts from "./pages/js/Contacts";
import Allcourse from "./pages/js/Ourcourse"
import Loginpage from "./pages/js/Loginpage";
import Prover from './pages/js/Prover'
import Teacher from "./pages/js/Teacherpage";
import Student from "./pages/js/Student";
import Mentorcontact from "./pages/js/Mentorcontact";
import News from "./pages/js/News";
import Newspage from "./pages/js/Newspage";
import Studentpage from './pages/js/Studentpage'
import LoginpageMentor from './pages/js/LoginpageMentor'
import Help  from './pages/js/Help'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proverr2 from './pages/js/Proverr2'
export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/loginpageMentor" element={<LoginpageMentor />} />
          <Route path="/about" element={<About />} />
          <Route path="/servis" element={<Services />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/mentor" element={<Mento />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/video" element={<Video />} />
          <Route path="/ourcourse" element={<Allcourse />} />
          <Route path="/news" element={<News />} />
          <Route path="/newspage" element={<Newspage />} />
          <Route path="/prover" element={<Prover />} />
          <Route path="/Proverr2" element={<Proverr2 />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/mentorcontact" element={<Mentorcontact />} />
          <Route path="/Studentpage" element={<Studentpage />} />
          {/* <Route index element={} />*/}
        </Routes>
      
      </BrowserRouter>


   
    </div>
  );
}
