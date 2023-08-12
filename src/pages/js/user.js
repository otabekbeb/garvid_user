import React from 'react'
import Profil from './Profil'
import Pdp from "./UserPdp"
import Usernavbar from "./Usernavbar"
import Futer from "./Footer1"
export default function user() {
  
if (localStorage.getItem("position")==1) {
  return (
    <div>
      <Usernavbar />
      <Profil />
      <Pdp />
      <Futer />
    </div>
  )
}
}
