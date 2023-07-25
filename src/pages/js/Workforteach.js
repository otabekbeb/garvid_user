import React from 'react'
import '../css/workforteach.css'
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import sertifikat from '../img/Sertifikat.png'

export default function Workforteach() {
function openModal(){
    document.querySelector(".m_zadacha_tepadan").style="display:block"
}
function clouseModal(){
    document.querySelector(".m_zadacha_tepadan").style="display:none"
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
                <div className="m_zadach_ktug_icon">
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1">
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
            <div className="m_zadach_block">
            <img src={sertifikat} alt="" />
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos dolor dignissimos quidem voluptate aliquam culpa sapiente! Atque magni dolorem delectus natus, aut facilis et! Possimus suscipit accusantium beatae dignissimos quo, alias odit cumque ea error fugit repellat earum fugiat illum est pariatur ipsam totam id dolor voluptates dolorum. Voluptatum!</p>
            <div className="m_zadacha_icon">
                <div className="m_zadach_ktug_icon">
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1">
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
            <div className="m_zadach_block">
            <img src={sertifikat} alt="" />
            <h4>Name</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos dolor dignissimos quidem voluptate aliquam culpa sapiente! Atque magni dolorem delectus natus, aut facilis et! Possimus suscipit accusantium beatae dignissimos quo, alias odit cumque ea error fugit repellat earum fugiat illum est pariatur ipsam totam id dolor voluptates dolorum. Voluptatum!</p>
            <div className="m_zadacha_icon">
                <div className="m_zadach_ktug_icon">
                    <AiOutlineEdit/>
                </div>
                <div className="m_zadach_ktug_icon1">
                    <AiOutlineDelete/>
                </div>
            </div>
            </div>
            
        </div>
       
       <div className="m_zadacha_tepadan">
        <div className="m_clouse_x" onClick={()=>clouseModal()}>x</div>
       <div className="m_zadachi_dobavit">
                <input type="file" /> <br />
                <input type="text" placeholder='Lasson name'/> <br />
                <textarea placeholder='Description' name="" id="" cols="30" rows="10"></textarea> <br />
                <button>Добавить</button>
            </div>
       </div>
    </div>
  )
}
