import React from 'react'
import '../css/FollowCard.css'

export default function FollowCard() {
   function folowcolor(){
    document.querySelector('.followButton1').classList.toggle("followButton2")
   }
    return (
        <div>
          
            <div classNme="followcards">
              <a href="/TeacherProfil">
              <div className="followcard">
                    <img className='jony_foto' src="https://cdn-edge.kwork.ru/files/avatar/big/17/11487504-1.jpg" alt="" />
                    <h5 className='Name'>Alex_Abbasov</h5 >
                    <button onClick={()=>folowcolor()} className='followButton1' >subscribe</button>
                </div>
              </a>
                
                
            </div>
        </div>
    )
}
