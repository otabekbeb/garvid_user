
// import React, { useEffect, useState } from 'react'
// import { BiEdit } from "react-icons/bi"
// import axios from "axios"
// import url from "./Edurl"
// import { BsSearch } from "react-icons/bs"
// import { MdDeleteOutline, MdPlayLesson } from "react-icons/md"
// // import close from "../img/photo_2023-08-09_02-30-22.jpg"
// import { GrClose } from "react-icons/gr"
// import deleteImg from "../img/Group 2.png"
// import "../css/Education.css"
// import url from './Host'



// export default function Edication() {
//   const [edication, setEdication] = useState([])
//   const [edicationId, setEdicationId] = useState()
//   const [page, setPage] = useState(0)
//   const [kursdata, setKursdata] = useState([]);

//   const username = document.querySelectorAll("#Educationusername")
//   const start_date = document.querySelectorAll("#Educationstart_date")
//   const end_date = document.querySelectorAll("#Educationend_date")
//   const description = document.querySelectorAll("#Educationdescription")


//   useEffect(() => {
//     axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//       setEdication(res.data)
//     })
//   }, [])

//   function postEducationModal() {
//     document.querySelector("#EducationpostModal").style = "display:flex"
//   }

//   function postEducationClose() {
//     document.querySelector("#EducationpostModal").style = "display:none"
//   }

//   function putEducationModal(id) {
//     setEdicationId(id)
//     edication.map(item => {
//       if (item.id == id) {
//         username[1].value = item.education_name
//         start_date[1].value = item.start_date
//         end_date[1].value = item.end_date
//         description[1].value = item.description
//       }
//     })


//     document.querySelector("#EducationputModal").style = "display:flex;"
//   }

//   function putEducationClose() {
//     document.querySelector("#EducationputModal").style = "display:none;"
//   }

//   function deleteEducationModal(id) {
//     setEdicationId(id)
//     document.querySelector("#EducationdeleteModal").style = "display:flex"
//   }

//   function deleteEducationClose() {
//     document.querySelector("#EducationdeleteModal").style = "display:none"
//   }

//   function postEducation() {
//     var formdata = new FormData()
//     formdata.append("education_name", username[0].value)
//     formdata.append("description", description[0].value)
//     formdata.append("start_date", start_date[0].value)
//     formdata.append("end_date", end_date[0].value)
//     formdata.append("sertificat_id", 0)

//     axios.post(`${url}/edu/education`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//       alert("Добавлена информация")
//       document.querySelector("#EducationpostModal").style = "display:none"
//       axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//         setEdication(res.data)
//       })
//     }).catch(err => {
//       alert("Данные не добавлены, введите полностью")
//     })
//   }

//   function putEducation() {
//     var formdata = new FormData()
//     formdata.append("education_name", username[1].value)
//     formdata.append("description", description[1].value)
//     formdata.append("start_date", start_date[1].value)
//     formdata.append("end_date", end_date[1].value)
//     formdata.append("sertificat_id", 0)

//     axios.put(`${url}/edu/education/${edicationId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//       alert("Информация изменилась")
//       document.querySelector("#EducationputModal").style = "display:none"
//       axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//         setEdication(res.data)
//       })
//     }).catch(err => {
//       alert("Информация не изменилась, введите полностью")
//     })
//   }

//   function deleteEducation() {
//     axios.delete(`${url}/edu/education/${edicationId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//       alert("Данные удалены")
//       document.querySelector("#EducationdeleteModal").style = "display:none"
//       axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
//         setEdication(res.data)
//       })
//     }).catch(err => {
//       alert("Данные не удалены")
//     })
//   }
//   function Page() {
//     setPage(1)
//   }
//   const searchInput = (event) => {
//     const searchRegex = new RegExp(`^${event.target.value}`, "i");
//     axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
//       const searchdata = res.data.filter((item) => {
//         return (
//           searchRegex.test(item.name)
//         );
//       })
//       setKursdata(searchdata)
//     })

//   }


//   return (
//     <div>
//       {page == 1 ? (
//         <>
//           <div className="exit_button"><button onClick={() => setPage(0)}>Назад</button></div>

//         </>
//       ) : (
//         <>
//           <div className="search_big_div">
//             <button className="user_post_button" onClick={() => postEducationModal()}>Добавить</button>
//             <BsSearch className="search" />
//             <input onChange={searchInput} placeholder="Введите здесь..." type="text" />

