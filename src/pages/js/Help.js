import React from 'react'
import '../css/Help.css'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'
import { FaUserCircle } from 'react-icons/fa'
import { BsChatLeftDots } from 'react-icons/bs'
import { PiStudentDuotone } from 'react-icons/pi'
import {AiOutlineLeft} from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion';
function yobobqol(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function orqaga2(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function yobobqol1(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function yobobqol2(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function yobobqol3(){
  document.querySelector(".user_help").style=`display:none`
  document.querySelector(".malumot_div").style="display:block"
}
function orqaga3(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function orqaga4(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
function orqaga5(){
  document.querySelector(".user_help").style=`display:flex`
  document.querySelector(".malumot_div").style="display:none"
}
export default function Help() {
  return (
    <div>
      <Usernavbar />
      <div className="bos">
      <h1 className='Savol'>Ответы на частые вопросы</h1>
      <div className="user_help">
       <div className="user_help1">
       <div className="user_div" onClick={()=>yobobqol()}>
          <div className="user_icon">
            <FaUserCircle />
          </div>
          <h4>User page</h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol1()}>
          <div className="user_icon">
            <FaUserCircle />
          </div>
          <h4>Mentor page</h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol2()}>
          <div className="user_icon">
            <PiStudentDuotone />
          </div>
          <h4> Student</h4>
        </div>
        <div className="user_div" onClick={()=>yobobqol3()}>
          <div className="user_icon">
            <BsChatLeftDots />
          </div>
          <h4>Chat</h4>
        </div>
       </div>

      </div> 

    <div className="malumot_div">
    <div className="nazad_left_div" onClick={()=>orqaga2()}>
    <AiOutlineLeft /> <p className='nazad'>Hазад</p>
    </div>
      <div className="malumot">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
    
    </div>
      <Futer />
    </div>
  )
}
