import React from 'react'
import MentorProfil from "./Mentorprofile"
import MentorPdp from "./MentorPdp"
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'
import { useEffect } from 'react'
import axios from 'axios'
export default function Mentor() {



if (localStorage.getItem("position")==2) {
  return(
    <div>
    <Usernavbar />
    <MentorProfil />
    <MentorPdp />
    <Futer />
  </div>
  )
}
}