//           </div>
//           <div className="edication_card">
//             {edication.map(item => {
//               localStorage.setItem("educationLength",edication.length)
//               return (
//                 <div className="edication_card_">
//                   <h1>{item.education_name}</h1>
//                   <div className="edication_card_date">
//                     <p>Дата начала: {(item.start_date).slice(0, 10)}</p>
//                     <p>Дата окончания: {(item.end_date).slice(0, 10)}</p>
//                   </div>
//                   <span>{item.description}</span>
//                   <div className="edication_card_button">
//                     <button onClick={() => Page()}><MdPlayLesson /></button>
//                     <button onClick={() => putEducationModal(item.id)} ><BiEdit /></button>
//                     <button onClick={() => deleteEducationModal(item.id)}><MdDeleteOutline /></button>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </>)}




//       <div id="EducationdeleteModal" className="deleteModal">
//         <div className="deleteModal_div">
//           {/* <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteEducationClose()} /></div> */}
//           <img src={deleteImg} alt="" />
//           <p>Вы хотите удалить это образование</p>
//           <div className="deleteButton_div">
//             <button onClick={() => deleteEducationClose()}>Нет</button>
//             <button onClick={() => deleteEducation()}>Да</button>
//           </div>
//         </div>
//       </div>
//       <div id="EducationpostModal" className="Modaldiv">
//         <div  className="postUserModal_div">
//           <div className="postUserModal_div_icon"><GrClose className="icon" onClick={() => postEducationClose()} /></div>
//           <div className="postUserModal_div_label" >
//             <label htmlFor="">
//               <p>Имя</p>
//               <input id="Educationusername" placeholder="Имя пользователя" type="text" />
//             </label>
//             <label htmlFor="">
//               <p>Начальная дата</p>
//               <input id="Educationstart_date" type="date" />
//             </label>
//             <label htmlFor="">
//               <p>Конечная дата</p>
//               <input id="Educationend_date" type="date" />
//             </label>
//             <label htmlFor="">
//             <p>Описание</p>
//             <input id="Educationdescription" className="description" placeholder="Описание" type="text" />
//           </label>
//           </div>

//           <div className="postUserModal_div_button">
//             <button onClick={() => postEducation()}>Отправить</button>
//           </div>
//         </div>
//       </div>
//       <div id="EducationputModal" className="Modaldiv">
//         <div className="postUserModal_div">
//           <div className="postUserModal_div_icon"><GrClose className="icon" onClick={() => putEducationClose()} /></div>
//           <div className="postUserModal_div_label" >
//             <label htmlFor="">
//               <p>Имя</p>
//               <input id="Educationusername" type="text" />
//             </label>
//             <label htmlFor="">
//               <p>Начальная дата</p>
//               <input id="Educationstart_date" type="date" />
//             </label>
//             <label htmlFor="">
//               <p>Конечная дата</p>
//               <input id="Educationend_date" type="date" />
//             </label>
//             <label htmlFor="">
//             <p>Описание</p>
//             <input id="Educationdescription" className="descriptions" type="text" />
//           </label>
//           </div>

//           <div className="postUserModal_div_button">
//             <button onClick={() => putEducation()}>Редактировать</button>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }








