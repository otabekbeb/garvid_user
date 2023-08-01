import React, { Component } from 'react' 
import './App.css'; 
import axios from 'axios' 
 
export default class App extends Component { 
  state={
token:sessionStorage.getItem('token')
  }
  jonibek() { 
    var data = new FormData() 
    data.append('email',document.querySelector('.email').value) 
    data.append('user_password',document.querySelector('.user').value) 
    data.append('username',document.querySelector('.email').value) 
axios.post('https://markaz-yhlk.onrender.com/auth/login',data) 
.then((res)=>{ 
console.log(res.data.access); 
sessionStorage.setItem("token",res.data.access)
window.location.reload()
}).catch(()=>{ 
  alert('hato') 
  window.location.reload(); 
}) 
  } 
  render() { 
    return ( 
       
      <div> 
        {this.state.token?(<h1>salom</h1>):( <div className="bigd"> 
       <div className="mini"> 
      <h4>email</h4> 
       <input  className='email'  placeholder='email' type="text"/> 
       </div> 
       
       <div className="mini1"> 
      <h4>user_password</h4> 
       <input   className='user' placeholder='user_password' type="text"/> 
      <button type='button' onClick={()=>{this.jonibek()}} >yubor</button> 
       </div> 
       

       </div> )}
      
 
 
    </div> 
  ); 
} 
}
