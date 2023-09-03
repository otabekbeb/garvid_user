import React from 'react'
import "../css/Sertificate_create.css"
import { AiOutlineFileAdd } from "react-icons/ai"
import { BsCalendar } from "react-icons/bs"
import {MdClose} from "react-icons/md"

export default function Sertificate_create() {
    function edit() {
        document.querySelector(".sertificate_edit_header").style = "display:flex;"
        document.querySelector(".sertificate_card_header").style="display:none;"
    }
    function edit_close() {
        document.querySelector(".sertificate_edit_header").style = "display:none;"
        document.querySelector(".sertificate_card_header").style="display:flex;"
    }

    return (
        <div>
            <div className="sertificate_header">
                <div className="sertificate_card_header">
                <div className="sertificate_card">
                    <div className="sertificate_df_edit">
                        <div className="sertificate_i"><AiOutlineFileAdd className='sertificate_icon' /></div>
                        <div className="sertificate_db">
                            <label htmlFor="">Type:
                                <p>asdfghjkl</p>
                            </label>
                            <label htmlFor="">Director:
                                <p>asdfghjkl</p>
                            </label>
                            <label htmlFor="">Mentor:
                                <p>asdfghjkl</p>
                            </label>
                        </div>
                    </div>
                    <label htmlFor="">Description:
                        <p>asdfghjkl assaaaaaaaaaaaaaaaaaaaaa cdcdvd cdd dvdvv dvdvvfv cdcdvdfv</p>
                    </label>
                    <div className="sertificate_botom_df">
                        <button className='sertificate_btn_edit' onClick={() => edit()}>edit</button>
                        <span className='sertificate_calendar'>2023-12-09 <BsCalendar /></span>
                        {/* <input type="date" name="" id="" className='sertificate_date_inp' /> */}
                    </div>
                </div>
                </div>

                <div className="sertificate_edit_header">
                    <div className="sertificate_card_edit">
                        <div className="sertificate_close_btn" onClick={()=> edit_close()}><MdClose/></div>
                        <div className="sertificate_df_edit">
                            <div className="sertificate_i_edit"><AiOutlineFileAdd className='sertificate_icon' /></div>
                            <div className="sertificate_db_edit">
                                <label htmlFor="">Type:
                                    <input type="text" name="" id="" /></label>
                                <label htmlFor="">Director:
                                    <input type="text" name="" id="" /></label>
                                <label htmlFor="">Mentor:
                                    <input type="text" name="" id="" /></label>
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                        <div className="sertificate_botom_df_edit">
                            <button className='sertificate_btn_send'>send</button>
                            <input type="date" name="" id="" className='sertificate_date_inp_edit' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
