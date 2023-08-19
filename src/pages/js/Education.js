
import React, { useEffect, useState } from 'react'
import { BiEdit } from "react-icons/bi"
import axios from "axios"
import URL from "./Edurl"
import { BsSearch } from "react-icons/bs"
import { MdDeleteOutline, MdPlayLesson } from "react-icons/md"
// import close from "../img/photo_2023-08-09_02-30-22.jpg"
import { GrClose } from "react-icons/gr"
import deleteImg from "../img/Group 2.png"
import "../css/Education.css"
import url from './Host'



export default function Edication() {
  const [edication, setEdication] = useState([])
  const [edicationId, setEdicationId] = useState()
  const [page, setPage] = useState(0)
  const [kursdata, setKursdata] = useState([]);

  const username = document.querySelectorAll("#Educationusername")
  const start_date = document.querySelectorAll("#Educationstart_date")
  const end_date = document.querySelectorAll("#Educationend_date")
  const description = document.querySelectorAll("#Educationdescription")


  useEffect(() => {
    axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setEdication(res.data)
    })
  }, [])

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

    axios.post(`${URL}/edu/education`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Добавлена информация")
      document.querySelector("#EducationpostModal").style = "display:none"
      axios.get(`${URL}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
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

    axios.put(`${URL}/edu/education/${edicationId}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Информация изменилась")
      document.querySelector("#EducationputModal").style = "display:none"
      axios.get(`${URL}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setEdication(res.data)
      })
    }).catch(err => {
      alert("Информация не изменилась, введите полностью")
    })
  }

  function deleteEducation() {
    axios.delete(`${URL}/edu/education/${edicationId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Данные удалены")
      document.querySelector("#EducationdeleteModal").style = "display:none"
      axios.get(`${URL}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
        setEdication(res.data)
      })
    }).catch(err => {
      alert("Данные не удалены")
    })
  }
  function Page() {
    setPage(1)
  }
  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      const searchdata = res.data.filter((item) => {
        return (
          searchRegex.test(item.name)
        );
      })
      setKursdata(searchdata)
    })

  }
  

  return (
    <div>
      {page == 1 ? (
        <>
          <div className="exit_button"><button onClick={() => setPage(0)}>Назад</button></div>

        </>
      ) : (
        <>
          <div className="search_big_div">
            <button className="user_post_button" onClick={() => postEducationModal()}>Добавить</button>
            <BsSearch className="search" />
            <input onChange={searchInput} placeholder="Введите здесь..." type="text" />

          </div>
          <div className="edication_card">
            {edication.map(item => {
              localStorage.setItem("educationLength",edication.length)
              return (
                <div className="edication_card_">
                  <h1>{item.education_name}</h1>
                  <div className="edication_card_date">
                    <p>Дата начала: {(item.start_date).slice(0, 10)}</p>
                    <p>Дата окончания: {(item.end_date).slice(0, 10)}</p>
                  </div>
                  <span>{item.description}</span>
                  <div className="edication_card_button">
                    <button onClick={() => Page()}><MdPlayLesson /></button>
                    <button onClick={() => putEducationModal(item.id)} ><BiEdit /></button>
                    <button onClick={() => deleteEducationModal(item.id)}><MdDeleteOutline /></button>
                  </div>
                </div>
              )
            })}
          </div>
        </>)}




      <div id="EducationdeleteModal" className="deleteModal">
        <div className="deleteModal_div">
          {/* <div className="postUserModal_div_icon"><img src={close} className="icon" onClick={() => deleteEducationClose()} /></div> */}
          <img src={deleteImg} alt="" />
          <p>Вы хотите удалить это образование</p>
          <div className="deleteButton_div">
            <button onClick={() => deleteEducationClose()}>Нет</button>
            <button onClick={() => deleteEducation()}>Да</button>
          </div>
        </div>
      </div>
      <div id="EducationpostModal" className="Modaldiv">
        <div  className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrClose className="icon" onClick={() => postEducationClose()} /></div>
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
            <input id="Educationdescription" className="description" placeholder="Описание" type="text" />
          </label>
          </div>
          
          <div className="postUserModal_div_button">
            <button onClick={() => postEducation()}>Отправить</button>
          </div>
        </div>
      </div>
      <div id="EducationputModal" className="Modaldiv">
        <div className="postUserModal_div">
          <div className="postUserModal_div_icon"><GrClose className="icon" onClick={() => putEducationClose()} /></div>
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


    </div>
  )
}