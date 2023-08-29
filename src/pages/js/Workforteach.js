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
import { FaHourglassStart } from 'react-icons/fa'
import { FaHourglassEnd } from 'react-icons/fa'
import Swal from "sweetalert2";
export default function Workforteach() {
    const [stTasks, setTasks] = useState([])
    const [CourseId, setCourseId] = useState();
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
    function deletetask() {
        axios.delete(`${url}/api/course_theme_task_student/${stTasks}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Данные удалены")
            document.querySelector("#EducationdeleteModal").style = "display:none"
            axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setTasks(res.data)
            })
        }).catch(err => {
            alert("Данные не удалены")
        })
    }




    function postforzadac() {
        var formdata = new FormData()

        formdata.append("content", document.querySelector(".inp_name_zadac").value)
        formdata.append("feedback", document.querySelector(".inp_ops_zadac").value)
        formdata.append("course_theme", document.querySelector(".inp_course_theme_zadac").value)
        formdata.append("time_create", document.querySelector(".inp_bdate_zadac").value)
        formdata.append("time_update", document.querySelector(".inp_tdate_zadac").value)
        formdata.append("image", document.querySelector(".img_inp_zadac").files[0])
        formdata.append("mark", document.querySelector(".inp_mark_zadac").value)
        // formdata.append("author", localStorage.getItem("OneuserId"))


        axios.post(`${url}/api/course_theme_task_student`, formdata, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
            Swal.fire("success")
            window.location.reload()
        }).catch(err => {
            Swal.fire(err)
        })
    }


    function zadacput(id) {
        setCourseId(id)
        document.querySelector("#zadaca_put").style = "display:flex !important"
        setTimeout(() => {
          axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setTasks(res.data)
            const filter = res.data.filter(item => item.id == id)
            document.querySelector("#name").value = filter[0].name
            document.querySelector("#description").value = filter[0].description
            document.querySelector("#price").value = filter[0].price
            document.querySelector("#planned_time").value = filter[0].planned_time
          }).catch(err => {
            console.log(err);
          })
        }, 10);
    
      }


      function dashedput(id) {
        var formdata = new FormData()
        formdata.append("content", document.querySelector(".inp_name_zadacput").value)
        formdata.append("feedback", document.querySelector(".inp_ops_zadacput").value)
        formdata.append("course_theme", document.querySelector(".inp_course_theme_zadacput").value)
        formdata.append("time_create", document.querySelector(".inp_bdate_zadacput").value)
        formdata.append("time_update", document.querySelector(".inp_tdate_zadacput").value)
        formdata.append("image", document.querySelector(".img_inp_zadacput").files[0])
        formdata.append("mark", document.querySelector(".inp_mark_zadacput").value)
    
        axios.put(`${url}/api/course_theme_task_student/${id}`, formdata, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }).then(res => {
          Swal.fire("success")
          window.location.reload()
        }).catch(err => {
          Swal.fire(err)
        })
        axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
            setTasks(res.data)
        }).catch(err => {
          console.log(err);
        })
      }

    return (
        <div>

            <div className="m_dobavit_kurs">
                <button onClick={() => openModal()}>Добавить задачу</button>
            </div>
            <div className="m_zadach">
                {stTasks.map(item => {
                    return (
                        <div className="m_zadach_block">
                            <div className="fors_imagesa">
                                {item.image === null ? (<img className='jony_foto' src={img_for_null} alt="" />) : (<img src="data:image/jpeg;base64,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" alt="" />)}</div>
                            <h4>{item.content}</h4>
                            <div className="zadac_df">
                                <span><FaHourglassStart style={{ color: "black", marginRight: "7px" }} /> {(item.time_create).slice(0, 10)}</span>
                                <span><FaHourglassEnd style={{ color: "black", marginRight: "7px" }} /> {(item.time_update).slice(0, 10)}</span>
                            </div>
                            <p className='ortapp'>{item.feedback}</p>
                            <p className='ortap1' style={{ marginTop: "0px" }}>Оценка:{item.mark}</p>
                            <div className="m_zadacha_icon">
                                <div className="m_zadach_ktug_icon1" onClick={() => openModal2(item.id)}>
                                    <MdDeleteOutline />
                                </div>
                                <div className="m_zadach_ktug_icon" onClick={() => zadacput(item.id)}>
                                    <FiEdit />
                                    {/* onClick={() => dashed(item.id)} */}
                                </div>
                            </div>
                        </div>
                        
                    )
                })}


            </div>


            <div className="m_zadacha_tepadan">
                {/* {kursdata.map(item => {
                    return ( */}
                <div  className="m_zadachi_dobavit">
                    <div className="m_clouse_x" onClick={() => clouseModal()}>
                        <GrFormClose /></div>
                    <div className="m_input_file_dobavit">
                        <div className="a_input_file12">
                            <FiDownload /> Добавить задание
                        </div>
                        <input type="file" className='img_inp_zadac' />
                    </div><br />
                    <div className="m_input_bilmafim">
                        <label htmlFor="">Name:</label>
                        <input type="text" name="" id="" className='inp_name_zadac' />
                        <label htmlFor="">course theme:</label>
                        <input type="text" name="" id="" className='inp_course_theme_zadac' />
                        <label htmlFor="">vremya bowlaniwi:</label>
                        <input type="date" name="" id="" className='inp_bdate_zadac' />
                        <label htmlFor="">vremya tugawi:</label>
                        <input type="date" name="" id="" className='inp_tdate_zadac' />
                        <label htmlFor="">mark:</label>
                        <input type="text" name="" id="" className='inp_mark_zadac' />
                        <label htmlFor="">Opisaniye:</label>
                        <textarea placeholder='Description' name="" id="" cols="30" rows="10" className='inp_ops_zadac'></textarea> <br />
                        <div className="a_button_for_end">
                            <button onClick={() => { postforzadac() }}>Добавить</button>
                        </div>
                    </div>
                </div>
                {/* )
                })} */}
            </div>


            <div id='zadaca_put' className="m_zadacha_tepadan">

                <div id='zadac_put_card' className="m_zadachi_dobavit">
                    <div className="m_clouse_x" onClick={() => clouseModal()}>
                        <GrFormClose />
                        </div>
                    <div className="m_input_file_dobavit">
                        <div className="a_input_file12">
                            <FiDownload /> Добавить задание
                        </div>
                        <input type="file" className='img_inp_zadacput' />
                    </div><br />
                    <div className="m_input_bilmafim">
                        <label htmlFor="">Name:</label>
                        <input type="text" name="" id="" className='inp_name_zadacput' />
                        <label htmlFor="">course theme:</label>
                        <input type="text" name="" id="" className='inp_course_theme_put' />
                        <label htmlFor="">vremya bowlaniwi:</label>
                        <input type="date" name="" id="" className='inp_bdate_zadacput' />
                        <label htmlFor="">vremya tugawi:</label>
                        <input type="date" name="" id="" className='inp_tdate_zadacput' />
                        <label htmlFor="">mark:</label>
                        <input type="text" name="" id="" className='inp_mark_zadacput' />
                        <label htmlFor="">Opisaniye:</label>
                        <textarea placeholder='Description' name="" id="" cols="30" rows="10" className='inp_ops_zadacput'></textarea> <br />
                        <div className="a_button_for_end">
                            <button onClick={() => dashedput()}>Добавить</button>
                        </div>
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
                            <button className='a_delete_no' onClick={() => clouseModal2()}>Нет</button>
                            <button onClick={() => deletetask()}
                                className="a_delete_yes">Да</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
