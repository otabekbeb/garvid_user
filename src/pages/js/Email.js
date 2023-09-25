import React from 'react'
import '../css/Email.css'
import { FcGoogle } from 'react-icons/fc'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FiMail } from "react-icons/fi";
import { AiOutlineClose } from 'react-icons/ai'
function Email() {
  const [state1, setState1] = React.useState();
  return (
    <div>
      <div className="email1">
        <AiOutlineClose className='yopish' />
        <h3>Email</h3>
        <div className="email_div1">
          <FiMail className="login_icon1" />
          <input placeholder='Email' type="text" required />
          <div className="login_button_div">
            <button type="button" style={{background:"#6b3d0c"}}>Email</button>
          </div>
          <div className="google_div">
            <FcGoogle className="google_icon" />
            <AiFillTwitterCircle className="twiter_icon" />
            <FaFacebook className="facebooc_icon" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Email