import React, { useEffect, useState } from 'react'
import "../css/yozishmalar.css"
import YozishmaUserImg from "../img/Ellipse.jpg"
import{BsArrow90DegLeft,BsReplyFill,BsLink45Deg,BsEmojiSmile,BsArrowLeft} from "react-icons/bs"
import  Picker  from '@emoji-mart/react'
import  data  from '@emoji-mart/data' 

export default function Yozishmalar() {

  const [isPickerVisible,setPickerVisible] = useState(false)
  const [currentEmoji,setCurrentEmoji] = useState(null)

  function chatModal(){
    document.querySelector(".yozishma_small_div").style="display:block;"
    document.querySelector(".yozishma_bolim_text_nik").style="display:none"
    document.querySelector(".yoq1").style="display:flex;"
    document.querySelector(".yoq").style="display:flex;"
  }
  function none() {
    document.querySelector(".yozishma_bolim_text_nik").style="display:block;"
    document.querySelector(".yoq").style="display:none;"
  }
  function none1() {
    document.querySelector(".yozishma_bolim_text_nik").style="display:block;"
    document.querySelector(".yozishma_small_div").style="display:none;"
    document.querySelector(".yoq1").style="display:none;"
  }
  useEffect(() => {
  document.querySelector("#smile_input").value+=currentEmoji===null?(""):(currentEmoji)
  })
  

  return (
    <div>
    <div className="yozishma_big_div">
      <div className="yozishma_big_div_size">
      <div className="yozishma_bolim_text_nik">
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      <div onClick={()=>chatModal()} className="yozishma_bolim_text_nik_text">
        <img src={YozishmaUserImg} alt="" />
       <div className="yozishma_bolim_text_nik_text_ism_p">
        <h1>Тураев Джафарбек</h1>
        <p>Lorem, ipsum dolor.</p>
       </div>
      </div>
      </div>
    <div className="yozishma_small_div">
      <div className="yozishma_telegram_profil">
      <BsArrowLeft className='yoq'  onClick={() => none()} />
      <BsArrowLeft className='yoq1'  onClick={() => none1()} />
      <div className="telegram_pro_img_text">
        <img src={YozishmaUserImg} alt="" />
        <div className="telegram_pro_text">
          <h1>Тураев Джафарбек</h1>
          <p>16:49</p>
        </div>
      </div>
      </div>
        <div className="yozishma_small_text_div">
            <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>Lorem ipsum dolor sit amet consectetur lorem lorem</p>
                  <div className="yozishma_small_text_div_text_javob_sozi"><div className='javob_sozi_big'><BsArrow90DegLeft className='javob_sozi'/><p>Javob berish</p></div><div className="yozishma_vaqt_soat_kun"><span>16-июнь 2019</span></div></div>
                </div>
            </div>
            <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos eveniet excepturi explicabo aut nemo sapiente minus repudiandae eligendi at aperiam repellat magnam accusamus molestiae, ut facilis eaque. Neque, ipsa! </p>
                  <div className="yozishma_small_text_div_text_javob_sozi"><div className='javob_sozi_big'><BsArrow90DegLeft className='javob_sozi'/><p>Javob berish</p></div><div className="yozishma_vaqt_soat_kun"><span>16-июнь 2019</span></div></div>
                </div>
            </div>
            <div className="yozishma_small_text_div_chat">
                <div className="yozishma_small_text_div_text">
                  <p>Lorem ipsum dolor sit amet consectetur lorem lorem</p>
                  <div className="yozishma_small_text_div_text_javob_sozi"><div className='javob_sozi_big'><BsArrow90DegLeft className='javob_sozi'/><p>Javob berish</p></div><div className="yozishma_vaqt_soat_kun"><span>16-июнь 2019</span></div></div>
                </div>
            </div>
        </div>
        <div className="yozishma_small_xabar_div">
          <div className="chat_file_smile">
            <BsLink45Deg className='chat_file_smile_link'/>
            <BsEmojiSmile onClick={()=>setPickerVisible(!isPickerVisible)} className='chat_file_smile_smile'/>
          </div>
          <div className={isPickerVisible?'smile_blok':'smile_none'}>
            <Picker data={data}  onEmojiSelect={(e)=>{
              setCurrentEmoji(e.native)
              setPickerVisible(!isPickerVisible)
            }}/>
          </div>
         <input placeholder='Введите текст' id='smile_input' type="text" />
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}
