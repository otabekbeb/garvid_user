// import React from 'react'
// import "../css/Test_create.css"
// import { BiDownload } from "react-icons/bi"
// import { GrFormClose } from "react-icons/gr"


// export default function Test_create() {
//     return (
//         <div>
//             <div className="test_create">
//                 <div className="test_create_header">
//                     <div className="test_create_card">
//                         <div className="test_close_btn"><GrFormClose /></div>
//                         <div className="test_db">
//                             <div className="test_create_inside">
//                                 <label htmlFor="">Question:</label>
//                                 <input type="text" name="" id="" />
//                             </div>
//                         </div>

//                         <div className="test_create_option">
//                             <label htmlFor="">A:</label>
//                             <input type="text" name="" id="" />
//                         </div>
//                         <div className="test_create_option">
//                             <label htmlFor="">B:</label>
//                             <input type="text" name="" id="" />
//                         </div>
//                         <div className="test_create_option">
//                             <label htmlFor="">C:</label>
//                             <input type="text" name="" id="" />
//                         </div>
//                         <div className="test_create_option">
//                             <label htmlFor="">D:</label>
//                             <input type="text" name="" id="" />
//                         </div>
//                         <div className="test_df">
//                             <div className="test_create_inside">
//                                 <label htmlFor="">Image:</label>
//                                 <input type="file" name="" id="" className='test_img' />
//                                 <div className="test_img_btn"><BiDownload className='download_icon' /> Download image</div>
//                             </div>
//                             <button className='test_send_btn'>Send</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }





