import React from 'react'
import MentorProfil from "./Mentorprofile"
import MentorPdp from "./MentorPdp"
import Futer from "./Futer"
import Navbar from './Navbar'
export default function Mentor() {
  return (
    <div>
      <Navbar/>
      <MentorProfil/>
      <MentorPdp/>
      <Futer/>
    </div>
  )
}
