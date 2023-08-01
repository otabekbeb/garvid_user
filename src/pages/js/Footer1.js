import React, { useState,useEffect } from 'react'
import '../css/Footer1.css'
import axios from 'axios';
import url from './Host';

export default function Footer1() {
  const [state1, setState1] = React.useState();
  const [user,setUser] = useState([])

  useEffect(() => {
    setState1(localStorage.getItem("lang") ? localStorage.getItem("lang") : "en");
   
    axios.get(`${url}/auth/oneuser`, { headers: { "Authorization":  "Bearer " + localStorage.getItem("token") } }).then(res=>{
      setUser(res.data) 
    })

  },[]);
  return (
    <div>

      <div>



<div className='asd1'>
<header className='futer'>
<div className="futer-ichi">

<div className="futer-block1">
<img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-logo-footer.png" alt="" />
<div className="vbe">
  <p>Welcome to the host<br />company providing services <br /> combining quality,<br /> reliability and compliance!</p>
</div>
  <div className="link-u">
    <p>Follow us:</p>
   
 <div className="poa">
  <div className="as"></div>
 <div className="krug"><box-icon name='facebook' type='logo' color='white' id="ip"></box-icon></div>
    <div className="krug"><box-icon name='twitter' type='logo' color='white'  id="ip" ></box-icon></div>
    <div className="krug"><box-icon name='instagram' type='logo' color='white' id="ip" ></box-icon></div>
 </div>
  </div>
</div>
<div className="futer-block2">
<h3>Navigation</h3>
<div className="futer-liner"></div>

<div className="futer-block-mini">
  <div className="qwe">
<ul className='ioguhofg'>
  <li><a onClick={()=> window.location="/"} href="/">Home</a></li>
  <li><a onClick={()=> window.location="/about"} href="/about">About Us</a></li>
  <li><a onClick={()=> window.location="/servis"} href="/servis">Services</a></li>
  <li><a onClick={()=> window.location="/blog"} href="/blog">Blog</a></li>
</ul>


  </div>
  <div className="qwe">
<ul className='ry'>
  <li><a onClick={()=> window.location="/ourteam"} href="/ourteam">Our team</a></li>
  <li><a onClick={()=> window.location="/contacts"} href="/contacts">Contacts</a></li>
  <li>{localStorage.getItem("token")?(user.map(item=>{return<a onClick={()=> window.location="/user"} href="/user">{item.username}</a>})):(<a onClick={()=> window.location="/login"} href="/login">Log in</a>)}</li>
</ul>


  </div>
</div>
</div>
<div className="futer-block3">
<h3>Contact Information</h3>
<div className="futer-liner1"></div>
<div className="futer-text">
<p><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span>(123) 45678910</span></p>
<p><box-icon name='check' color='#44bef1'id="pdsfp" ></box-icon><span>info@demolink.org</span></p>
<p><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span>Mon - Sat: 9:00 - 18:00</span></p>
<p><box-icon name='check' color='#44bef1'id="pdsfp" ></box-icon><span>267 Park Avenue New York, NY 90210</span></p>

</div>


</div>
<div className="futer-block4">
<h3>Subscribe</h3>
<div className="futer-liner2"></div>
<div className="futer-inp"></div>

<div className="futer-block-pass">
  <p>Get the latest updates<br /> and suggestions.</p>
  <form action="">
  <input type="text" placeholder='Email * ' required /><button >Send</button>

</form>
</div>

</div>


<div className="media-foter-mobil">
  <div className="futer-mobil-block">
  <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-logo-footer.png" alt="" />
<div className="futer-mobil-text">
  <p>Welcome to the leading company providing services that combine quality, reliability and compliance!</p>
</div>
<div className="futer-mobil-krug">
<p>Follow us:</p>
<div className="futer-nobil-ichi">
<div className="krug"><box-icon name='facebook' type='logo' color='white' id="ip"></box-icon></div>
    <div className="krug"><box-icon name='twitter' type='logo' color='white'  id="ip" ></box-icon></div>
    <div className="krug"><box-icon name='instagram' type='logo' color='white' id="ip" ></box-icon></div>
</div>
</div>
  </div>
  <div className="futer-mobil-block2">
    <h3>Navigation</h3>
    <div className="futer-nobil-block-line"></div>
<div className="futer-mobil-block-text">
  <div className="futer-mobil-block-ul">
<ul className='saidjaojd'>
<li><a onClick={()=> window.location="/"} href="/">Home</a></li>
  <li><a onClick={()=> window.location="/about"} href="/about">About Us</a></li>
  <li><a onClick={()=> window.location="/servis"} href="/servis">Services</a></li>
  <li><a onClick={()=> window.location="/blog"} href="/blog">Blog</a></li>
</ul>


  </div>
  <div className="futer-mobil-block-ul1">
    <ul>
    <li><a onClick={()=> window.location="/ourteam"} href="/ourteam">Our team</a></li>
  <li><a onClick={()=> window.location="/contacts"} href="/contacts">Contacts</a></li>
    <li>{localStorage.getItem("token")?(user.map(item=>{return<a onClick={()=> window.location="/user"} href="/user">{item.username}</a>})):(<a onClick={()=> window.location="/login"} href="/login">Log in</a>)} </li>
    </ul>
  </div>
</div>
  </div>
  <div className="futer-mobil-block3">
    <h3>Contact Information</h3>
    <div className="futer-nobil-block-line"></div>
    <div className="futer-text">
<p className='lkas'><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span>(123) 45678910</span></p>
<p className='lls'><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span >info@demolink.org</span></p>
<p className='lls'><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span >Mon - Sat: 9:00 - 18:00</span></p>
<p className='lkas'><box-icon name='check' color='#44bef1' id="pdsfp"></box-icon><span>267 Park Avenue, New York, NY 90210</span></p>

</div>

  </div>
  <div className="futer-mobil-block4">
    <h3>Sign</h3>
    <div className="futer-nobil-block-line1"></div>
    <p>Get the latest updates and offers.</p>
<div className="futer-mobil-input">
<form action="">
<input type="email" required placeholder='Email*' />


<div className="futer-mobil-button"><button>Send</button></div>
</form>
</div>
  </div>
</div>







</div>




</header>




<div className="futer-pas">
  <div className="futer-cen">
<p>© 2019 FinExpert.  Privacy policy</p>
  </div>
</div>
    </div>




      </div>

  
    </div>
  )
}