import axios from 'axios'
import "../css/Test_create.css"
import React, { useEffect, useState } from 'react'
import url from './Test_url.js'
import { MdDeleteOutline, MdPlayLesson } from "react-icons/md"
import { GrFormClose } from "react-icons/gr"
import deleteImg from "../img/Inbox cleanup-rafiki.png"
import { BsSearch } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { BiEdit } from "react-icons/bi"
import { FiDownload } from "react-icons/fi"
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Upload,
    message,
    Progress,
    Button,
    Avatar,
    Typography,
} from "antd";
import Noimg from "../img/Images-rafiki (1).png"
import testimg from "../img/Image folder-rafiki.png"


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function Test() {
    const [test, setTest] = useState([])
    const [page, setPage] = useState(0)
    const [teacher, setTeacher] = useState([])
    const [teacherr, setTeacherr] = useState([])
    const [education, setEducation] = useState([])
    const [TestId, setTestId] = useState([])
    const [pageId, setPageId] = useState()
    const [attendance_lesson, setAttendance_lesson] = useState([])
    const [quations, setQuations] = useState([])
    const [attendance_lessonId, setAttendance_lessonId] = useState()
    const [attendance_lessonIdP, setAttendance_lessonIdP] = useState()
    const [CameButton, setCameButton] = useState()
    const [MarkId, setMarkId] = useState([])
    const [quationId, setQuationId] = useState()
    const [search, setSearch] = useState('')

    const education_id = document.querySelectorAll("#Testeducation_id")
    const start_time = document.querySelectorAll("#Teststart_time")
    const day = document.querySelectorAll("#Testday")
    const deadline = document.querySelectorAll("#Testdeadline")
    const end_time = document.querySelectorAll("#Testend_time")
    const level_start = document.querySelectorAll("#Testlevel_start")
    const level_end = document.querySelectorAll("#Testlevel_end")
    const teacher_id = document.querySelectorAll("#Testteacher_id")
    const group_id = document.querySelectorAll("#Attened_testgroup_id")
    const mark = document.querySelectorAll("#Attened_testmark")
    const came = document.querySelectorAll("#Attened_testcame")
    const question = document.querySelectorAll("#questions")
    const variant1 = document.querySelectorAll("#variant1")
    const variant2 = document.querySelectorAll("#variant2")
    const variant3 = document.querySelectorAll("#variant3")
    const variant4 = document.querySelectorAll("#variant4")
    const questionsimage = document.querySelectorAll("#questionsimage")

    useEffect(() => {
        axios.get(`${url}/edu/test`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setTest(res.data)
        })
        axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setEducation(res.data)
        })
        axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setTeacher(res.data)
        })
        axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            const Teacherr = res.data.filter(item => item.position == 2)
            setTeacherr(Teacherr)
        })



    }, [])


    function Page(id) {
        setPageId(id)
        setPage(1)
        axios.get(`${url}/edu/attendance_test/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            const Attened_testmark = res.data.filter(item => item.test_id == id)
            setAttendance_lesson(Attened_testmark)
        })
    }

    function postTestModal() {
        document.querySelector("#TestpostModal").style = "display:flex"
    }

    function postTestClose() {
        document.querySelector("#TestpostModal").style = "display:none"
    }

    function postTest() {
        var formdata = new FormData()
        formdata.append("education_id", education_id[0].value)
        formdata.append("start_time", start_time[0].value)
        formdata.append("day", day[0].value)
        formdata.append("deadline", deadline[0].value)
        formdata.append("end_time", end_time[0].value)
        formdata.append("level_start", level_start[0].value)
        formdata.append("level_end", level_end[0].value)
        formdata.append("teacher_id", teacher_id[0].value)

        axios.post(`${url}/edu/test`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация отправлена")
            document.querySelector("#TestpostModal").style = "display:none"
            axios.get(`${url}/edu/test`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setTest(res.data)
            })
        }).catch(err => {
            alert("Информация не отправлена,заполните полностью")
        })
    }

    function putTestModal() {
        document.querySelector("#TestputModal").style = "display:flex"
    }

    function putTestModal(id) {
        setTestId(id)
        test.map(item => {
            if (item.id == id) {
                education_id[1].value = item.education_id
                start_time[1].value = item.start_time
                day[1].value = item.day
                deadline[1].value = item.deadline
                end_time[1].value = item.end_time
                level_start[1].value = item.level_start
                level_end[1].value = item.level_end
                teacher_id[1].value = item.teacher_id
            }
        })
        document.querySelector("#TestputModal").style = "display:flex"
    }

    function putTestClose() {
        document.querySelector("#TestputModal").style = "display:none"
    }

    function putTest() {
        var formdata = new FormData()
        formdata.append("education_id", education_id[1].value)
        formdata.append("start_time", start_time[1].value)
        formdata.append("day", day[1].value)
        formdata.append("deadline", deadline[1].value)
        formdata.append("end_time", end_time[1].value)
        formdata.append("level_start", level_start[1].value)
        formdata.append("level_end", level_end[1].value)
        formdata.append("teacher_id", teacher_id[1].value)

        axios.put(`${url}/edu/test/${TestId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация изменена")
            document.querySelector("#TestputModal").style = "display:none"
            axios.get(`${url}/edu/test`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setTest(res.data)
            })
        }).catch(err => {
            alert("Информация не изменена, заполните полностью")
        })
    }

    function deleteTestModal(id) {
        setTestId(id)
        document.querySelector("#TestdeleteModal").style = "display:flex"
    }

    function deleteTestClose() {
        document.querySelector("#TestdeleteModal").style = "display:none"
    }

    function deleteTest() {
        axios.delete(`${url}/edu/test/${TestId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Данные удалены")
            document.querySelector("#TestdeleteModal").style = "display:none"
            axios.get(`${url}/edu/test`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setTest(res.data)
            })

        }).catch(err => {
            alert("Данные не удалены")
        })
    }

    const columns = [
        {
            title: 'Идентификатор теста',
            dataIndex: 'test_id',
            key: 'test_id',
        },
        {
            title: 'Марк',
            dataIndex: 'mark',
            key: 'mark',
        },
        {
            title: '',
            dataIndex: 'id',
            key: 'id',
            render: (dataIndex) => <div><button onClick={() => putAttened_testModal(dataIndex)} className="user_post_button">Edit</button>      <button onClick={() => deleteAttened_testModal(dataIndex)} className="user_post_button">Удалить</button>     </div>,
        },
    ]

    const quation = [
        {
            title: 'Изображение',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="" />
        },
        {
            title: 'Вопрос',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: '',
            dataIndex: 'id',
            key: 'id',
            render: (dataIndex) => <div><button className="user_post_button">Edit</button>      <button className="user_post_button">Удалить</button>     </div>,
        },
    ]

    function postAttened_testModal() {
        document.querySelector("#Attened_testpostModal").style = "display:flex"
    }

    function postAttened_testClose() {
        document.querySelector("#Attened_testpostModal").style = "display:none"
    }

    function putAttened_testModal(id) {
        setAttendance_lessonId(id)
        attendance_lesson.map(item => {
            if (item.id == id) {
                group_id[1].value = item.group_id
                mark[1].value = item.mark
                came[1].value = item.came
            }
        })
        document.querySelector("#Attened_testputModal").style = "display:flex"
    }

    function putAttened_testClose() {
        document.querySelector("#Attened_testputModal").style = "display:none"
    }

    function deleteAttened_testModal(id) {
        setAttendance_lessonId(id)
        document.querySelector("#Attened_testdeleteModal").style = "display:flex"
    }

    function deleteAttened_testClose() {
        document.querySelector("#Attened_testdeleteModal").style = "display:none"
    }

    function PageAtest(id) {
        setAttendance_lessonIdP(id)
        axios.get(`${url}/edu/quations`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            const Quations = res.data.filter(item => item.test_id == id)
            setQuations(Quations)
        })
        setPage(3)
    }

    function Came(came) {
        setCameButton(came)
    }

    function postAttened_test() {
        var formdata = new FormData()
        formdata.append("test_id", attendance_lessonIdP)
        formdata.append("group_id", group_id[0].value)
        formdata.append("mark", mark[0].value)
        formdata.append("came", CameButton)


        axios.post(`${url}/edu/attendance_test`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация отправлена")
            document.querySelector("#Attened_testpostModal").style = "display:none"
            axios.get(`${url}/edu/attendance_test/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setAttendance_lesson(res.data)
            })

        }).catch(err => {
            alert("Информация не отправлена")
        })
    }

    function putAttened_test() {
        var formdata = new FormData()
        formdata.append("test_id", attendance_lessonIdP)
        formdata.append("group_id", group_id[1].value)
        formdata.append("mark", mark[1].value)
        formdata.append("came", CameButton)


        axios.put(`${url}/edu/attendance_test/${attendance_lessonId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация изменилась")
            document.querySelector("#Attened_testputModal").style = "display:none"
            axios.get(`${url}/edu/attendance_test/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setAttendance_lesson(res.data)
            })

        }).catch(err => {
            alert("Информация не изменилась, заполните полностью")
        })
    }

    function deleteAttened_test() {
        axios.delete(`${url}/edu/attendance_test/${attendance_lessonId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Данные удалены")
            document.querySelector("#Attened_testdeleteModal").style = "display:none"
            axios.get(`${url}/edu/attendance_test/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                setAttendance_lesson(res.data)
            })

        }).catch(err => {
            alert("Данные не удалены")
        })
    }

    function postQuestionsModal() {
        document.querySelector("#QuestionspostModal").style = "display:flex"
    }

    function postQuestionsClose() {
        document.querySelector("#QuestionspostModal").style = "display:none"
    }

    function putQuestionsModal(id) {
        setQuationId(id)
        quations.map(item => {
            if (item.id == id) {
                question[1].value = item.question
                variant1[1].value = item.variant1
                variant2[1].value = item.variant2
                variant3[1].value = item.variant3
                variant4[1].value = item.variant4
                setCameButton(item.answer)
            }
        })

        document.querySelector("#QuestionsputModal").style = "display:flex"
    }

    function putQuestionsClose() {
        document.querySelector("#QuestionsputModal").style = "display:none"
    }

    function deleteQuestionsOpen(id) {
        setQuationId(id)
        document.querySelector("#QuestionsdeleteModal").style = "display:flex"
    }

    function deleteQuestionsClose() {
        document.querySelector("#QuestionsdeleteModal").style = "display:none"
    }

    function postQuestions() {
        var formdata = new FormData()
        formdata.append("question", question[0].value)
        formdata.append("variant1", variant1[0].value)
        formdata.append("variant2", variant2[0].value)
        formdata.append("variant3", variant3[0].value)
        formdata.append("variant4", variant4[0].value)
        formdata.append("answer", CameButton)
        formdata.append("image", questionsimage[0].files[0])
        formdata.append("test_id", attendance_lessonIdP)

        axios.post(`${url}/edu/quations`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация отправлена")
            document.querySelector("#QuestionspostModal").style = "display:none"
            axios.get(`${url}/edu/quations`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                const Quations = res.data.filter(item => item.test_id == attendance_lessonIdP)
                setQuations(Quations)
            })

        }).catch(err => {
            alert("Информация не отправлена, пожалуйста, заполните полностью")
        })
    }

    function putQuestions() {
        var formdata = new FormData()
        formdata.append("question", question[1].value)
        formdata.append("variant1", variant1[1].value)
        formdata.append("variant2", variant2[1].value)
        formdata.append("variant3", variant3[1].value)
        formdata.append("variant4", variant4[1].value)
        formdata.append("answer", CameButton)
        formdata.append("image", questionsimage[1].files[0])
        formdata.append("test_id", attendance_lessonIdP)

        axios.put(`${url}/edu/quations/${quationId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация изменена")
            document.querySelector("#QuestionsputModal").style = "display:none"
            axios.get(`${url}/edu/quations`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                const Quations = res.data.filter(item => item.test_id == attendance_lessonIdP)
                setQuations(Quations)
            })

        }).catch(err => {
            alert("Информация не изменена, пожалуйста, заполните полностью")
        })
    }
    function deleteQuestions() {
        axios.delete(`${url}/edu/quations/${quationId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            alert("Информация удалена")
            document.querySelector("#QuestionsdeleteModal").style = "display:none"
            axios.get(`${url}/edu/quations`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                const Quations = res.data.filter(item => item.test_id == attendance_lessonIdP)
                setQuations(Quations)
            })
        }).catch(err => {
            alert("Информация не может быть удалена, извините")
        })
    }

    function MarkOpen(id) {
        setMarkId(id)
        document.querySelector("#markModal").style = "display:flex"
    }
    function MarkClose() {
        document.querySelector("#markModal").style = "display:none"
    }

    return (
        <div className='test_craete_svipe'>
            {page == 3 ? (
                <div>
                    <div className="close_btn_test">
                        <div className="exit_button"><button onClick={() => setPage(0)}>Close</button></div>
                    </div>
                    {/* <div className="search_big_div"><button  className="user_post_button" onClick={()=>postAttened_testModal()}>Добавить</button><AiOutlineSearch className="search"/><input placeholder="Введите здесь..." type="text" /></div> */}
                    {/* <Table style={{marginBottom:'100px'}} dataSource={attendance_lesson} columns={columns} /> */}
                    <div className="close_btn_test">
                        <div className="search_big_div">
                            <button onClick={() => postQuestionsModal()} className="user_post_button">Add</button>
                            <BsSearch className="search" />
                            <input onChange={(e) => setSearch(e.target.value)} placeholder="Enter here..." type="text" />
                        </div>
                    </div>
                    {/* <Table dataSource={quations} columns={quation} /> */}
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {quations.map((item, key) => {
                            return (<SwiperSlide>


                                <div className="questions_page_big_div">
                                    <h3 className='questions_h1_length'><h3>{key + 1}.Quations</h3>
                                        <div className='user_post_btns'>
                                            <button onClick={() => putQuestionsModal(item.id)} className='user_post_button'>Edit</button>
                                            <button style={{ marginLeft: '10px' }} onClick={() => deleteQuestionsOpen(item.id)} className='user_post_button'>Delete</button>
                                        </div></h3>
                                    <div className='questions_page_small_div'>
                                        <h3>{item.question}</h3>
                                        <div className="questions_page_small_div_img"><img src={"https://markazback2.onrender.com/" + item.image} alt="" /></div>
                                        <p><h3 className='questions_page_small_div_p'>A</h3>  : {item.variant1}</p>
                                        <p><h3 className='questions_page_small_div_p'>B</h3>  : {item.variant2}</p>
                                        <p><h3 className='questions_page_small_div_p'>C</h3>  : {item.variant3}</p>
                                        <p><h3 className='questions_page_small_div_p'>D</h3>  : {item.variant4}</p>
                                        <h3>Test answer</h3>
                                        <p>{item.answer == 1 ? (<div><h3 className='questions_page_small_div_p'>A</h3>  : {item.variant1}</div>) : (item.answer == 2 ? (<div><h3 className='questions_page_small_div_p'>B</h3>  : {item.variant2}</div>) : (item.answer == 3 ? (<div><h3 className='questions_page_small_div_p'>C</h3>  : {item.variant3}</div>) : (item.answer == 4 ? (<div><h3 className='questions_page_small_div_p'>D</h3>  : {item.variant4}</div>) : (""))))}</p>
                                    </div>
                                </div>


                            </SwiperSlide>)
                        })}
                    </Swiper>
                    <div className="questions_page_big">


                    </div>
                </div>) : (
                <div>
                    {page == 1 ? (
                        <div>
                            <div className="close_btn_test">
                                <div className="exit_button"><button onClick={() => setPage(0)}>Назад</button></div>
                            </div>
                            <div className="teacher_page_big">
                                {attendance_lesson.map(item => {
                                    return (
                                        <div>
                                            {teacher.map(user => {
                                                if (item.group_id == user.id) {
                                                    return (
                                                        <div className="teacher_page_big_card">
                                                            <div className="teacher_page_big_card_img">{user.image == null ? (<img src={Noimg} alt="" />) : (<img src={`${url}/` + user.image} alt="No img" />)}</div>
                                                            <h3>{user.username}</h3>
                                                            <button onClick={() => MarkOpen(user.id)}>Оценка</button>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="bigdiv_search">
                                <div className="search_big_div">
                                    <button className="user_post_button" onClick={() => postTestModal()}>Add</button>
                                    <BsSearch className="search" />
                                    <input onChange={(e) => setSearch(e.target.value)} placeholder="Enter here..." type="text" />
                                </div>
                            </div>
                            <div className="edication_card">
                                {test.filter((item) => {
                                    return search.toLocaleLowerCase() === ''
                                        ? item
                                        : item.day.toLocaleLowerCase().includes(search);
                                }).map((item) => {
                                    localStorage.setItem("testLength", test.length)
                                    return (
                                        <div className="edication_card_">
                                            <h3>Deadline:  {item.deadline}</h3>
                                            <h3 style={{ fontSize: '16px', opacity: '0.6' }}>Day:  {(item.day).slice(0, 10)}</h3>
                                            <div className="edication_card_date">
                                                <p>Start time: {item.start_time}</p>
                                                <p>End time: {item.end_time}</p>
                                            </div>
                                            <div className="edication_card_date">
                                                <p>First level: {item.level_start ? ((item.level_start).slice(0, 10)) : ("Time")}</p>
                                                <p>Level end: {item.level_end ? ((item.level_end).slice(0, 10)) : ("Time")}</p>
                                            </div>
                                            <span>{item.description}</span>
                                            <div className="edication_card_button">
                                                <button onClick={() => Page(item.id)}><FaUsers /></button>
                                                <button onClick={() => PageAtest(item.id)}><MdPlayLesson /></button>
                                                <button onClick={() => deleteTestModal(item.id)}><MdDeleteOutline /></button>
                                                <button onClick={() => putTestModal(item.id)}><BiEdit /></button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>)}
                </div>)}



            <div id="TestdeleteModal" className="deleteModal">
                <div className="deleteModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="iconka" onClick={() => deleteTestClose()} /></div>
                    <img src={deleteImg} alt="item" />
                    <p>Do you want to remove this entity?</p>
                    <div className="deleteButton_div">
                        <button onClick={() => deleteTestClose()}>Cancel</button>
                        <button onClick={() => deleteTest()}>Confirm</button>
                    </div>
                </div>
            </div>
            <div id="TestpostModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="iconka" onClick={() => postTestClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Education</p>
                            <select name="" id="Testeducation_id">
                                {education.map(item => {
                                    return <option value={item.id}>{item.education_name}</option>
                                })}
                            </select>
                        </label>
                        <label htmlFor="">
                            <p>Start time</p>
                            <input id="Teststart_time" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Deadline</p>
                            <input id="Testdeadline" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Day</p>
                            <input id="Testday" type="date" />
                        </label>
                        <label htmlFor="">
                            <p>End time</p>
                            <input id="Testend_time" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Final date</p>
                            <input id="Testlevel_start" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Level end</p>
                            <input id="Testlevel_end" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Teacher</p>
                            <select name="" id="Testteacher_id">
                                {teacherr.map(item => {
                                    return <option value={item.id}>{item.username}</option>
                                })}

                            </select>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => postTest()}>Send</button>
                    </div>
                </div>
            </div>
            <div id="TestputModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putTestClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Education</p>
                            <select name="" id="Testeducation_id">
                                {education.map(item => {
                                    return <option value={item.id}>{item.education_name}</option>
                                })}
                            </select>
                        </label>
                        <label htmlFor="">
                            <p>Start time</p>
                            <input id="Teststart_time" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Deadline</p>
                            <input id="Testdeadline" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Day</p>
                            <input id="Testday" type="date" />
                        </label>
                        <label htmlFor="">
                            <p>End time</p>
                            <input id="Testend_time" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Final date</p>
                            <input id="Testlevel_start" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Level end</p>
                            <input id="Testlevel_end" type="time" />
                        </label>
                        <label htmlFor="">
                            <p>Teacher</p>
                            <select name="" id="Testteacher_id">
                                {teacherr.map(item => {
                                    return <option value={item.id}>{item.username}</option>
                                })}
                            </select>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => putTest()}>Edit</button>
                    </div>
                </div>
            </div>

            <div id="Attened_testdeleteModal" className="deleteModal">
                <div className="deleteModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteAttened_testClose()} /></div>
                    <img src={deleteImg} alt="" />
                    <p>Do you want to delete this Questions</p>
                    <div className="deleteButton_div">
                        <button onClick={() => deleteAttened_testClose()}>Cancel</button>
                        <button onClick={() => deleteAttened_test()}>Confirm</button>
                    </div>
                </div>
            </div>
            <div id="Attened_testpostModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => postAttened_testClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Group ID</p>
                            <input id="Attened_testgroup_id" type="text" />
                        </label>
                        <label htmlFor="">
                            <p>Mark</p>
                            <input id="Attened_testmark" type="text" />
                        </label>
                        <label style={{ width: '100%' }} htmlFor="">
                            <p>Came</p>
                            <div className="Came_button_div">
                                <button style={CameButton == true ? { backgroundColor: '#1890ff', color: '#fff' } : {}} id='Attened_testcame' onClick={() => Came(true)}>Пришел</button>    <button id='Attened_testcame' style={CameButton == false ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(false)}>Не пришел</button>
                            </div>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => postAttened_test()}>Send</button>
                    </div>
                </div>
            </div>
            <div id="Attened_testputModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putAttened_testClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Group ID</p>
                            <input id="Attened_testgroup_id" type="text" />
                        </label>
                        <label htmlFor="">
                            <p>Mark</p>
                            <input id="Attened_testmark" type="text" />
                        </label>
                        <label style={{ width: '100%' }} htmlFor="">
                            <p>Came</p>
                            <div className="Came_button_div">
                                <button style={CameButton == true ? { backgroundColor: '#1890ff', color: '#fff' } : {}} id='Attened_testcame' onClick={() => Came(true)}>Пришел</button>    <button id='Attened_testcame' style={CameButton == false ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(false)}>Не пришел</button>
                            </div>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => putAttened_test()}>Edit</button>
                    </div>
                </div>
            </div>

            <div id="QuestionsdeleteModal" className="deleteModal">
                <div className="deleteModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteQuestionsClose()} /></div>
                    <img src={deleteImg} alt="" />
                    <p>Do you want to delete this Questions</p>
                    <div className="deleteButton_div">
                        <button onClick={() => deleteQuestionsClose()}>Cancel</button>
                        <button onClick={() => deleteQuestions()}>Confirm</button>
                    </div>
                </div>
            </div>
            <div id="QuestionspostModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => postQuestionsClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Questoin</p>
                            <input id="questions" type="text" />
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 1</p>
                            <input style={{ paddingLeft: '25px' }} id="variant1" type="text" />
                            <p className='variant1ABCD'>A</p>
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 2</p>
                            <input style={{ paddingLeft: '25px' }} id="variant2" type="text" />
                            <p className='variant1ABCD'>B</p>
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 3</p>
                            <input style={{ paddingLeft: '25px' }} id="variant3" type="text" />
                            <p className='variant1ABCD'>C</p>
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 4</p>
                            <input style={{ paddingLeft: '25px' }} id="variant4" type="text" />
                            <p className='variant1ABCD'>D</p>
                        </label>
                        <label htmlFor="">
                            <p>Image</p>
                            <input id="questionsimage" type="file" />

                        </label>
                        <label style={{ width: '100%' }} htmlFor="">
                            <p>Reply</p>
                            <div className="Came_button_div">
                                <button style={CameButton == 1 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} id='Attened_testcame' onClick={() => Came(1)}>Вариант 1</button>    <button id='Attened_testcame' style={CameButton == 2 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(2)}>Вариант 2</button> <button id='Attened_testcame' style={CameButton == 3 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(3)}>Вариант 3</button> <button id='Attened_testcame' style={CameButton == 4 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(4)}>Вариант 4</button>
                            </div>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => postQuestions()}>Send</button>
                    </div>
                </div>
            </div>
            <div id="QuestionsputModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putQuestionsClose()} /></div>
                    <div className="postUserModal_div_label" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <label htmlFor="">
                            <p>Question</p>
                            <input id="questions" type="text" />
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 1</p>
                            <input style={{ paddingLeft: '25px' }} id="variant1" type="text" />
                            <p className='variant1ABCD'>A</p>
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 2</p>
                            <input style={{ paddingLeft: '25px' }} id="variant2" type="text" />
                            <p className='variant1ABCD'>B</p>
                        </label>

                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 3</p>
                            <input style={{ paddingLeft: '25px' }} id="variant3" type="text" />
                            <p className='variant1ABCD'>C</p>
                        </label>
                        <label style={{ position: 'relative' }} htmlFor="">
                            <p>Вариант 4</p>
                            <input style={{ paddingLeft: '25px' }} id="variant4" type="text" />
                            <p className='variant1ABCD'>D</p>
                        </label>
                        <label htmlFor="">
                            <p>Image</p>
                            <input id="questionsimage" type="file" className='questionsimage' />
                            <div className='questionimg'><FiDownload />Select image</div>
                        </label>
                        <label style={{ width: '100%' }} htmlFor="">
                            <p>Reply</p>
                            <div className="Came_button_div">
                                <button style={CameButton == 1 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} id='Attened_testcame' onClick={() => Came(1)}>Вариант 1</button>    <button id='Attened_testcame' style={CameButton == 2 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(2)}>Вариант 2</button> <button id='Attened_testcame' style={CameButton == 3 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(3)}>Вариант 3</button> <button id='Attened_testcame' style={CameButton == 4 ? { backgroundColor: '#1890ff', color: '#fff' } : {}} onClick={() => Came(4)}>Вариант 4</button>
                            </div>
                        </label>
                    </div>
                    <div className="postUserModal_div_button">
                        <button onClick={() => putQuestions()}>Edit</button>
                    </div>
                </div>
            </div>
            <div id="markModal" className="Modaldiv">
                <div className="postUserModal_div">
                    <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => MarkClose()} /></div>
                    {attendance_lesson.map(item => {
                        return (
                            <div>
                                {teacher.map(user => {
                                    if (item.group_id == user.id && user.id == MarkId) {
                                        return (
                                            <div className="test_big_div">
                                                <img src={testimg} alt="" />
                                                <h3>{user.username}</h3>
                                                <h3>Grade : {item.mark}</h3>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}

                </div>
            </div>


        </div>
    )
}










