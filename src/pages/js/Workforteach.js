import React, { useEffect, useState } from "react";
import "../css/workforteach.css";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import sertifikat from "../img/Sertifikat.png";
import axios from "axios";
import url from "./Host";
import { MdDeleteOutline } from "react-icons/md";
import Groupimg from "../img/Teacher-cuate.png";
import { GrFormClose } from "react-icons/gr";
import img_for_null from "../img/download.png";
import { FiDownload } from "react-icons/fi";
import { FaHourglassStart } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
export default function Workforteach() {
  const [stTasks, setTasks] = useState([]);
  const [CourseId, setCourseId] = useState();
  const [deleteId, setDeleteId] = useState();
  //   const [kursdata, setKursdata] = useState([]);
  const [themeSelect, setThemeSelect] = useState([])
  function openModal() {
    document.querySelector("#m_zadacha_tepadan").style =
      "display: flex; justify-content: center;align-items: center;";
  }
  function clouseModal() {
    document.querySelector("#m_zadacha_tepadan").style = "display:none";
  }
  function clouseput() {
    document.querySelector("#zadaca_put").style = "display:none";
  }
  function openModal1() {
    document.querySelector(".m_zadacha_tepadan1").style =
      "display: flex; justify-content: center;align-items: center;";
  }
  function clouseModal1() {
    document.querySelector(".m_zadacha_tepadan1").style = "display:none";
  }
  function openModal2(id) {
    setDeleteId(id);
    document.querySelector(".m_delete_tepadan2").style =
      "display: flex; justify-content: center;align-items: center;";
  }
  function clouseModal2() {
    document.querySelector(".m_delete_tepadan2").style = "display:none";
  }
  useEffect(() => {
    axios
      .get(`${url}/api/course_theme_task`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setTasks(res.data);
        localStorage.setItem("taskLength", res.data.length);
      });

    axios.get(`${url}/api/course_data_theme`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setThemeSelect(res.data)
    })

  }, []);
  function deletetask() {
    axios
      .delete(`${url}/api/course_theme_task/${deleteId}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        alert("Данные удалены");
        document.querySelector(".m_delete_tepadan2").style = "display:none";
        axios
          .get(`${url}/api/course_theme_task`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setTasks(res.data);
          });
      })
      .catch((err) => {
        alert("Данные не удалены");
      });
  }

  // function deletetask() {
  //     axios.delete(`${url}/api/course/${deleteId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
  //       Swal.fire("ishladi")
  //       window.location.reload()
  //     }).catch(err => {
  //       Swal.fire("xato")
  //     })
  //   }

  function postforzadac() {
    var formdata = new FormData();
    formdata.append("content", document.querySelector(".inp_name_zadac").value);
    formdata.append("course_theme", document.querySelector(".inp_course_theme_zadac").value);
    formdata.append("image", document.querySelector(".img_inp_zadac").files[0]);


    axios
      .post(`${url}/api/course_theme_task`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        Swal.fire("success");
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire(err);
      });
  }

  function zadacput(id) {
    setCourseId(id);
    document.querySelector("#zadaca_put").style =
      "display: flex; justify-content: center;align-items: center;";
    setTimeout(() => {
      axios
        .get(`${url}/api/course_theme_task`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          setTasks(res.data);
          const filter = res.data.filter((item) => item.id == id);
          document.querySelector(".inp_name_zadacput").value =
            filter[0].content;
          // document.querySelector(".inp_ops_zadacput").value = filter[0].feedback
          document.querySelector(".inp_course_theme_zadacput").value =
            filter[0].course_theme;
          // document.querySelector(".inp_bdate_zadacput").value = filter[0].time_create
          // document.querySelector(".inp_tdate_zadacput").value = filter[0].time_update
          // document.querySelector(".inp_mark_zadacput").value = filter[0].mark
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10);
  }

  function dashedput(id) {
    var formdata = new FormData();
    formdata.append(
      "content",
      document.querySelector(".inp_name_zadacput").value
    );
    // formdata.append("feedback", document.querySelector(".inp_ops_zadacput").value)
    formdata.append("course_theme", 2);
    // formdata.append("time_create", document.querySelector(".inp_bdate_zadacput").value)
    // formdata.append("time_update", document.querySelector(".inp_tdate_zadacput").value)
    formdata.append(
      "image",
      document.querySelector(".img_inp_zadacput").files[0]
    );
    // formdata.append("mark", document.querySelector(".inp_mark_zadacput").value)

    axios
      .put(`${url}/api/course_theme_task/${CourseId}`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        Swal.fire("success");
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire(err);
      });
    axios
      .get(`${url}/api/course_theme_task`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="m_dobavit_kurs">
        <button onClick={() => openModal()}>Add task</button>
      </div>
      <div className="m_zadach">
        {stTasks.length === 0 ? (
          <div className="delete_padding">
            <img src={Groupimg} alt="" />
            <h4>No tasks</h4>
          </div>
          ) : (<>   {stTasks.map((item) => {
            localStorage.setItem("taskLength", stTasks.length);
            return (
              <div>
                <div className="m_zadach_block">
                  <div className="fors_imagesa">
                    {item.image ? (
                      <img src={`${url}/` + item.image} alt="" />
                    ) : (
                      <img src={img_for_null} alt="" />
                    )}
                  </div>
                  <h4>{item.content}</h4>
                  <div className="zadac_df">
                    <span>
                      <FaHourglassStart
                        style={{ color: "black", marginRight: "7px" }}
                      />{" "}
                      {item.time_create.slice(0, 10)}
                    </span>
                    <span>
                      <FaHourglassEnd
                        style={{ color: "black", marginRight: "7px" }}
                      />{" "}
                      {item.time_update.slice(0, 10)}
                    </span>
                  </div>
                  {/* <p className='ortapp'>{item.feedback}</p> */}
                  {/* <p className='ortap1' style={{ marginTop: "0px" }}>Mark:{item.mark}</p> */}
                  <div className="m_zadacha_icon">
                    <div
                      className="m_zadach_ktug_icon1"
                      onClick={() => openModal2(item.id)}
                    >
                      <MdDeleteOutline />
                    </div>
                    <div
                      className="m_zadach_ktug_icon"
                      onClick={() => zadacput(item.id)}
                    >
                      <FiEdit />
                      {/* onClick={() => dashed(item.id)} */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}</>)}

      </div>

      <div id="m_zadacha_tepadan" className="m_zadacha_tepadan">
        <div className="m_zadachi_dobavit">
          <div className="m_clouse_x" onClick={() => clouseModal()}>
            <GrFormClose />
          </div>
          <div className="m_input_file_dobavit">
            <div className="a_input_file12">
              <FiDownload /> Add task
            </div>
            <input type="file" className="img_inp_zadac" />
          </div>
          <div className="m_input_bilmafim">
            <label htmlFor="">Name:</label>
            <input type="text" name="" id="" className="inp_name_zadac" />
            <label htmlFor="">Course theme:</label>
            <select name="" className="inp_course_theme_zadac">
              {themeSelect.map((item, key) => {
                return <option value={item.id}>{item.name}</option>
              })}
            </select>
            <div className="a_button_for_end">
              <button onClick={() => postforzadac()}>Add</button>
            </div>
          </div>
        </div>
      </div>

      <div id="zadaca_put" className="m_zadacha_tepadan">
        <div id="zadac_put_card" className="m_zadachi_dobavit">
          <div className="m_clouse_x" onClick={() => clouseput()}>
            <GrFormClose />
          </div>
          <div className="m_input_file_dobavit">
            <div className="a_input_file12">
              <FiDownload /> Add task
            </div>
            <input type="file" className="img_inp_zadacput" />
          </div>
          <div className="m_input_bilmafim">
            <label htmlFor="">Name:</label>
            <input type="text" name="" id="" className="inp_name_zadacput" />
            <label htmlFor="">Course theme:</label>
            <select name="" className="inp_course_theme_put">
              {themeSelect.map((item, key) => {
                return <option value={item.id}>{item.name}</option>
              })}
            </select>
            <div className="a_button_for_end">
              <button onClick={() => dashedput()}>Add</button>
            </div>
          </div>
        </div>
      </div>

      <div className="m_zadacha_tepadan1">
        <div className="m_zadachi_dobavit">
          <div className="m_clouse_x" onClick={() => clouseModal1()}>
            <GrFormClose />
          </div>
          <div className="m_input_file_dobavit">
            <div className="a_input_file12"> Change image </div>
            <input type="file" />
          </div>
          <div className="m_input_bilmafim">
            <select name="" id="select1">
              <option value="">Otash bilad</option>
            </select>
            <textarea
              placeholder="Edid description"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="a_button_for_end">
              <button>Change</button>
            </div>
          </div>
        </div>
      </div>

      <div className="m_delete_tepadan2">
        <div className="a_delete_bgc">
          <div className="for_center">
            <img src={Groupimg} alt="" />
            <h4>Do you really want to delete?</h4>
            <div className="a_delete_button">
              <button className="a_delete_no" onClick={() => clouseModal2()}>
                No
              </button>
              <button onClick={() => deletetask()} className="a_delete_yes">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
