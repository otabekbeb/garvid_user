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
import StudentAll from './pages/js/StudentAll'
import LoginpageMentor from './pages/js/LoginpageMentor'
import Help from './pages/js/Help'
import UserHelp from './pages/js/UserHelp'
import UserHelp1 from './pages/js/User_Help1'
import UserHelp2 from './pages/js/User_help2'
import UserHelp3 from './pages/js/User_help3'
import UserHelp4 from './pages/js/User_help4'
import StudentHelp4 from './pages/js/StudentHelp4'
import MentorHelp from './pages/js/MentorHelp'
import Student_Help from './pages/js/Student_Help'
import TeacherProfil from './pages/js/TeacherProfil'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proverr2 from './pages/js/Proverr2'
import Oplata from './pages/js/Oplata'
import Help_chat from './pages/js/Help_chat'
import FollowCard from './pages/js/FollowCard'
import Testpage from './pages/js/Testpage'
import Testloader from './pages/js/Testloader'
import Education from './pages/js/Education'
import Test_create from './pages/js/Test_create'
import Koz from './pages/js/Koz'
import Email from './pages/js/Email'

import Sotibol from './pages/js/Sotibol'
export default function App() {

  return (
  
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sotibol" element={<Sotibol />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/Koz" element={<Koz />} />
          <Route path="/editprofil" element={<Loginpage />} />
          <Route path="/editprofilmentor" element={<LoginpageMentor />} />
          <Route path="/about" element={<About />} />
          <Route path="/servis" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/userhelp" element={<UserHelp />} />
          <Route path="/USer_help1" element={<UserHelp1 />} />
          <Route path="/USer_help2" element={<UserHelp2 />} />
          <Route path="/USer_help3" element={<UserHelp3 />} />
          <Route path="/USer_help4" element={<UserHelp4 />} />
          <Route path="/StudentHelp4 " element={<StudentHelp4 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/mentor" element={<Mento />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/video" element={<Video />} />
          <Route path="/ourcourse" element={<Allcourse />} />
          <Route path="/news" element={<News />} />
          <Route path="/newspage" element={<Newspage />} />
          <Route path="/prover" element={<Prover />} />
          <Route path="/Proverr2" element={<Proverr2 />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
          <Route path="/mentorcontact" element={<Mentorcontact />} />
          <Route path="/studentall" element={<StudentAll />} />
          <Route path="/Oplata" element={<Oplata />} />
          <Route path="/MentorHelp" element={<MentorHelp />} />
          <Route path="/Student_Help" element={<Student_Help />} />
          <Route path="/Help_chat" element={<Help_chat />} />
          <Route path="/FollowCard" element={<FollowCard />} />
          <Route path="/TeacherProfil" element={<TeacherProfil />} />
          <Route path="/Testpage" element={<Testpage />} />
          <Route path="/Testloader" element={<Testloader />} />
          <Route path="/education" element={<Education />} />
          <Route path="/testcreate" element={<Test_create />} />


          {/* <Route index element={} />*/}
        </Routes>

      </BrowserRouter>



    </div>
  );
}
