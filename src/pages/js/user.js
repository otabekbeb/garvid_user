import React from 'react'
import Profil from './Profil'
import Pdp from "./UserPdp"
import Futer from "./Futer"
import Usernavbar from "./Usernavbar"

export default function user() {
  return (
    <div>
      <Usernavbar/>
    <Profil/>
    <Pdp/>
    <Futer/>
    </div>
  )
}
