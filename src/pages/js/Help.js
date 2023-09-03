import { useState,useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { PiChalkboardTeacherFill } from 'react-icons/pi'
import { PiStudentDuotone } from 'react-icons/pi'
import { BsChatLeftDots } from 'react-icons/bs'
import '../css/Help.css'
import Futer from "./Footer1"
import Usernavbar from './Navbar'
import Profil from './Profil'
import axios from 'axios'
import url from './Host'

export default function Help() {




  return (
    <div>
      <Usernavbar />
      <Profil />

      <div className="bos">
        <h1 className='Savol'>Answers to frequently asked questions</h1>
        <div className="user_help">
          <div className="user_help1">
            <a href="/userhelp">  
              <div className="user_div"  >
                <div className="user_icon">
                  <FaUserCircle />
                </div>
                <h4>User</h4>
              </div>
            </a>
            <a href="/MentorHelp">
              <div className="user_div"  >
                <div className="user_icon">
                  <PiChalkboardTeacherFill />
                </div>
                <h4>Mentor</h4>
              </div>
            </a>
            <a href="/Student_Help">
              <div className="user_div"  >
                <div className="user_icon">
                  <PiStudentDuotone />
                </div>
                <h4> Student</h4>
              </div>
            </a>
            <a href="/Help_chat">
              <div className="user_div" >
                <div className="user_icon">
                  <BsChatLeftDots />
                </div>
                <h4>Chat</h4>
              </div>
            </a>
          </div>

        </div>






      </div>


   
      


      <Futer />
    </div>
  )
}
