import React, { useEffect, useState } from 'react'
import '../css/workforteach.css'
import { BsFillCloudArrowDownFill } from 'react-icons/bs'
import { FiEdit } from "react-icons/fi"
import sertifikat from '../img/Sertifikat.png'
import axios from 'axios'
import url from './Host'
import { MdDeleteOutline } from "react-icons/md"
import Groupimg from '../img/Group 2.png'
import { GrFormClose } from 'react-icons/gr'
import img_for_null from '../img/download.png'
import { FiDownload } from "react-icons/fi"
import Swal from "sweetalert2";
export default function Workforteach() {
    const [stTasks, setTasks] = useState([])
    // const [kursdata, setKursdata] = useState([]);
    function openModal() {
        document.querySelector(".m_zadacha_tepadan").style = "display: flex; justify-content: center;align-items: center;"
    }
    function clouseModal() {
        document.querySelector(".m_zadacha_tepadan").style = "display:none"
    }
    function openModal1() {
        document.querySelector(".m_zadacha_tepadan1").style = "display: flex; justify-content: center;align-items: center;"
    }
    function clouseModal1() {
        document.querySelector(".m_zadacha_tepadan1").style = "display:none"
    }
    function openModal2() {
        document.querySelector(".m_delete_tepadan2").style = "display: flex; justify-content: center;align-items: center;"
    } function clouseModal2() {
        document.querySelector(".m_delete_tepadan2").style = "display:none"
    }
    useEffect(() => {
        axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setTasks(res.data)
        })

    }, [])



    // function dashed(id) {
    //     var formdata = new FormData()
    //     formdata.append("name", document.querySelector(".inp_name_zadac").value)
    //     formdata.append("description", document.querySelector(".text_inp").value)
    //     formdata.append("image", document.querySelector(".img_inp_zadac").files[0])
    //     // formdata.append("description", document.querySelector(".description").value)
    //     // formdata.append("price", document.querySelector(".inp_numbr1").value)
    //     // formdata.append("planned_time", document.querySelector(".inp_numbr").value)
    //     // formdata.append("course_type", document.querySelector(".select_zadac").value)
    //     // formdata.append("author", localStorage.getItem("OneuserId"))

    //     axios.put(`${url}/edu/student_sertificat${id}`, formdata, {
    //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    //     }).then(res => {
    //         Swal.fire("success")
    //         window.location.reload()
    //     }).catch(err => {
    //         Swal.fire(err)
    //     })
    //     axios.get(`${url}/edu/student_sertificat`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
    //         setKursdata(res.data)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    return (
        <div>

            <div className="m_dobavit_kurs">
                <button onClick={() => openModal()}>Добавить задачу</button>
            </div>
            <div className="m_zadach">
                {stTasks.map(item => {
                    return (
                        <div className="m_zadach_block">
                        {item.image === null ? (<img className='jony_foto' src={img_for_null} alt="" />) : (<img src={item.image} alt="" />)}
                            <h4>{item.content}</h4>
                            <p>{item.course_theme}</p>
                            <div className="m_zadacha_icon">
                                <div className="m_zadach_ktug_icon1" onClick={() => openModal2()}>
                                    <MdDeleteOutline />
                                </div>
                                <div className="m_zadach_ktug_icon" >
                                    <FiEdit />
                                    {/* onClick={() => dashed(item.id)} */}
                                </div>
                                <div className="m_zadach_ktug_icon" >
                                    <BsFillCloudArrowDownFill />
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>


            <div className="m_zadacha_tepadan">
                {/* {kursdata.map(item => {
                    return ( */}
                        <div className="m_zadachi_dobavit">
                            <div className="m_clouse_x" onClick={() => clouseModal()}><GrFormClose /></div>
                            <div className="m_input_file_dobavit">
                                <div className="a_input_file12"><FiDownload /> Добавить задание </div>
                                <input type="file" className='img_inp_zadac' />
                            </div><br />
                            <div className="m_input_bilmafim">
                                <input type="text" name="" id="" className='inp_name_zadac' />
                                <textarea placeholder='Description' name="" id="" cols="30" rows="10"></textarea> <br />
                                <div className="a_button_for_end"><button>Добавить</button></div>
                            </div>
                        </div>
                    {/* )
                })} */}
            </div>


            <div className="m_zadacha_tepadan">

                <div className="m_zadachi_dobavit">
                    <div className="m_clouse_x" onClick={() => clouseModal()}><GrFormClose /></div>
                    <div className="m_input_file_dobavit">
                        <div className="a_input_file12"><FiDownload /> Добавить задание </div>
                        <input type="file" />
                    </div><br />
                    <div className="m_input_bilmafim">
                        <select name="" id="select1">
                            <option value="">Otash bilad</option>
                        </select>
                        <textarea className='text_inp' placeholder='Description' name="" id="" cols="30" rows="10"></textarea> <br />
                        <div className="a_button_for_end"><button>Добавить</button></div>
                    </div>
                </div>
            </div>

            <div className="m_zadacha_tepadan1">

                <div className="m_zadachi_dobavit">
                    <div className="m_clouse_x" onClick={() => clouseModal1()}><GrFormClose /></div>
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
                    <div className="for_center">
                        <img src={Groupimg} alt="" />
                        <h4>Вы правда хотите удалить?</h4>
                        <div className="a_delete_button">
                            <button className='a_delete_no' onClick={() => clouseModal2()}>Нет</button> <button className="a_delete_yes">Да</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
