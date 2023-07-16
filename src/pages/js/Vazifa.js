import React from 'react'
import '../css/Vazifa.css'
import { RxPinBottom } from 'react-icons/rx'
import { BsCheck2, BsArrowDownShort } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiRefreshCw } from 'react-icons/fi'
import { FiFileText } from 'react-icons/fi'
import { LuPaperclip } from 'react-icons/lu'
export default function Vazifa() {
  return (
    <div className='vazifa_kotta'>
      <div className='Vazifa_white_blok'>
        <div className="vazifa_blok">

          <div className="checbox_skachat_div">
            <input type="checkbox" className='checbox' />
            <div className="skachat_div_blue">
              <BsArrowDownShort />
            </div>
            <div className="title_h5">
              <h5>Задачи по переменным.txt</h5>
              <p className='mb_h5'>5.1 MB | 25.06.2019</p>
            </div>
             <div className="vazifa_title_h5_icon">
            <h5 className='h5_dnone'>Отправленный файл</h5>
            <div className="chec">
              <BsCheck2 />
            </div>
          </div>
          </div>
         
        </div>
        <div className="vazifa_blok">

<div className="checbox_skachat_div">
  <input type="checkbox" className='checbox' />
  <div className="skachat_div_blue">
    <BsArrowDownShort />
  </div>
  <div className="title_h5">
    <h5>Задачи по переменным.txt</h5>
    <p className='mb_h5'>5.1 MB | 25.06.2019</p>
  </div>
   <div className="vazifa_title_h5_icon">
  <h5 className='h5_dnone'>Отправленный файл</h5>
  <div className="chec">
    <BsCheck2 />
  </div>
</div>
</div>

</div>
<div className="vazifa_blok">

          <div className="checbox_skachat_div">
            <input type="checkbox" className='checbox' />
            <div className="skachat_div_blue">
              <BsArrowDownShort />
            </div>
            <div className="title_h5">
              <h5>Задачи по переменным.txt</h5>
              <p className='mb_h5'>5.1 MB | 25.06.2019</p>
            </div>
             <div className="vazifa_title_h5_icon">
            <h5 className='h5_dnone'>Отправленный файл</h5>
            <div className="chec">
              <BsCheck2 />
            </div>
          </div>
          </div>
         
        </div>
        <div className="vazifa_blok">

          <div className="checbox_skachat_div">
            <input type="checkbox" className='checbox' />
            <div className="skachat_div_blue">
              <BsArrowDownShort />
            </div>
            <div className="title_h5">
              <h5>Задачи по переменным.txt</h5>
              <p className='mb_h5'>5.1 MB | 25.06.2019</p>
            </div>
             <div className="vazifa_title_h5_icon">
            <h5 className='h5_dnone'>Отправленный файл</h5>
            <div className="chec">
              <BsCheck2 />
            </div>
          </div>
          </div>
         
        </div>




        <div className="seach_file">
          <div className="search_file_small">
            <div className="file_icon_text">
              <div className="title_file_icon">
                <FiFileText className='file_vazifa' />
                <h6>Задание: общие задачи по первому разделу</h6>
              </div>
              <AiOutlineClose className='close_x_delete' />
            </div>
            <div className="line_vazifa"></div>
            <div className="vector_icon_div">
              <LuPaperclip className='vector_vazifa' />
              <input type="text" placeholder='Отправить задачу' className='inp_vazifa' />
            </div>
          </div>
          <button className='yubor'>Отправить</button>
        </div>
      </div>
    </div>
  )
}
