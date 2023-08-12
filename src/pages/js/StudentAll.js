import React from 'react'
import Studentpage from "./Studentpage"


export default function StudentAll() {
    if (localStorage.getItem("position")==4) {
  return (
    <div><Studentpage/></div>
  )
    }
}
