import React from 'react'
import '../css/FollowCard.css'

export default function FollowCard() {
   function folowcolor(){
    document.querySelector('.followButton1').style = 'background-color:gray'
   }
    return (
        <div>
            <div className="followcards">
                <div className="followcard">
                    <img className='jony_foto' src="https://cdn-edge.kwork.ru/files/avatar/big/17/11487504-1.jpg" alt="" />
                    <h5 className='Name'>Alex_Abbasov</h5 >
                    <button onClick={()=>folowcolor()} className='followButton1' >subscribe</button>
                </div>
                
            </div>
        </div>
    )
}
