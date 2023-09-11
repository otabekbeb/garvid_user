import { useEffect, useState } from 'react'
import Profil from './Profil'
import Pdp from "./UserPdp"
import Usernavbar from "./Navbar"
import Futer from "./Footer1"
import Loader from "./loader";
export default function User() {
  
  const[loader,setLoader] = useState(1)
  useEffect(() => {
    setLoader(0);
  }, [])
if (localStorage.getItem("position")==1) {
  return (
    <div>
{loader==0?(<><Usernavbar />
      <Profil />
      <Pdp />
      <Futer /></> ):(<Loader/>)}
     
    </div>
  )
}
}
