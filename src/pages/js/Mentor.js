import React from 'react'
import MentorProfil from "./Mentorprofile"
import MentorPdp from "./MentorPdp"
import Futer from "./Futer"
import Usernavbar from './Usernavbar'
export default function Mentor() {
  return (
    <div>
      <Usernavbar />
      <MentorProfil />
      <MentorPdp />
      <Futer />
    </div>
  )
}
