import React from 'react'
import '../css/Aplata.css'

import Footer1 from './Footer1'
import Navbar2 from './Usernavbar'

export default function Oplata() {
  return (
    <div>
<Navbar2/>
<div className="oplata">
<div className="modal21">
<form className="form21">

  <div className="separator">
    <hr className="line"/>
    <p>or pay with a credit card</p>
    <hr className="line"/>
  </div>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label for="password_field" className="input_label">Full name of the cardholder</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name"/>
    </div>
    <div className="input_container">
      <label for="password_field" className="input_label">card number</label>
      <input id="password_field" className="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000"/>
    </div>
    <div className="input_container">
      <label for="password_field" className="input_label">Expiration date / CVV</label>
      <div className="split">
      <input id="password_field" className="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23"/>
      <input id="password_field" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV"/>
    </div>
    </div>
  </div>
    <button className="purchase--btn" type='button'>Top up your balance</button>
</form>
</div>
</div>
<Footer1/>
    </div>
  )
}
