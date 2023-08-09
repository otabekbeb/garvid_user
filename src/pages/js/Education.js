import React, { useEffect, useState } from 'react'
import { BiEdit } from "react-icons/bi"
import axios from "axios"
import URL from "./Edurl"
import "../css/Education.css"
import { BsSearch } from "react-icons/bs"
import { MdDeleteOutline } from "react-icons/md"

export default function Edication() {
  const [edication, setEdication] = useState([])


  useEffect(() => {
    axios.get(`${URL}/edu/education`, { headers: { Authorization: "Bearer " + sessionStorage.getItem("token") } }).then(res => {
      setEdication(res.data)
    })
  }, [])


  return (
    <div>
      <div className="search_big_div">
        <button className="user_post_button">Добавить</button>
        <BsSearch className="search" /><input placeholder="Введите здесь..." type="text" />
      </div>
      <div className="edication_card">
        {edication.map(item => {
          return (
            <div className="edication_card_">
              <h3>{item.education_name}</h3>
              <div className="edication_card_date">
                <p>Дата начала: {(item.start_date).slice(0,10)}</p>
                <p>Дата окончания: {(item.end_date).slice(0,10)}</p>
              </div>
              <span>{item.description}</span>
              <div className="edication_card_button">
                <button><BiEdit /></button>
                <button><MdDeleteOutline /></button>
              </div>
            </div>
          )
        })}


      </div>
    </div>
  )
}
