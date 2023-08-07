import React from 'react'
import '../css/User_help2.css'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'
import { BiSolidLike } from 'react-icons/bi'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiSolidDislike } from 'react-icons/bi'
export default function User_help2() {
  function like() {
    document.querySelector('.like1').style = "color:#44bef1"
    document.querySelector('.like2').style = "color:black"
    

  }
  function liken() {
    document.querySelector('.like1').style = "color:black"
    document.querySelector('.like2').style = "color:#44bef1"
    

  }
  return (
    <div>
      <Usernavbar />

      <div className="big_svl1">
        <div className="orqaga1">
          <div className="orqaga_icon">
            <a href="/Student_Help"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
          </div>
        </div>
        <div className="mod_svg1">
          <div className="text_mod1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis corrupti doloremque suscipit non ex perferendis in exercitationem accusantium delectus explicabo enim fuga provident inventore facilis ab excepturi quas distinctio ducimus, assumenda consectetur eum, voluptatem velit! Velit voluptatibus ad enim rerum distinctio sed cupiditate dolores ipsum, earum qui magnam odio in animi? Voluptatem magni sapiente eius sint laborum, minus recusandae magnam quis, dicta neque quisquam, aliquid voluptatum sed sit? Excepturi, ut nisi iusto reprehenderit quia voluptatum ea quisquam nulla explicabo laborum laudantium libero non quas necessitatibus aspernatur. Laudantium commodi error eligendi quia quas ullam vel dolore delectus quae ex?
            </p>
          </div>
          <div className="like_div">
            <BiSolidLike className='like1' onClick={() => like()} />
            <BiSolidDislike className='like2' onClick={()=>liken()} />
          </div>
        </div>
      </div>
      <Futer />

    </div>
  )
}
