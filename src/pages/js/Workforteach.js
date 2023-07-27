import React from 'react'
import '../css/workforteach.css'
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import sertifikat from '../img/Sertifikat.png'

export default function Workforteach() {
function openModal(){
    document.querySelector(".m_zadacha_tepadan").style="display: flex; justify-content: center;align-items: center;"
}
function clouseModal(){
    document.querySelector(".m_zadacha_tepadan").style="display:none"
}
function openModal1(){
    document.querySelector(".m_zadacha_tepadan1").style="display: flex; justify-content: center;align-items: center;"
}function clouseModal1() {
    document.querySelector(".m_zadacha_tepadan1").style="display:none"
}
function openModal2(){
    document.querySelector(".m_delete_tepadan2").style="display: flex; justify-content: center;align-items: center;"
}function clouseModal2() {
    document.querySelector(".m_delete_tepadan2").style="display:none"
}
  return (
    <div>
         <div className="m_dobavit_kurs">
            <button onClick={()=>openModal()}>Добавить задачу</button>
        </div>
        <div className="m_zadach">
            <div className="m_zadach_block">
            <img src={sertifikat} alt="" />
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos dolor dignissimos quidem voluptate aliquam culpa sapiente! Atque magni dolorem delectus natus, aut facilis et! Possimus suscipit accusantium beatae dignissimos quo, alias odit cumque ea error fugit repellat earum fugiat illum est pariatur ipsam totam id dolor voluptates dolorum. Voluptatum!</p>
            <div className="m_zadacha_icon">
                <div className="m_zadach_ktug_icon" onClick={()=>openModal1()}>
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1" onClick={()=>openModal2()}>
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
            <div className="m_zadach_block">
            <img src={sertifikat} alt="" />
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos dolor dignissimos quidem voluptate aliquam culpa sapiente! Atque magni dolorem delectus natus, aut facilis et! Possimus suscipit accusantium beatae dignissimos quo, alias odit cumque ea error fugit repellat earum fugiat illum est pariatur ipsam totam id dolor voluptates dolorum. Voluptatum!</p>
            <div className="m_zadacha_icon">
                <div className="m_zadach_ktug_icon" onClick={()=>openModal1()}>
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1" onClick={()=>openModal2()}>
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
            <div className="m_zadach_block">
            <img src={sertifikat} alt="" />
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos dolor dignissimos quidem voluptate aliquam culpa sapiente! Atque magni dolorem delectus natus, aut facilis et! Possimus suscipit accusantium beatae dignissimos quo, alias odit cumque ea error fugit repellat earum fugiat illum est pariatur ipsam totam id dolor voluptates dolorum. Voluptatum!</p>
            <div className="m_zadacha_icon">
                <div className="m_zadach_ktug_icon" onClick={()=>openModal1()}>
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1" onClick={()=>openModal2()}>
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
        </div>
       
       <div className="m_zadacha_tepadan">
        
       <div className="m_zadachi_dobavit">
       <div className="m_clouse_x" onClick={()=>clouseModal()}>x</div>
                 <div className="m_input_file_dobavit">  
                 <div className="a_input_file12"> Добавить изоброжение </div> 
                 <input type="file" /> 
                </div><br />
                <div className="m_input_bilmafim">
                    <select name="" id="select1">
                        <option value="">Otash bilad</option>
                    </select>
                <textarea placeholder='Description' name="" id="" cols="30" rows="10"></textarea> <br />
                <div className="a_button_for_end"><button>Добавить</button></div>
                </div>
                </div>
            </div>
            <div className="m_zadacha_tepadan1">
        
       <div className="m_zadachi_dobavit">
       <div className="m_clouse_x" onClick={()=>clouseModal1()}>x</div>
                 <div className="m_input_file_dobavit">  
                 <div className="a_input_file12"> Изменить изоброжение </div> 
                 <input type="file" /> 
                </div>
                <div className="m_input_bilmafim">
                <select name="" id="select1">
                        <option value="">Otash bilad</option>
                    </select>
                <textarea placeholder='Edid description' name="" id="" cols="30" rows="10"></textarea> 
                <div className="a_button_for_end"><button>Изменить</button></div>
                </div>
                </div>
            </div>
            <div className="m_delete_tepadan2">
                <div className="a_delete_bgc">
                <div className="m_clouse_x" onClick={()=>clouseModal2()}>x</div>
                    <div className="for_center">
                <img src={sertifikat} alt="" />
            <p>Вы действительно хотите удалить Namgreeregee этот урок</p>
            <div className="a_delete_button">
                <button className="a_delete_yes">Да</button> <button className='a_delete_no' onClick={()=>clouseModal2()}>Нет</button>
            </div>
            </div>
            </div>
            </div>
       </div>
  )
}
