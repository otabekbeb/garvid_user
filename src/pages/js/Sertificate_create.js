import React, { useEffect } from 'react'
import "../css/Sertificate_create.css"
import { AiOutlineFileAdd } from "react-icons/ai"
import { BsCalendar } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import axios from 'axios'
import url from "./Host.js"
import { useState } from 'react'
import Swal from "sweetalert2";
import rafiki from "../img/Certification-amico.png"
export default function Sertificate_create() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("page_user")))
    var [sertificat, setSertificat] = useState([])
    const [sertificatId, setSertificatId] = useState()
    function edit(id, type, director, description, time_create) {
        document.querySelector(".sertificate_type_edit").value = type
        document.querySelector(".sertificate_director_edit").value = director
        document.querySelector(".sertificate_description_edit").value = description
        document.querySelector(".sertificate_date_inp_edit").value = time_create
        setSertificatId(id)
        document.querySelector("#sertificate_edit_header").style = "display:flex;"
    }
    function edit_close() {
        document.querySelector("#sertificate_edit_header").style = "display:none;"
    }
    function post_close() {
        document.querySelector("#sertificate_post_header").style = "display:none;"
    }
    function sertificatedf() {
        document.querySelector("#sertificate_post_header").style = "display:flex;"
    }


    function sertificatepost() {
        var formdata = new FormData()

        formdata.append("type", document.querySelector(".sertificate_type_post").value)
        formdata.append("director", document.querySelector(".sertificate_director_post").value)
        formdata.append("mentor", localStorage.getItem("OneuserId"))
        formdata.append("description", document.querySelector(".sertificate_description_post").value)
        formdata.append("time_create", document.querySelector(".sertificate_date_inp_post").value)
        formdata.append("file", document.querySelector(".sertificate_file_post").files[0])


        axios.post(`${url}/edu/sertificat`, formdata, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            Swal.fire("success")
            window.location.reload()
        }).catch(err => {
            Swal.fire(err)
        })
    }


    function sertificateput(id) {
        var formdata = new FormData()

        formdata.append("type", document.querySelector(".sertificate_type_edit").value)
        formdata.append("director", document.querySelector(".sertificate_director_edit").value)
        formdata.append("mentor", localStorage.getItem("OneuserId"))
        formdata.append("description", document.querySelector(".sertificate_description_edit").value)
        formdata.append("time_create", document.querySelector(".sertificate_date_inp_edit").value)
        formdata.append("file", document.querySelector(".sertificate_file_edit").files[0])

        axios.put(`${url}/edu/sertificat/${sertificatId}`, formdata, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            Swal.fire("success")
            window.location.reload()
        }).catch(err => {
            Swal.fire(err)
        })
        axios.get(`${url}/edu/sertificat`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setSertificatId(res.data)
        }).catch(err => {
            console.log(err);
        })
    }






    useEffect(() => {
        axios.get(`${url}/edu/sertificat`).then(res => {

            var a = res.data.filter(item => item.mentor == localStorage.getItem("OneuserId"))
            setSertificat(a)
        })
    })

    return (
        <div>
            <div className='sertificatedf'>
                <div className="sertificate_post_btn">
                    <button onClick={() => sertificatedf()}>Add</button>
                </div>
            </div>
            <div className="sertificate_header">
                {sertificat.length !== 0 ? (<div className='rafiki_sertificate_img'>
                    <img src={rafiki} alt="" />
                    <h3>You have not created a certificate</h3>
                </div>) : (<>{sertificat.map(item => {
                    localStorage.setItem("sertificate_createLength", sertificat.length)
                    return <div className="sertificate_card_header">
                        <div className="sertificate_card">
                            <div className="sertificate_df_edit">
                                <a href={`${url}/${item.file}`} className="sertificate_i"><AiOutlineFileAdd className='sertificate_icon' /></a>
                                <div className="sertificate_db">
                                    <label htmlFor="">Type:
                                        <p>{item.type.length < 29 ? (item.type) : (<div>{item.type.slice(0, 29)}...</div>)}</p>
                                    </label>
                                    <label htmlFor="">Director:
                                        <p>{item.director}</p>
                                    </label>
                                    <label htmlFor="">Mentor:
                                        <p>{user[0].last_name}</p>
                                    </label>
                                </div>
                            </div>
                            <label htmlFor="">Description:
                                <p>{item.description}</p>
                            </label>
                            <div className="sertificate_botom_df">
                                <button className='sertificate_btn_edit' onClick={() => edit(item.id, item.type, item.director, item.description, item.time_create)}>edit</button>
                                <span className='sertificate_calendar'>{(item.time_create).slice(0, 10)} <BsCalendar /></span>
                                {/* <input type="date" name="" id="" className='sertificate_date_inp' /> */}
                            </div>
                        </div>
                    </div>
                })}</>)}



                <div id='sertificate_edit_header' className="sertificate_edit_header">
                    <div className="sertificate_card_edit">
                        <div className="sertificate_close_btn" onClick={() => edit_close()}><MdClose /></div>
                        <div className="sertificate_df_edit">
                            <div className="sertificate_i_edit"><AiOutlineFileAdd className='sertificate_icon' />
                                <input type="file" name="" id="" className='sertificate_file_edit' />
                            </div>
                            <div className="sertificate_db_edit">
                                <label htmlFor="">Type:
                                    <input type="text" name="" id="" className='sertificate_type_edit' /></label>
                                <label htmlFor="">Director:
                                    <input type="text" name="" id="" className='sertificate_director_edit' /></label>
                                {/* <label htmlFor="">Mentor:
                                    <input type="text" name="" id="" className='sertificate_mentor_edit' /></label> */}
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Description' className='sertificate_description_edit'></textarea>
                        <div className="sertificate_botom_df_edit">
                            <button className='sertificate_btn_send' onClick={() => sertificateput()}>send</button>
                            <input type="date" name="" id="" className='sertificate_date_inp_edit' />
                        </div>
                    </div>
                </div>

                <div id='sertificate_post_header' className="sertificate_edit_header">
                    <div className="sertificate_card_edit">
                        <div className="sertificate_close_btn" onClick={() => post_close()}><MdClose /></div>
                        <div className="sertificate_df_edit">
                            <div className="sertificate_i_edit"><AiOutlineFileAdd className='sertificate_icon' />
                                <input type="file" name="" id="" className='sertificate_file_post' />
                            </div>
                            <div className="sertificate_db_edit">
                                <label htmlFor="">Type:
                                    <input type="text" name="" id="" className='sertificate_type_post' /></label>
                                <label htmlFor="">Director:
                                    <input type="text" name="" id="" className='sertificate_director_post' /></label>
                                {/* <label htmlFor="">Mentor:
                                    <input type="text" name="" id="" className='sertificate_mentor_post' /></label> */}
                            </div>
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Description' className='sertificate_description_post'></textarea>
                        <div className="sertificate_botom_df_edit">
                            <button className='sertificate_btn_send' onClick={() => sertificatepost()}>send</button>
                            <input type="date" name="" id="" className='sertificate_date_inp_post' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
