import React from 'react'
import '../css/User_help2.css'
import Futer from "./Footer1"
import Usernavbar from './Usernavbar'

import { AiOutlineLeft } from 'react-icons/ai'
export default function User_help2() {
  return (
    <div>
      <Usernavbar />

      <div className="big_svl1">
        <div className="orqaga1">
          <div className="orqaga_icon">
            <a href="/UserHelp"><button className='nazad_bt'>   <AiOutlineLeft /> back</button></a>
          </div>
        </div>
        <div className="mod_svg1">
          <div className="text_mod1">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae corporis corrupti doloremque suscipit non ex perferendis in exercitationem accusantium delectus explicabo enim fuga provident inventore facilis ab excepturi quas distinctio ducimus, assumenda consectetur eum, voluptatem velit! Velit voluptatibus ad enim rerum distinctio sed cupiditate dolores ipsum, earum qui magnam odio in animi? Voluptatem magni sapiente eius sint laborum, minus recusandae magnam quis, dicta neque quisquam, aliquid voluptatum sed sit? Excepturi, ut nisi iusto reprehenderit quia voluptatum ea quisquam nulla explicabo laborum laudantium libero non quas necessitatibus aspernatur. Laudantium commodi error eligendi quia quas ullam vel dolore delectus quae ex?
            </p>
          </div>

        </div>
      </div>
      <Futer />

    </div>
  )
}
