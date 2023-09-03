import React from 'react'
import "../css/Sertificate_create.css"
import { AiOutlineFileAdd } from "react-icons/ai"

export default function Sertificate_create() {
    return (
        <div>
            <div className="sertificate_header">
                <div className="sertificate_card">
                    <div className="sertificate_df_edit">
                        <div className="sertificate_i"><AiOutlineFileAdd className='sertificate_icon' /></div>
                        <div className="sertificate_db_edit">
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
                    <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                    <div className="sertificate_botom_df">
                        <button className='sertificate_btn_delete'>delete</button>
                        <input type="date" name="" id="" className='sertificate_date_inp' />
                    </div>
                </div>


                <div className="sertificate_card_edit">
                    <div className="sertificate_df_edit">
                        <div className="sertificate_i"><AiOutlineFileAdd className='sertificate_icon' /></div>
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
                        <button className='sertificate_btn_delete'>delete</button>
                        <input type="date" name="" id="" className='sertificate_date_inp' />
                    </div>
                </div>
            </div>
        </div>
    )
}
