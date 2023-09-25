import React, { useState, useEffect } from 'react'
import '../css/Footer1.css'
import axios from 'axios';
import logo from '../img/signal-2023-06-09-165727_003.png'
import url from './Host';
import Swal from 'sweetalert2';

export default function Footer1() {
  const [state1, setState1] = React.useState();
  const [user, setUser] = useState([])

  useEffect(() => {
    setState1(localStorage.getItem("lang") ? localStorage.getItem("lang") : "en");

    axios.get(`${url}/auth/oneuser`, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUser(res.data)
    }).catch(err => { })

  }, []);
  const email = () => {
    var formdata = {
      email: document.querySelector("#email").value,
    };
    axios
      .post("https://markazback2.onrender.com/api/call_me", formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        Swal.fire("Information sent, wait for a call from the operator")
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire("Check information, Failed to send")
      });
  };
  return (
    <div>

      <div>



        <div className='asd1'>
          <header className='futer'>
            <div className="futer-ichi">

              <div className="futer-block1">
                <img style={{ width: '200px', marginTop: '-200px', marginBottom: '-180px' }} src={logo} alt="" />
                <div className="vbe">
                  <p style={{ color: '#6b3d0c' }}>Welcome to the host<br />company providing services <br /> combining quality,<br /> reliability and compliance!</p>
                </div>
                <div className="link-u">
                  <p style={{ color: '#6b3d0c' }}>Follow us:</p>

                  <div className="poa">
                    <div className="as"></div>
                    <div className="krug"><box-icon name='facebook' type='logo' color='#fff' id="ip"></box-icon></div>
                    <div className="krug"><box-icon name='twitter' type='logo' color='#fff' id="ip" ></box-icon></div>
                    <div className="krug"><box-icon name='instagram' type='logo' color='#fff' id="ip" ></box-icon></div>
                  </div>
                </div>
              </div>
              <div className="futer-block2">
                <h3 style={{ color: '#6b3d0c' }}>Navigation</h3>
                <div className="futer-liner" ></div>

                <div className="futer-block-mini">
                  <div className="qwe">
                    <ul className='ioguhofg'>
                      <li><a onClick={() => window.location = "/"} href="/" style={{ color: '#6b3d0c' }}>Home</a></li>
                      <li><a onClick={() => window.location = "/about"} href="/about" style={{ color: '#6b3d0c' }}>About Us</a></li>
                      <li><a onClick={() => window.location = "/servis"} href="/servis" style={{ color: '#6b3d0c' }}>Services</a></li>
                      <li><a onClick={() => window.location = "/blog"} href="/blog" style={{ color: '#6b3d0c' }}>Blog</a></li>
                    </ul>


                  </div>
                  <div className="qwe">
                    <ul className='ry'>
                      <li><a onClick={() => window.location = "/ourteam"} href="/ourteam" style={{ color: '#6b3d0c' }}>Our team</a></li>
                      <li><a onClick={() => window.location = "/contacts"} href="/contacts" style={{ color: '#6b3d0c' }}>Contacts</a></li>
                      <li style={{ color: '#6b3d0c' }}>{localStorage.getItem("token") ? (user.map((item, key) => { return <a onClick={() => window.location = "/user"} href="/user">{item.username}</a> })) : (<a onClick={() => window.location = "/login"} href="/login" style={{ color: '#6b3d0c' }}>Log in</a>)}</li>
                    </ul>


                  </div>
                </div>
              </div>
              <div className="futer-block3">
                <h3 style={{ color: '#6b3d0c' }}>Contact Information</h3>
                <div className="futer-liner1"></div>
                <div className="futer-text">
                  <p><box-icon name='check' color='#6b3d0c' id="pdsfp" ></box-icon><span style={{ color: '#6b3d0c' }}>info@baisan.org</span></p>
                  <p><box-icon name='check' color='#6b3d0c' id="pdsfp"></box-icon><span style={{ color: '#6b3d0c' }}>Mon - Sat: 9:00 - 18:00</span></p>
                  <p><box-icon name='check' color='#6b3d0c' id="pdsfp" ></box-icon><span style={{ color: '#6b3d0c' }}>Qazaqstan, Turkestan Region, Shymkent city, <br /> Surikova street 3B</span></p>

                </div>


              </div>
              <div className="futer-block4">
                <h3 style={{ color: '#6b3d0c' }} >Subscribe</h3>
                <div className="futer-liner2"></div>
                <div className="futer-inp"></div>

                <div className="futer-block-pass">
                  <p style={{ color: '#6b3d0c' }}> Get the latest updates<br /> and suggestions.</p>
                  <form action="">
                    <input type="text" id='email' placeholder='Email * ' required /><button onClick={() => email()} >Send</button>
                  </form>
                </div>

              </div>


              <div className="media-foter-mobil">
                <div className="futer-mobil-block">
                  <img style={{ width: '200px', marginTop: '-50px', marginBottom: '-60px', marginLeft: '-60px' }} src={logo} alt="" />
                  <div className="futer-mobil-text">
                    <p style={{ color: '#6b3d0c' }}>Welcome to the leading company providing services that combine quality, reliability and compliance!</p>
                  </div>
                  <div className="futer-mobil-krug">
                    <p style={{ color: '#6b3d0c' }}>Follow us:</p>
                    <div className="futer-nobil-ichi">
                      <div className="krug"><box-icon name='facebook' type='logo' color='white' id="ip"></box-icon></div>
                      <div className="krug"><box-icon name='twitter' type='logo' color='white' id="ip" ></box-icon></div>
                      <div className="krug"><box-icon name='instagram' type='logo' color='white' id="ip" ></box-icon></div>
                    </div>
                  </div>
                </div>
                <div className="futer-mobil-block2">
                  <h3 style={{ color: '#6b3d0c' }}>Navigation</h3>
                  <div className="futer-nobil-block-line"></div>
                  <div className="futer-mobil-block-text">
                    <div className="futer-mobil-block-ul">
                      <ul className='saidjaojd'>
                        <li><a onClick={() => window.location = "/"} href="/" style={{ color: '#6b3d0c' }}>Home</a></li>
                        <li><a onClick={() => window.location = "/about"} href="/about" style={{ color: '#6b3d0c' }}>About Us</a></li>
                        <li><a onClick={() => window.location = "/servis"} href="/servis" style={{ color: '#6b3d0c' }}>Services</a></li>
                        <li><a onClick={() => window.location = "/blog"} href="/blog" style={{ color: '#6b3d0c' }}>Blog</a></li>
                      </ul>


                    </div>
                    <div className="futer-mobil-block-ul1">
                      <ul>
                        <li><a onClick={() => window.location = "/ourteam"} href="/ourteam" style={{ color: '#6b3d0c' }}>Our team</a></li>
                        <li><a onClick={() => window.location = "/contacts"} href="/contacts" style={{ color: '#6b3d0c' }}>Contacts</a></li>
                        <li>{localStorage.getItem("token") ? (user.map((item, key) => { return <a key={key} onClick={() => window.location = "/user"} href="/user">{item.username}</a> })) : (<a onClick={() => window.location = "/login"} href="/login">Log in</a>)} </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="futer-mobil-block3">
                  <h3 style={{ color: '#6b3d0c' }}>Contact Information</h3>
                  <div className="futer-nobil-block-line"></div>
                  <div className="futer-text">
                    <p className='lls'><box-icon name='check' color='#6b3d0c' id="pdsfp"></box-icon><span >info@baisan.org</span></p>
                    <p className='lls'><box-icon name='check' color='#6b3d0c' id="pdsfp"></box-icon><span >Mon - Sat: 9:00 - 18:00</span></p>
                    <p className='lkas'><box-icon name='check' color='#6b3d0c' id="pdsfp"></box-icon><span>Qazaqstan, Turkestan Region, Shymkent city, Surikova street 3B</span></p>

                  </div>

                </div>
                <div className="futer-mobil-block4">
                  <h3>Sign</h3>
                  <div className="futer-nobil-block-line1"></div>
                  <p style={{ color: '#6b3d0c' }}>Get the latest updates and offers.</p>
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
              <p>© 2023 Educational online center BAISAN</p>
            </div>
          </div>
        </div>




      </div>


    </div>
  )
}
