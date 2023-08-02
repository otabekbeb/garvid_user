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
    <p>или оплатить с помощью кредитной карты</p>
    <hr className="line"/>
  </div>
  <div className="credit-card-info--form">
    <div className="input_container">
      <label for="password_field" className="input_label">Полное имя владельца карты</label>
      <input id="password_field" className="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name"/>
    </div>
    <div className="input_container">
      <label for="password_field" className="input_label">номер карты</label>
      <input id="password_field" className="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000"/>
    </div>
    <div className="input_container">
      <label for="password_field" className="input_label">Срок годности / CVV</label>
      <div className="split">
      <input id="password_field" className="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23"/>
      <input id="password_field" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV"/>
    </div>
    </div>
  </div>
    <button className="purchase--btn" type='button'>Пополнить баланс</button>
</form>
</div>
</div>
<Footer1/>
    </div>
  )
}