import React, { useEffect, useState } from 'react'
import { BiEdit } from "react-icons/bi"
import axios from "axios"
import url from "./Host"
import { AiOutlineSearch } from "react-icons/ai"
import { MdDeleteOutline, MdPlayLesson, MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md"
// import close from "./img/close.png"
import { GrFormClose } from "react-icons/gr"
import deleteImg from "../img/Group 2.png"
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { FaUsers, FaHourglassStart, FaHourglassEnd } from "react-icons/fa"
// import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
// import "../css/Education.css"
import "../css/Education.css"
moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function Edication() {
  const [edication, setEdication] = useState([])
  const [edication1, setEdication1] = useState([])
  const [scheduleId, setScheduleId] = useState([])
  const [user, setUser] = useState([])
  const [edicationId, setEdicationId] = useState()
  const [page, setPage] = useState(0)
  const [educationId, setEducationId] = useState()
  const [schudele, setSchudele] = useState([])
  const [Day, setDay] = useState()
  const [eventsData, setEventsData] = useState([]);
  const [group_student, setGroup_Student] = useState([])
  const [student, setSdutent] = useState([])
  const [JadvalPageId, setJadvalPageId] = useState()
  const [GroupId, setGroupId] = useState()
  const [GroupSelect, setGroupSelect] = useState([])
  const [JournalId, setJournalId] = useState()
  const [mark, SetMark] = useState(0)
  const [Markcame, setMarkcame] = useState()
  const [FilterData, setFilterData] = useState()
  const [Marklesson_id, setMarklesson_id] = useState()
  const [Markstudent_id, setMarkstudent_id] = useState()
  const [MarkId, setMarkId] = useState()
  const [newdate, setNewdate] = useState(`${(new Date()).getMonth() + 1}.padStart(2,0)`)

  const [Journal_mark, setJournal_mark] = useState({ allesson: [], alstudent_mark: [{ mark: [] }] })

  // 
  const username = document.querySelectorAll("#Educationusername")
  const start_date = document.querySelectorAll("#Educationstart_date")
  const end_date = document.querySelectorAll("#Educationend_date")
  const description = document.querySelectorAll("#Educationdescription")
  const lesson_name = document.querySelectorAll("#Scheduleusername")
  const start_time = document.querySelectorAll("#Schedulestart_time")
  const end_time = document.querySelectorAll("#Scheduleend_time")
  const day = document.querySelectorAll("#Scheduleday")
  const teacher_id = document.querySelectorAll("#ScheduleTeacher_id")
  const student_id = document.querySelectorAll("#Groupusername")


  useEffect(() => {
    const a = new Date()
    var b = a.getDate()
    var c = a.getMonth() + 1
    var d = a.getFullYear()
    var day = d + "-" + c + "-" + b
    setFilterData(day)
    axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setEdication(res.data)
      setEdication1(res.data)
    })

    axios.get(`${url}/auth/teachers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      const user = res.data.filter(item => item.position == 2)
      setUser(res.data)
    })
    axios.get(`${url}/auth/student`, { headers: { Authorization: "Bearer " + localStorage.getItem(("token")) } }).then(res => {
      const StudentFilter = res.data.filter(item => item.position == 4)
      setSdutent(res.data)
    })

  }, [])

  function Page(id) {
    setPage(1)
    setEducationId(id)
    axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      var a = res.data.filter(item => item.education_id == id)
      for (let i = 0; i < a.length; i++) {
        console.log((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10));
        a[i].start = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].start_time).slice(0, 2))
        a[i].end = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].end_time).slice(0, 2))
        a[i].title = (a[i].start_time).slice(0, 5) + " - " + (a[i].end_time).slice(0, 5) + " / " + a[i].lesson_name
      }
      setEventsData(a)
    })
  }

  function postEducationModal() {
    document.querySelector("#EducationpostModal").style = "display:flex"
  }

  function postEducationClose() {
    document.querySelector("#EducationpostModal").style = "display:none"
  }

  function putEducationModal(id) {
    setEdicationId(id)
    edication.map(item => {
      if (item.id == id) {
        username[1].value = item.education_name
        start_date[1].value = item.start_date
        end_date[1].value = item.end_date
        description[1].value = item.description
      }
    })


    document.querySelector("#EducationputModal").style = "display:flex;"
  }

  function putEducationClose() {
    document.querySelector("#EducationputModal").style = "display:none;"
  }

  function deleteEducationModal(id) {
    setEdicationId(id)
    document.querySelector("#EducationdeleteModal").style = "display:flex"
  }

  function deleteEducationClose() {
    document.querySelector("#EducationdeleteModal").style = "display:none"
  }

  function postEducation() {
    var formdata = new FormData()
    formdata.append("education_name", username[0].value)
    formdata.append("description", description[0].value)
    formdata.append("start_date", start_date[0].value)
    formdata.append("end_date", end_date[0].value)
    formdata.append("sertificat_id", 0)

    axios.post(`${url}/edu/education`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Добавлена информация")
      document.querySelector("#EducationpostModal").style = "display:none"
      axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setEdication(res.data)
      })
    }).catch(err => {
      alert("Данные не добавлены, введите полностью")
    })
  }

  function putEducation() {
    var formdata = new FormData()
    formdata.append("education_name", username[1].value)
    formdata.append("description", description[1].value)
    formdata.append("start_date", start_date[1].value)
    formdata.append("end_date", end_date[1].value)
    formdata.append("sertificat_id", 0)

    axios.put(`${url}/edu/education/${edicationId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Информация изменилась")
      document.querySelector("#EducationputModal").style = "display:none"
      axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setEdication(res.data)
      })
    }).catch(err => {
      alert("Информация не изменилась, введите полностью")
    })
  }

  function deleteEducation() {
    axios.delete(`${url}/edu/education/${edicationId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Данные удалены")
      document.querySelector("#EducationdeleteModal").style = "display:none"
      axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setEdication(res.data)
      })
    }).catch(err => {
      alert("Данные не удалены")
    })
  }

  function postScheduleModal(start) {
    setDay(start)
    document.querySelector("#SchedulepostModal").style = "display:flex"
  }
  function postScheduleClose() {
    document.querySelector("#SchedulepostModal").style = "display:none"
  }

  function putScheduleModal() {
    document.querySelector("#ScheduleputModal").style = "display:flex"
    document.querySelector("#ScheduleikkiModal").style = "display:none"

  }

  function putScheduleClose() {
    document.querySelector("#ScheduleputModal").style = "display:none"
  }

  function deleteScheduleModal() {
    document.querySelector("#ScheduledeleteModal").style = "display:flex"
    document.querySelector("#ScheduleikkiModal").style = "display:none"

  }
  function deleteScheduleClose() {
    document.querySelector("#ScheduledeleteModal").style = "display:none"
  }

  function ikkiModal(event) {
    setScheduleId(event.id)
    setDay(event.day.slice(0, 10))
    eventsData.map(item => {
      if (event.id == item.id) {
        lesson_name[1].value = item.lesson_name
        start_time[1].value = item.start_time
        end_time[1].value = item.end_time
        teacher_id[1].value = item.teacher_id
        document.querySelector(".deleteModalSpan").innerHTML = item.lesson_name
      }
    })
    document.querySelector("#ScheduleikkiModal").style = "display:flex"
  }

  function ikkiClose() {
    document.querySelector("#ScheduleikkiModal").style = "display:none"
  }

  function postSchedule() {
    var formdata = new FormData()
    formdata.append("lesson_name", lesson_name[0].value)
    formdata.append("education_id", educationId)
    formdata.append("start_time", start_time[0].value)
    formdata.append("day", Day)
    formdata.append("end_time", end_time[0].value)
    formdata.append("teacher_id", teacher_id[0].value)

    axios.post(`${url}/edu/schedule`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Добавлена информация")
      document.querySelector("#SchedulepostModal").style = "display:none"
      axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        console.log(res.data, "dsd");
        var a = res.data.filter(item => item.education_id == educationId)
        for (let i = 0; i < a.length; i++) {
          a[i].start = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].start_time).slice(0, 2))
          a[i].end = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].end_time).slice(0, 2))
          a[i].title = (a[i].start_time).slice(0, 5) + " - " + (a[i].end_time).slice(0, 5) + " / " + a[i].lesson_name
        }
        setEventsData(a)
      })

    }).catch(err => {
      alert("Информация не добавлена,заполните полностью")
    })
  }

  function putSchedule() {
    var formdata = new FormData()
    formdata.append("lesson_name", lesson_name[1].value)
    formdata.append("education_id", educationId)
    formdata.append("start_time", start_time[1].value)
    formdata.append("day", Day)
    formdata.append("end_time", end_time[1].value)
    formdata.append("teacher_id", teacher_id[1].value)

    axios.put(`${url}/edu/schedule/${scheduleId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Информация изменилась")
      document.querySelector("#ScheduleputModal").style = "display:none"
      axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        var a = res.data.filter(item => item.education_id == educationId)
        for (let i = 0; i < a.length; i++) {
          a[i].start = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].start_time).slice(0, 2))
          a[i].end = new Date((a[i].day).slice(0, 4), (a[i].day).slice(5, 7), (a[i].day).slice(8, 10), (a[i].end_time).slice(0, 2))
          a[i].title = (a[i].start_time).slice(0, 5) + " - " + (a[i].end_time).slice(0, 5) + " / " + a[i].lesson_name
        }
        setEventsData(a)
      })

    }).catch(err => {
      alert("Информация не изменилась, заполните полностью")
    })
  }

  function deleteSchedule() {
    axios.delete(`${url}/edu/schedule/${scheduleId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Данные удалены")
      document.querySelector("#ScheduledeleteModal").style = "display:none"
      axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        console.log(res.data, "dsd");
        var a = res.data.filter(item => item.education_id == educationId)
        for (let i = 0; i < a.length; i++) {
          console.log(new Date(a[i].day));
          a[i].start = new Date(a[i].day)
          a[i].end = new Date(a[i].day)
          console.log(new Date(a[i].day));
          // a[i].allDay= true

          a[i].title = a[i].start_time + " - " + a[i].end_time + " / " + a[i].lesson_name
        }
        setEventsData(a)
      })
    }).catch(err => {
      alert("Данные не удалены")
    })
  }

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);

    var oy = (`${start.getMonth()}`).padStart(2, 0);
    var yil = (start.getFullYear());
    var sana = (`${start.getDate()}`).padStart(2, 0)
    var a = oy + "-" + sana + "-" + yil
    postScheduleModal(a)

  };

  function JadvalPage(id) {
    setJadvalPageId(id)
    setPage(2)

    axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setSchudele(res.data)
    })


    axios.get(`${url}/edu/group_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      const StudentFilter = res.data.filter(item => item.education_id == id)
      setGroup_Student(StudentFilter)
      var new1 = []
      for (let i = 0; i < student.length; i++) {
        var a = true
        for (let j = 0; j < StudentFilter.length; j++) {
          if (student[i].id == StudentFilter[j].student_id) {
            a = false
          }
        }
        if (a) {
          new1.push(student[i])
        }
      }
      setGroupSelect(new1);
      for (let i = 0; i < StudentFilter.length; i++) {
        for (let j = 0; j < student.length; j++) {
          if (student[j].id == StudentFilter[i].student_id) {
            StudentFilter[i].last_name = student[j].last_name
          }
        }
      }
      axios.get(`${url}/edu/schedule`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
        axios.get(`${url}/edu/attendance_lesson`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res2 => {
          var all_lesson1 = res1.data.filter(item => item.education_id == id)
          var all_lesson = all_lesson1.filter(item => (new Date(item.day)).getMonth() + 1 == newdate)
          var all_mark = res2.data

          var lesson = {
            allesson: all_lesson,
            alstudent_mark: [],
          }
          var table = []
          for (let i = 0; i < StudentFilter.length; i++) {
            table[i] = { "name": StudentFilter[i].last_name, "id": StudentFilter[i].id, "mark": [] }
            for (let j = 0; j < all_lesson.length; j++) {
              var a = true
              for (let l = 0; l < all_mark.length; l++) {
                if (all_lesson[j].id == all_mark[l].lesson_id && StudentFilter[i].id == all_mark[l].student_id) {
                  a = false
                  table[i].mark.push(all_mark[l])
                }
              }
              if (a) {
                table[i].mark.push("null")
              }

            }
          }
          lesson.alstudent_mark = table
          setJournal_mark(lesson)
          console.log(lesson, "lesson");
        })




      })
    })
  }

  function postGroupModal() {
    document.querySelector("#GrouppostModal").style = "display:flex"
  }

  function postGroupClose() {
    document.querySelector("#GrouppostModal").style = "display:none"
  }

  function putGroupModal(id) {
    const a = group_student.filter(item => item.student_id == id)
    a.map(item => {
      setGroupId(item.id)
    })
    document.querySelector("#GroupputModal").style = "display:flex"
  }
  function putGroupClose() {
    document.querySelector("#GroupputModal").style = "display:none"
  }

  function deleteGroupModal(id) {
    const a = group_student.filter(item => item.student_id == id)
    a.map(item => {
      setGroupId(item.id)
    })
    document.querySelector("#GroupdeleteModal").style = "display:flex"
  }

  function deleteGroupClose() {
    document.querySelector("#GroupdeleteModal").style = "display:none"
  }


  function postGroup() {
    var formdata = new FormData()
    formdata.append("student_id", student_id[0].value)
    formdata.append("education_id", JadvalPageId)
    axios.post(`${url}/edu/group_student`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Студент присоединился")
      JadvalPage(JadvalPageId)
      document.querySelector("#GrouppostModal").style = "display:none"
      axios.get(`${url}/edu/group_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        const StudentFilter = res.data.filter(item => item.education_id == JadvalPageId)
        setGroup_Student(StudentFilter)
      })
    }).catch(err => {
      alert("Студент не присоединился")
    })
  }
  function putGroup() {
    var formdata = new FormData()
    formdata.append("student_id", student_id[1].value)
    formdata.append("education_id", JadvalPageId)

    axios.put(`${url}/edu/group_student/${GroupId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Студент изменен")
      document.querySelector("#GroupputModal").style = "display:none"
      axios.get(`${url}/edu/group_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        const StudentFilter = res.data.filter(item => item.education_id == JadvalPageId)
        setGroup_Student(StudentFilter)
      })
    }).catch(err => {
      alert("Студент не изменился, заполните полностью")
    })
  }
  function deleteGroup() {
    axios.delete(`${url}/edu/group_student/${GroupId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Студент удален")
      JadvalPage(JadvalPageId)
      document.querySelector("#GroupdeleteModal").style = "display:none"
      axios.get(`${url}/edu/group_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        const StudentFilter = res.data.filter(item => item.education_id == JadvalPageId)
        setGroup_Student(StudentFilter)
      })
    }).catch(err => {
      alert("Студент не удален")
    })
  }

  function sendMarkAll() {
    var chackbox = document.querySelectorAll('.jadval_checkbox')
    var chackbox1 = document.querySelectorAll('.jadval_checkbox1')
    // console.log(group_student);
    for (let i = 0; i < group_student.length; i++) {
      var formdata = new FormData()
      formdata.append("lesson_id", document.querySelector("#journal_day").value)
      formdata.append("student_id", group_student[i].id)
      formdata.append("mark", chackbox1[i].value)
      formdata.append("came", chackbox[i].checked)
      axios.post(`${url}/edu/attendance_lesson/`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      }).catch(err => {
      })
    }
    JadvalPage(JadvalPageId)

  }
  const columns = [
    {
      title: 'Студент',
      dataIndex: 'student_id',
      key: 'student_id',
      render: (dataIndex) => <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <MdModeEditOutline onClick={() => putGroupModal(dataIndex)} style={{ color: '#1890ff', cursor: 'pointer' }} />
        <MdOutlineDeleteOutline onClick={() => deleteGroupModal(dataIndex)} style={{ color: 'red', cursor: 'pointer' }} />{student.map(item => { if (item.id == dataIndex) { return <h1 style={{ marginBottom: '0px' }}>{item.username}</h1> } })}</div>
    },
    {
      title: <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><select name="" style={{ width: '160px' }} id="journal_day">{Journal_mark.allesson.map(item => { return <option value={item.id}>{(item.day).slice(0, 10)}</option> })}</select>   <button onClick={() => { sendMarkAll() }} style={{ marginTop: '0px', marginBottom: '0px', paddingTop: "5px", paddingBottom: '5px' }} className='user_post_button'>Отправить оценку</button></div>,
      dataIndex: 'id',
      key: 'id',
      render: (dataIndex) => <div>
        <div className="jadval_big_div">
          <div className="jadval_div"><input className='jadval_checkbox' id='journal_checked' style={{ cursor: 'pointer' }} type="checkbox" /></div>
          <input id='journal_mark' className='jadval_checkbox1' type="text" /></div></div>
    },
  ]
  function Markpage() {
    SetMark(1)
  }

  function MarkputModal(id, mark, came, lesson_id, student_id) {
    setMarkcame(came)
    setMarklesson_id(lesson_id)
    setMarkId(id)
    console.log(lesson_id, "salom");
    setMarkstudent_id(student_id)
    document.querySelector("#MarkJournal").value = mark
    document.querySelector("#MarkputModal").style = "display:flex"
  }
  function MarkputClose() {
    document.querySelector("#MarkputModal").style = "display:none"
  }

  function putMark() {
    var formdata = new FormData()
    formdata.append("mark", document.querySelector("#MarkJournal").value)
    formdata.append("lesson_id", Marklesson_id)
    formdata.append("came", Markcame)
    formdata.append("student_id", Markstudent_id)

    axios.put(`${url}/edu/attendance_lesson/${MarkId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Оценка изменилась")
      document.querySelector("#MarkputModal").style = "display:none"
      JadvalPage(JadvalPageId)
    }).catch(err => {
      alert("Оценка не изменилась")
    })
  }

  function Search(e) {
    const Search = edication.filter(item => item.education_name.includes(e.target.value))
    if (e.target.value) {
      setEdication(Search)
    } else {
      setEdication(edication1)
    }
  }

  function FilterDay(e) {

    var inputmonth = (e.target.value).slice(-2)
    setNewdate(inputmonth)
    JadvalPage(JadvalPageId)
  }

  return (
    <div className='otash'>
      {page == 2 ? (
        <>
          <div className="exit_button"><button onClick={() => setPage(0)} style={{ marginLeft: "0px" }}>Назад</button>        <button className='user_post_button_malumot' style={{ paddingTop: '3px' }} onClick={() => { SetMark(0) }} >оценивать</button>   <button style={{ paddingTop: '3px' }} onClick={() => Markpage()} className='user_post_button_malumot'>журнал</button></div>
          {mark == 0 ? (<><div className="search_big_div"><button onClick={() => postGroupModal()} className="user_post_button">Добавить</button></div><Table dataSource={group_student} columns={columns} />


          </>) : (
            <>
              <input onChange={FilterDay} type="month" style={{ marginBottom: "5px" }} />
              <div style={{ width: '100%', overflowX: 'scroll' }}>
                <table className='all_mark_jurnal'>
                  <tr>
                    <th>No</th>
                    <th>Фамилия</th>

                    {Journal_mark.allesson.map(item => {

                      return <th>{item.day.slice(0, 10)}</th>
                    })}
                  </tr>
                  {Journal_mark.alstudent_mark.map((item1, key) => {
                    return <tr>
                      <td>{key + 1}</td>
                      <td>{item1.name}</td>
                      {item1.mark.map(item2 => {
                        return <> <td style={item2.came == true ? { backgroundColor: "green", color: '#fff' } : { backgroundColor: "red", color: '#fff' }} onClick={() => MarkputModal(item2.id, item2.mark, item2.came, item2.lesson_id, item2.student_id)}  >{item2.mark}</td></>
                      })}
                    </tr>
                  })}
                </table>
              </div>
            </>)}
        </>
      ) : (
        <>
          {page == 1 ? (
            <>
              <div className="exit_button"><button onClick={() => setPage(0)}>Назад</button></div>
              <div className="App">
                <Calendar className='calendar'
                  views={["day", "agenda", "work_week", "month"]}
                  selectable
                  localizer={localizer}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={eventsData}
                  style={{ height: "100vh" }}
                  onSelectEvent={(event) => ikkiModal(event)}
                  onSelectSlot={handleSelect}
                />
              </div>
            </>
          ) : (
            <>
              <div className="search_big_div"><button className="user_post_button" onClick={() => postEducationModal()}>Добавить</button><AiOutlineSearch className="search" /><input onChange={Search} placeholder="Введите здесь..." type="text" /></div>
              <div className="edication_card">
                {edication.map(item => {
                  return (
                    <div className="edication_card_">
                      <h1>{item.education_name}</h1>
                      <div className="edication_card_date">
                        <p>Дата начала: {(item.start_date).slice(0, 10)}</p>
                        <p>Дата окончания: {(item.end_date).slice(0, 10)}</p>
                      </div>
                      <span>{item.description}</span>
                      <div className="edication_card_button">
                        <button onClick={() => JadvalPage(item.id)}><FaUsers /></button>
                        <button onClick={() => Page(item.id)}><MdPlayLesson /></button>
                        <button onClick={() => deleteEducationModal(item.id)}><MdDeleteOutline /></button>
                        <button onClick={() => putEducationModal(item.id)} ><BiEdit /></button>
                      </div>
                    </div>
                  )
                })}
              </div>
              <ul class="cards">
                {edication.map(item => {
                  return (
                    <li>
                      <div class="card">
                        <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg" class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                            <div class="card__header-text">
                              <h2 class="card__title">{item.education_name}</h2>
                              <span class="card__status">
                                <p><FaHourglassStart />: {(item.start_date).slice(0, 10)}</p>
                                <p><FaHourglassEnd />: {(item.end_date).slice(0, 10)}</p></span>
                            </div>
                          </div>
                          <p class="card__description">{item.description}</p>
                          <div className="edication_card_buttons">
                            <button className='FaUsers' onClick={() => JadvalPage(item.id)}><FaUsers /></button>
                            <button className='MdPlayLesson' onClick={() => Page(item.id)}><MdPlayLesson /></button>
                            <button className='MdDeleteOutline' onClick={() => deleteEducationModal(item.id)}><MdDeleteOutline /></button>
                            <button className='BiEdit' onClick={() => putEducationModal(item.id)} ><BiEdit /></button>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
                <li>
                  <div class="card">
                    <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                        <div class="card__header-text">
                          <h3 class="card__title">kim Cattrall</h3>
                          <span class="card__status">3 hours ago</span>
                        </div>
                      </div>
                      <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card">
                    <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div class="card__header-text">
                          <h3 class="card__title">Jessica Parker</h3>
                          <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
                          <span class="card__status">1 hour ago</span>
                        </div>
                      </div>
                      <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card">
                    <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                      <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                        <div class="card__header-text">
                          <h3 class="card__title">kim Cattrall</h3>
                          <span class="card__status">3 hours ago</span>
                        </div>
                      </div>
                      <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                  </div>
                </li>
              </ul>
            </>)}
        </>
      )}


      <div id="EducationdeleteModal" className="deleteModal">
        <div className="deleteModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteEducationClose()} /></div>
          <img src={deleteImg} alt="" />
          <p>Вы хотите удалить это образование</p>
          <div className="deleteButton_div">
            <button onClick={() => deleteEducationClose()}>Отмена</button>
            <button onClick={() => deleteEducation()}>Подтвердить</button>
          </div>
        </div>
      </div>
      <div id="EducationpostModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => postEducationClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Имя</p>
              <input id="Educationusername" placeholder="Имя пользователя" type="text" />
            </label>
            <label htmlFor="">
              <p>Начальная дата</p>
              <input id="Educationstart_date" type="date" />
            </label>
            <label htmlFor="">
              <p>Конечная дата</p>
              <input id="Educationend_date" type="date" />
            </label>
            <label htmlFor="">
              <p>Описание</p>
              <input id="Educationdescription" placeholder="Описание" className="description" type="text" />
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => postEducation()}>Отправить</button>
          </div>
        </div>
      </div>
      <div id="EducationputModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putEducationClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Имя</p>
              <input id="Educationusername" type="text" />
            </label>
            <label htmlFor="">
              <p>Начальная дата</p>
              <input id="Educationstart_date" type="date" />
            </label>
            <label htmlFor="">
              <p>Конечная дата</p>
              <input id="Educationend_date" type="date" />
            </label>
            <label htmlFor="">
              <p>Описание</p>
              <input id="Educationdescription" className="description" type="text" />
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => putEducation()}>Редактировать</button>
          </div>
        </div>
      </div>

      <div id="ScheduledeleteModal" className="deleteModal">
        <div className="deleteModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteScheduleClose()} /></div>
          <img src={deleteImg} alt="" />
          <p>Вы хотите удалить это <span className='deleteModalSpan'>образование</span></p>
          <div className="deleteButton_div">
            <button onClick={() => deleteScheduleClose()}>Отмена</button>
            <button onClick={() => deleteSchedule()}>Подтвердить</button>
          </div>
        </div>
      </div>
      <div id="ScheduleikkiModal" className="deleteModal">
        <div className="deleteModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => ikkiClose()} /></div>
          <div className="deleteButton_div">
            <button onClick={() => putScheduleModal()}>Редактировать</button>
            <button onClick={() => deleteScheduleModal()}>Удалить</button>
          </div>
        </div>
      </div>
      <div id="SchedulepostModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => postScheduleClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Название урока</p>
              <input id="Scheduleusername" placeholder="Название урока" type="text" />
            </label>
            <label htmlFor="">
              <p>Время начала</p>
              <input id="Schedulestart_time" type="time" />
            </label>
            <label htmlFor="">
              <p>Время окончания</p>
              <input id="Scheduleend_time" type="time" />
            </label>
            <label htmlFor="">
              <p>Удостоверение преподавателя</p>
              <select name="" id="ScheduleTeacher_id">
                {user.map(item => {
                  return <option value={item.id}>{item.username}</option>
                })}
              </select>
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => postSchedule()} >Отправить</button>
          </div>
        </div>
      </div>
      <div id="ScheduleputModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putScheduleClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Название урока</p>
              <input id="Scheduleusername" placeholder="Название урока" type="text" />
            </label>
            <label htmlFor="">
              <p>Время начала</p>
              <input id="Schedulestart_time" type="time" />
            </label>
            <label htmlFor="">
              <p>Время окончания</p>
              <input id="Scheduleend_time" type="time" />
            </label>
            <label htmlFor="">
              <p>Удостоверение преподавателя</p>
              <select name="" id="ScheduleTeacher_id">
                {user.map(item => {
                  return <option value={item.id}>{item.username}</option>
                })}
              </select>
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => putSchedule()}>Редактировать</button>
          </div>
        </div>
      </div>
      <div id="MarkputModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => MarkputClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">

              <p>Mark</p>
              <input id="MarkJournal" type="text" />
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => putMark()}>Редактировать</button>
          </div>
        </div>
      </div>

      <div id="GroupdeleteModal" className="deleteModal">
        <div className="deleteModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => deleteGroupClose()} /></div>
          <img src={deleteImg} alt="" />
          {group_student.map(item => {
            if (GroupId == item.id) {
              return <p>Вы хотите удалить этого {student.map(student => { if (student.id == item.student_id) { return <>{student.username}</> } })}</p>
            }
          })}
          <div className="deleteButton_div">
            <button onClick={() => deleteGroupClose()}>Отмена</button>
            <button onClick={() => deleteGroup()}>Подтвердить</button>
          </div>
        </div>
      </div>
      <div id="GrouppostModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => postGroupClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Имя</p>
              <select name="" id="Groupusername">
                {GroupSelect.map(item => {
                  return <option value={item.id}>{item.username}</option>
                })}
              </select>
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => postGroup()}>Отправить</button>
          </div>
        </div>
      </div>
      <div id="GroupputModal" className="Modaldiv">
        <div style={{ width: '340px' }} className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrFormClose className="icon" onClick={() => putGroupClose()} /></div>
          <div className="postUserModal_div_label" >
            <label htmlFor="">
              <p>Имя</p>
              <select name="" id="Groupusername">
                {GroupSelect.map(item => {
                  return <option value={item.id}>{item.username}</option>
                })}
              </select>
            </label>
          </div>
          <div className="postUserModal_div_button">
            <button onClick={() => putGroup()}>Редактировать</button>
          </div>
        </div>
      </div>


    </div>
  )
}