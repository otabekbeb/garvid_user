import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { GrFormClose } from 'react-icons/gr';
import Swal from "sweetalert2"; 
import "../css/Spiska.css";
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import axios from "axios";
import url from "./Host";
import Edit from './Edit';
import Delete from './Delete';
import Groupimg from '../img/Group 2.png'
import img_for_null from '../img/download.png'
import Form from 'react-bootstrap/Form';
import { BsChevronDown } from "react-icons/bs"



export default function Searchfilter() {
  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();
  const [courstype, setCoursetype] = useState([]);
  const [CourseId, setCourseId] = useState();
  const [deleteId, setDeleteId] = useState()
  const [delete1, setDelete1] = useState([]);

  function Filter() {
    var a = document.querySelector(".filter_button").style.display
    if (a === "none") {
      document.querySelector(".filter_button").style = "display:block "
    } else {
      document.querySelector(".filter_button").style = "display:none "
    }
  }
  function filter1() {
    document.querySelector(".filter_button").style = "display:none !important"
  }

  function windowModal() {
    document.querySelector(".kurs_cards").style = "display:flex;transition:3s";
    document.querySelector(".spiska_img_title_div").style = "display:none";
  }
  function menuModal() {
    document.querySelector(".kurs_cards").style = "display:none";
    document.querySelector(".spiska_img_title_div").style =
      "display:block;transition:3s";
  }

  function close() {
    document.querySelector(".delete_card").style = "display:none"
  }

  function udalit(id) {
    setDeleteId(id)
    document.querySelector(".delete_card").style = "display:flex !important"
  }

  function dabavit(id) {
    setCourseId(id)
    document.querySelector(".edit_card").style = "display:flex !important"
    setTimeout(() => {
      axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
        setKursdata(res.data)
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
  function nazat() {
    document.querySelector(".edit_card").style = "display:none"
  }


  function dashed_nazat2() {
    document.querySelector(".edit_card2").style = "display:none;"
  }
  function dashedOpen() {
    document.querySelector(".edit_card").style = "display:flex;"
  }

  function dashedOpen2() {
    document.querySelector('.edit_card2').style = 'display: flex;'
  }

  // function dashed() {
  //   // Swal.fire('hjkl')
  //   var name = document.querySelector('.name').value
  //   var description = document.querySelector('.description').value
  //   var price = document.querySelector('.price').value
  //   var planed_time = document.querySelector('.planed_time').value
  //   var image = document.querySelector('.image').files[0]
  //   var formdata = new FormData()
  //   formdata.append("name", name)
  //   formdata.append("description", description)
  //   formdata.append("price", price)
  //   formdata.append("planed_time", planed_time)
  //   formdata.append("image", image)

  //   axios.post(`${url}/api/course/`, formdata, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
  //     Swal.fire("Добавлена информация")
  //     console.log('success');
  //   })
  //     .catch(err => {
  //       console.log(err);
  //       // Swal.fire("Это адрес электронной почты или имя, пароль введен")
  //     })
  // }


  function postformentor() {
    var formdata = new FormData()

    formdata.append("name", document.querySelector(".namePost").value)
    formdata.append("description", document.querySelector(".descriptionPost").value)
    formdata.append("price", document.querySelector(".pricePost").value)
    formdata.append("planned_time", document.querySelector(".planned_timePost").value)
    formdata.append("image", document.querySelector(".imagePost").files[0])
    formdata.append("course_type", document.querySelector(".selectPost").value)
    formdata.append("author", localStorage.getItem("oneuser"))


    axios.post(`${url}/api/course`, formdata, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => {
      Swal.fire("success")
      window.location.reload()
    }).catch(err => {
      Swal.fire(err)
    })
  }


  function dashed(id) {
    var formdata = new FormData()
    formdata.append("name", document.querySelector(".nameInp").value)
    formdata.append("description", document.querySelector(".description").value)
    formdata.append("price", document.querySelector(".inp_numbr1").value)
    formdata.append("planned_time", document.querySelector(".inp_numbr").value)
    formdata.append("image", document.querySelector(".inp_img").files[0])
    formdata.append("course_type", document.querySelector(".select_opt").value)
    formdata.append("author", localStorage.getItem("oneuser"))

    axios.put(`${url}/api/course/${id}`, formdata, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then(res => {
      Swal.fire("success")
      window.location.reload()
    }).catch(err => {
      Swal.fire(err)
    })
    axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      setKursdata(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  //  function dashed2 (){

  //  }

  function dashed_nazat() {
    document.querySelector("#edit_card").style = "display:none"
  }

  function putCourse() {
    var formdata = new FormData()
    formdata.append("")


    axios.put(`${url}/api/course`).then(res => {

    })
  }
  function deleteclose() {
    axios.delete(`${url}/api/course/${deleteId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      Swal.fire("ishladi")
      window.location.reload()
    }).catch(err => {
      Swal.fire("xato")
    })
  }



  useEffect(() => {

    document.querySelector(".filter_button").style = "display:none"
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    axios.get(`${url}/api/cours_types`, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
      setCoursetype(res.data)
      console.log(res.data);
    }).catch(err => {
      Swal.fire("err")
    })
    axios.get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      setKursdata(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, []);

  function filter(id) {
    axios
      .get(`${url}/api/course`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((res) => {
        const search = res.data.filter(item => item.course_type === id)
        setKursdata(search)
      });
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

  // function deleteData(id) {
  //   console.log(id);
  //   // axios.delete(`https://markazback2.onrender.com/api/course/${key}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
  //   //   Swal.fire('malumot ochirildi')
  //   //   window.location.reload()
  //   // }).catch(err => {
  //   //   console.log(err);
  //   // })

  // }

  // function drop_toggle() {
  //   document.querySelector(".dropdown_list").classList.toggle("myStyle");
  // }



  return (
    <div>

      <div>
        <div className="Filter">
          <div className="blur_blok">
            <div className="inp_blok">
              <input onChange={searchInput} id="search" type="text" placeholder="Search among my courses" />
              <CiSearch className="search" />
            </div>
            <div className="blur">
              <div className="icon_blok">
                <div
                  className="sel_blok"
                  onClick={() => {
                    Filter();
                  }}
                >
                  <BiMenu className="menyu" />
                  <h4>Filter</h4>
                </div>
                {/* <div className="win_men">
                  <MdWindow className="window" onClick={() => windowModal()} />
                  <TfiMenuAlt className="manu" onClick={() => menuModal()} />
                </div> */}
              </div>
              <div onMouseLeave={() => filter1()} className="filter_button">


                {courstype.map(item => {
                  return (
                    <div className="button_filter_kurs">
                      {item.name === null ? ("") : (<div onClick={() => filter(item.id)} className="div_kurs">{item.name}</div>)}
                    </div>
                  )
                })}



              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards">
          {kursdata.map(item => {
            return (
              <div className="kurs_card">
                <button className="btn_das">Dasturlash</button>
                {item.image === null ? (
                  <img src={img_for_null} />
                ) : (
                  <img src={item.image} />
                )}
                <div className="kurs_paddaing_auto">
                  <h4>{item.name}</h4>
                  <div className="star_card">
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_i">
                      <AiFillStar />
                    </i>
                    <i className="star_ib">
                      <AiFillStar />
                    </i>
                    <p>
                      4.1 <span>(524)</span>
                    </p>
                  </div>
                  <div className="hajm">
                    <h5>
                      <p>Kurs hajmi</p>
                      {item.planned_time}h
                    </h5>
                    <h5>
                      <p>Kurs narxi</p>
                      {item.price}$
                    </h5>
                  </div>
                </div>
                <div className='edit_icon' onClick={() => dabavit(item.id)}>
                  <Edit />
                </div>

                <div className="edit_card">
                  <div className="edit_padding">

                    <button onClick={() => nazat()} className="close_btn">
                      <i><GrFormClose /></i>
                    </button>
                    <div className="edit_inside">
                      <label htmlFor="">Name:</label>
                      <input id="name" className="nameInp" type="text" />
                    </div>
                    <div className="edit_inside">
                      <label htmlFor="">Description:</label>
                      <input id="description" className="description" type="text" />
                    </div>
                    <div className="edit_inside">
                      <label htmlFor="">Price:</label>
                      <input id="price" type="number" className="inp_numbr1" />
                    </div>
                    <div className="edit_inside">
                      <label htmlFor="">Planned time:</label>
                      <input id="planned_time" type="number" className="inp_numbr" />
                    </div>
                    <div className="edit_inside">
                      <label htmlFor="">Course type:</label>
                      <Form.Select className="select_opt" aria-label="Default select example">
                        {courstype.map(item => { return <option value={item.id}>{item.name}</option> })}
                      </Form.Select>
                    </div>
                    <div className="edit_inside">
                      <label htmlFor="">Image:</label>
                      <input id="image" type="file" className="inp_img" />
                    </div>
                    <button className="edit_inside_btn" onClick={() => dashed(item.id)}>Send</button>
                  </div>
                </div>

                <button onClick={() => udalit(item.id)} className="delete_icon">
                  <i>
                    <Delete />
                  </i>
                </button>
                <div className="delete_card">
                  <div className="delete_padding">
                    <img src={Groupimg} alt="" />
                    <h4>Вы правда хотите удалить?</h4>
                    <div className="delete_btns">
                      <button onClick={() => close()} className="delete_btn_no">Нет</button>
                      <button className="delete_btn_yes" onClick={() => deleteclose()}>Да</button>
                    </div>
                  </div>
                </div>
                <button className="button_circle">
                  <AiOutlineArrowRight
                    onClick={() => {
                      window.location = "/video";
                      localStorage.setItem("abbas", item.id)
                    }}
                  />
                </button>
              </div>
            )
          })}

          <div className="dashed" onClick={() => dashedOpen2()}>
            <i><AiOutlinePlus /></i>
          </div>
          <div className="edit_card2" style={{ display: 'none' }}>
            <div className="edit_padding">

              <button onClick={() => dashed_nazat2()} className="close_btn">
                <i><GrFormClose /></i>
              </button>
              <div className="edit_inside">
                <label htmlFor="">Name:</label>
                <input className="namePost" type="text" id="" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Description:</label>
                <input className="descriptionPost" type="text" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Price:</label>
                <input className="pricePost" type="number" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Planned time:</label>
                <input className="planned_timePost" type="number" />
              </div>
              <div className="edit_inside">
                <label htmlFor="">Course type:</label>
                <Form.Select className="selectPost" aria-label="Default select example">
                  {courstype.map(item => { return <option value={item.id}>{item.name}</option> })}
                </Form.Select>
              </div>
              <div className="edit_inside">
                <label htmlFor="">Image:</label>
                <input className="imagePost" type="file" />
              </div>
              <button className="edit_inside_btn" onClick={() => { postformentor() }}>Send</button>
            </div>
          </div>

        </div>

        {/* SPISKA */}

        {/* <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>no picture</h1>
                        </div>
                      ) : (
                        <img src={item.image} alt="No img" />
                      )}
                    </div>
                    <div className="spiska_title_df">
                      <div className="spiska_title">
                        <h3>{item.name}</h3>
                        <div className="star_icon_blok1">
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar className="gold" />
                          <AiFillStar />
                          <div className="number">
                            <h6>4.1 (524)</h6>
                          </div>
                        </div>
                      </div>
                      <div className="left1_icon">
                        <HiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

    </div>
  );
}
