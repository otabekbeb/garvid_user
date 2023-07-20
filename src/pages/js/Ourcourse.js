import React from 'react'
import "../css/Ourcourse.css"
import { BiSearch } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {AiOutlineMenu} from 'react-icons/ai'

export default function Ourcourse() {
  return (
    <div>
        <div className="gray_navbar">
            <div className="course_inp">
                <h1>Bizning kurslar</h1>
                <div className="df_inp">
                <input type="text" name="" id="" placeholder='Qanday kurs o’rganmoqchisiz ?'/>
                <i><BiSearch/></i>
                </div>
            </div>
            <div className="nav_tab">
            <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="link-1">Barchasi</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Dasturlash</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Dizayn</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Marketing</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5">Biznes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-6">Salomatlik</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-7">Menejment</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-8">Buxgalteriya</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-9">Xavfsizlik</Nav.Link>
      </Nav.Item>
    </Nav>
            </div>
            <input type="checkbox" name="" id="chk1" />
            <div className="menu_i">
                <label for="chk1">
                <i><AiOutlineMenu/></i>
                </label>
            </div>
        </div>
    </div>
  )
}
