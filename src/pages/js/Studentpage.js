import React, { useState, useEffect } from 'react'
import Use_img from "../img/Ellipse.jpg"
import { AiOutlineArrowDown } from 'react-icons/ai'
import Pdp from "./UserPdp"
import { MdOutlinePhotoCamera } from "react-icons/md"
import { BsActivity, BsFillBellFill, BsThreeDots } from "react-icons/bs"
import { BiCast } from "react-icons/bi"
import { FiEdit, FiLifeBuoy, FiLogOut } from "react-icons/fi"
import { TbPointFilled } from "react-icons/tb"
import { AiOutlineRight } from "react-icons/ai"
import chadimg from "../img/Ellipse.jpg"
import '../css/Studentpage.css'
import { GrFormClose } from 'react-icons/gr';
import Mentorkurs from "./Mentorkurs"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserChat from "./userChat"
import Education from "./Education"
import Sertifikat from './Workforteach'
import Azo from "./Azo"
import Usernavbar from './Navbar'
import { TiThMenu } from 'react-icons/ti'
import Futer from "./Footer1"
import axios from 'axios'
import { GrClose } from 'react-icons/gr'
import Swal from "sweetalert2";
import url from './Host'
import { AiFillStar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import img_for_null from '../img/download.png'
import Testpage from './Testpage'
import Nosignal from '../js/Nosignal'
import userNull from "../img/149071.png";
import { BiLogoTelegram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillCloudArrowDownFill } from 'react-icons/bs'
import sertifikat from '../img/Sertifikat.png'
import Groupimg from "../img/Teacher-cuate.png";
import { BsSearch } from "react-icons/bs"
import deleteImg from "../img/Group 2.png"
import { MdDeleteOutline } from "react-icons/md"
import Ourcourse from './Ourcourse'
import Team from '../img/Task.png'
import '../css/workforteach.css'
import Following_img from '../img/Following.png'
// import { BsFillCloudArrowDownFill } from 'react-icons/bs'
// import { FiEdit } from "react-icons/fi"
// import sertifikat from '../img/Sertifikat.png'
// import axios from 'axios'
// import url from './Host'
// import { MdDeleteOutline } from "react-icons/md"
// import Groupimg from '../img/Group 2.png'
// import { GrFormClose } from 'react-icons/gr'
// import img_for_null from '../img/download.png'
import { FiDownload } from "react-icons/fi"
import { FaHourglassStart } from 'react-icons/fa'
import { FaHourglassEnd } from 'react-icons/fa'
// import Swal from "sweetalert2"; 
// function openTest() {
//   document.querySelector(".block-bir-variant1 p").style = `   background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant2 p").style = `
// background-color: #fcfcfc;
// border: 1px solid #ccc;

// `
//   document.querySelector(".block-bir-variant2 p").style = `
// background-color: #fcfcfc;
// border: 1px solid #ccc;

// `
//   document.querySelector(".block-bir-variant p").style = ` background-color: rgb(98, 177, 204);color: white;`
// }
// function openTest1() {
//   document.querySelector(".block-bir-variant2 p").style = `   background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant p").style = `   background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant1 p").style = `background-color: rgb(98, 177, 204);color: white;

//   `
// }
// function openTest2() {
//   document.querySelector(".block-bir-variant1 p").style = `
// background-color: #fcfcfc;
// border: 1px solid #ccc;

// `
//   document.querySelector(".block-bir-variant p").style = `
// background-color: #fcfcfc;
// border: 1px solid #ccc;
// `
//   document.querySelector(".block-bir-variant2 p").style = `background-color: rgb(98, 177, 204);color: white;`
// }
// function openTest3() {
//   document.querySelector(".block-bir-variant3 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant4 p").style = `background-color: #fcfcfc;
// border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant5 p").style = `background-color: #fcfcfc;
// border: 1px solid #ccc;`

// }
// function openTest4() {

//   document.querySelector(".block-bir-variant4 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant3 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant5 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest5() {
//   document.querySelector(".block-bir-variant5 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant4 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant3 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest6() {
//   document.querySelector(".block-bir-variant6 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant7 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant8 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest7() {
//   document.querySelector(".block-bir-variant7 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant6 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant8 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest8() {
//   document.querySelector(".block-bir-variant8 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant7 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant6 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest9() {
//   document.querySelector(".block-bir-variant9 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant10 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant11 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest10() {
//   document.querySelector(".block-bir-variant10 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant9 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant11 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest11() {
//   document.querySelector(".block-bir-variant11 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant10 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant9 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }


// function openTest12() {
//   document.querySelector(".block-bir-variant12 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant13 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant14 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest13() {
//   document.querySelector(".block-bir-variant13 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant12 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant14 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
// function openTest14() {
//   document.querySelector(".block-bir-variant14 p").style = `background-color: rgb(98, 177, 204);color: white;`
//   document.querySelector(".block-bir-variant13 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`
//   document.querySelector(".block-bir-variant12 p").style = `background-color: #fcfcfc;
//   border: 1px solid #ccc;`

// }
export default function Mentor() {
  const [state1, setState1] = React.useState();
  const [students, setStudents] = React.useState([]);
  const [kursdata, setKursdata] = useState([]);
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState([])
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1)
  const [counter, setCounter] = React.useState(59)
  const [counter1, setCounter1] = React.useState(70)
  const [counter2, setCounter2] = React.useState(65)
  const [counter3, setCounter3] = React.useState(70)
  const [counter4, setCounter4] = React.useState(80)
  const [loading, setloading] = useState(false)
  const [stsertifikat, setStsertifikat] = useState([])
  const [natlifikation, setNatlifikation] = React.useState([]);
  const [following, setFollowing] = useState(localStorage.getItem("OneuserId"))
  const [edication, setEdication] = useState([])
  const [education,setForeducation] = useState([])
  // const [edicationId, setEdicationId] = useState()
  // const [tests, setTests] = useState([])

  // const username = document.querySelectorAll("#Educationusername")
  // const start_date = document.querySelectorAll("#Educationstart_date")
  // const end_date = document.querySelectorAll("#Educationend_date")
  // const description = document.querySelectorAll("#Educationdescription")
  const [stTasks, setTasks] = useState([])
  const [CourseId, setCourseId] = useState();
  const [deleteId, setDeleteId] = useState()
  const [follow, setFollow] = useState([])
  const [courstype, setCoursetype] = useState([]);
  const [toggle, setToggle] = useState(1)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setEdication(res.data)
    })
    axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setEdication(res.data)
    })


  }, [])
  useEffect(() => {
    axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUsers(res.data)
    })
  }, []);
  useEffect(() => {
    axios.get(`${url}/edu/education`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setForeducation(res.data)
  }).catch(err=>{})
    // const fetchData = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     const OneuserId = localStorage.getItem("OneuserId");

    //     // Fetch one user data
    //     const oneUserResponse = await axios.get(`${url}/auth/oneuser`, {
    //       headers: { Authorization: "Bearer " + token },
    //     });
    //     setStudents(oneUserResponse.data);
    //     console.log(oneUserResponse.data, "aa");

    //     // Fetch my course data
    //     const myCourseResponse = await axios.get(`${url}/api/mycourse/${OneuserId}`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setKursdata(myCourseResponse.data);
    //     localStorage.setItem("Mycourse", JSON.stringify(myCourseResponse.data));

    //     // Fetch course data
    //     const courseResponse = await axios.get(`${url}/api/course`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });

    //     // Update star property in kursdata
    //     const updatedKursdata = myCourseResponse.data.map((course) => {
    //       const matchingCourse = courseResponse.data.find(
    //         (c) => c.id === course.id
    //       );
    //       if (matchingCourse) {
    //         course.star = matchingCourse.star;
    //       }
    //       return course;
    //     });
    //     setKursdata(updatedKursdata);
    //     console.log(updatedKursdata);
    //   } catch (error) {
    //     console.log(error, "KURSDATA");
    //   }
    // };
    axios
    .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      axios
        .get(`${url}/api/course`, {
          header: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res1) => {
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res1.data.length; j++) {
              if (res.data[i].id == res1.data[j].id) {
                res.data[i].star = res1.data[j].star;
              }
            }
          }
          setKursdata(res.data);
          // localStorage.setItem("mycourseUser", res.data.length)
        });
    });
    axios.get(`${url}/API/notification`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setNatlifikation(res.data)
      axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res1 => {
        setUser(res1.data)
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].user_id == res1.data[j].id) {
              res.data[i].image = res1.data[j].image
              res.data[i].username = res1.data[j].username
              res.data[i].last_name = res1.data[j].last_name
            }
          }
        }
        setNatlifikation(res.data)
      })
    })
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/auth/oneuser/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        localStorage.setItem("page_user", JSON.stringify(res.data));
        res.data.map(item => {
          localStorage.setItem("OneuserId", item.id)
        })
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );



  }, []);
  useEffect(() => {
    axios.get(`${url}/api/nomycourse/${localStorage.getItem("OneuserId")}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setCourses(res.data)
  }).catch(err=>{})
    axios.get(`${url}/auth/allusers`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setUsers(res.data)
    })
  }, []);
  useEffect(() => {
    axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
      setTasks(res.data)
    })
  })

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter])

  useEffect(() => {
    const timer1 =
      counter1 > 0 && setInterval(() => setCounter1(counter1 - 1), 1000);
    return () => clearInterval(timer1);
  }, [counter1])
  useEffect(() => {
    const timer2 =
      counter2 > 0 && setInterval(() => setCounter2(counter2 - 1), 1000);
    return () => clearInterval(timer2);
  }, [counter2])
  useEffect(() => {
    const timer3 =
      counter3 > 0 && setInterval(() => setCounter3(counter3 - 1), 1000);
    return () => clearInterval(timer3);
  }, [counter3])
  useEffect(() => {
    const timer4 =
      counter4 > 0 && setInterval(() => setCounter4(counter4 - 1), 1000);
    return () => clearInterval(timer4);
  }, [counter4])
  useEffect(() => {
    axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
  }, [])
  useEffect(() => {
    axios.get(`${url}/api/follow/`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setFollow(res.data)
    })
  }, [])
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);
  useEffect(() => {
    
    axios
      .get(`${url}/auth/oneuser/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        localStorage.setItem("page_user", JSON.stringify(res.data));
        res.data.map(item => {
          localStorage.setItem("OneuserId", item.id)
        })
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );



  }, []);
  useEffect(() => {
    
    axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      setTasks(res.data)
    })

  }, [])



  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios.get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      const searchdata = res.data.filter((item) => {
        return (
          searchRegex.test(item.name)
        );
      })
      setKursdata(searchdata)
    })

  }



  function soyaa(id) {
    var formdata = new FormData()
    formdata.append("read", true)
    axios.get(`${URL}/api/notification/read/${id}`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
    })
  }

  function folowcolor1(key) {
    axios.delete(`${url}/api/follow/${key}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      window.location.reload()
    }).catch(err => {
      alert("xato")
    })
  }
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
  function userimgModal() {
    document.querySelector(".user_img_hover").style = "  position: absolute;bottom: 0;"

  }
  function userimgClose() {
    document.querySelector(".user_img_hover").style = "  position: absolute;bottom: -100px;"
  }
  function taxrirlashModal() {
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:block;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none;"
  }
  function taxrirlashClose() {
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none;"
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none;"
  }
  function taxrirlashChadModal() {
    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:block;"
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style = "display:none;"
  }
  function taxrirlashChadModal() {
    var s = document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style.display
    if (s === "none") {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:block "
    } else {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none "
    }

    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:block;";
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none;";

  }
  function taxrirlashChadModal() {
    var s = document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style.display
    if (s === "none") {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:block "
    } else {
      document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style = "display:none "
    }

    document.querySelector(".profil_blok_ikki_icon_taxriirlash_chat").style =
      "display:block;";
    document.querySelector(".profil_blok_ikki_icon_texrirlash_modal").style =
      "display:none;";

  }
  function updatetoggle(id) {
    setToggle(id)
    document.querySelector(".profil_modal_media").style = "display:none;"
    document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
    document.querySelector(".profil_blok_menu").style = "display:block;"
  }
  function menuModal() {
    document.querySelector(".profil_modal_media").style = "display:block;"
    document.querySelector(".profil_blok_menu").style = "display:none !important;"
    document.querySelector(".profil_blok_menu_clone").style = "display:block;"
  }
  function menuModalClone() {
    document.querySelector(".profil_modal_media").style = "display:none;"
    document.querySelector(".profil_blok_menu_clone").style = "display:none !important;"
    document.querySelector(".profil_blok_menu").style = "display:block;"
  }
  function notificationClose() {
    document.querySelector(".profil_notifacation_size").style =
      "position: fixed;right:-100%;";

    document.querySelector(".profil-qora-qiladi").style = "display:none";
  }
  function openModal2() {
    document.querySelector(".m_delete_tepadan2").style = "display: flex; justify-content: center;align-items: center;"
  }
  function chiqish() {
    window.location = "/";
    localStorage.clear();
  }
  function userImgPut(id) {
    var formdata = new FormData();

    formdata.append("image", document.querySelector("#userInput").files[0]);
    formdata.append("address", students[0].address);
    formdata.append("description", students[0].description);
    formdata.append("email", students[0].email);
    formdata.append("last_name", students[0].last_name);
    formdata.append("phone_number", students[0].phone_number);
    formdata.append("username", students[0].username);

    axios
      .put(`${url}/auth/oneuser/${id}`, formdata, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        axios
          .get(`${url}/auth/oneuser`, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
          })
          .then((res) => {
            console.log(res.data);
            setStudents(res.data);
          })

      })
      .catch((err) => {
        Swal.fire("Что-то пошло не так, попробуйте снова.")
      });
    axios
      .get(`${url}/auth/oneuser`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function openModal() {
    document.querySelector(".m_zadacha_tepadan").style = "display: flex; justify-content: center;align-items: center;"
  }
  function clouseModal() {
    document.querySelector(".m_zadacha_tepadan").style = "display:none "
  }
  function clouseput() {
    document.querySelector("#zadaca_put").style = "display:none"
  }
  function clouseModal1() {
    document.querySelector(".m_zadacha_tepadan1").style = "display:none"
  }
  function clouseModal2() {
    document.querySelector(".m_delete_tepadan2").style = "display:none"
  }
  function deletetask() {
    axios.delete(`${url}/api/course_theme_task_student/${deleteId}`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      alert("Данные удалены")
      window.location.assign("")
      document.querySelector("#EducationdeleteModal").style = "display:none"
      axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
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
    document.querySelector("#zadaca_put").style = "display: flex; justify-content: center;align-items: center;"
    setTimeout(() => {
      axios.get(`${url}/api/course_theme_task_student`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
        setTasks(res.data)
        const filter = res.data.filter(item => item.id == id)
        document.querySelector(".inp_name_zadacput").value = filter[0].content
        document.querySelector(".inp_ops_zadacput").value = filter[0].feedback
        document.querySelector(".inp_course_theme_zadacput").value = filter[0].course_theme
        document.querySelector(".inp_bdate_zadacput").value = filter[0].time_create
        document.querySelector(".inp_tdate_zadacput").value = filter[0].time_update
        document.querySelector(".inp_mark_zadacput").value = filter[0].mark
      }).catch(err => {
        console.log(err);
      })
    }, 10);

  }
  function filter(id) {
    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const search = res.data.filter((item) => item.course_type === id);
        setKursdata(search);
      });
  }
  function dashedput(id) {
    var formdata = new FormData()
    formdata.append("content", document.querySelector(".inp_name_zadacput").value)
    formdata.append("feedback", document.querySelector(".inp_ops_zadacput").value)
    formdata.append("course_theme", 2)
    formdata.append("time_create", document.querySelector(".inp_bdate_zadacput").value)
    formdata.append("time_update", document.querySelector(".inp_tdate_zadacput").value)
    formdata.append("image", document.querySelector(".img_inp_zadacput").files[0])
    formdata.append("mark", document.querySelector(".inp_mark_zadacput").value)

    axios.put(`${url}/api/course_theme_task_student/${CourseId}`, formdata, {
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
    <div className='studentpagess'>
      <Usernavbar />

      <div>
        <div className="profil_size_df">
          <div className="profil_size">
            <div className="profil_blok_bir">
              <div onMouseLeave={() => userimgClose()} className="user_img_size">
                {data.map((item) => {
                  return (
                    <div>
                      {item.image === null ? (
                        <img
                          onMouseEnter={() => userimgModal()}
                          className="user_img"
                          src={userNull}
                          alt=""
                        />
                      ) : (
                        <img
                          onMouseEnter={() => userimgModal()}
                          className="user_img"
                          src={
                            item.image.includes("http")
                              ? item.image
                              : `${url}/${item.image}`
                          }
                          alt=""
                        />
                      )}
                    </div>
                  );
                })}
                {data.map((item) => {
                  return (
                    <div className="user_img_hover">
                      <input
                        onChange={() => userImgPut(item.id)}
                        id="userInput"
                        type="file"
                      />
                      <MdOutlinePhotoCamera className="user_hover_photo_icon" />
                    </div>
                  );
                })}
              </div>
              <div className="blok_bir_text">
                {data.map((item) => {
                  return <h1>{item.username}</h1>;
                })}

                <button>Regular Student</button>
                <p>My social networks :</p>
                <div className="blok_bir_icon">
                  <div className="blok_bir_icon_img1">
                    <BiLogoTelegram />
                  </div>
                  <div className="blok_bir_icon_img2">
                    <RiInstagramFill />
                  </div>
                  <div className="youtube">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>

            <div className="profil_blok_ikki">
              <div className="profil_blok_ikki_text">
                <p>Current balance</p>
                <div className="profil_blok_ikki_sum">
                  {data.map((item) => {
                    return (
                      <div>
                        {item.balance === null ? (
                          <h1>0</h1>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <h1>{item.balance}</h1>
                            <p>$</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="profil_blok_ikki_button">
                  <button>
                    <BsActivity />
                  </button>
                  <button onClick={() => (window.location = "/oplata")}>
                    Balance replenishment
                  </button>
                </div>
              </div>
              <div
                onMouseLeave={() => taxrirlashClose()}
                className="profil_blok_ikki_icon"
              >
                <BsFillBellFill
                  onClick={() => taxrirlashChadModal()}
                  className="profil_blok_ikki_icon_bir"
                />

                {natlifikation.filter(filter => filter.to_user_id == localStorage.getItem("OneuserId")).length == 0 ? ("") : (<div className="nol" style={{ background: "red", width: "20px", height: "20px", borderRadius: '50%', color: '#fff', textAlign: "center", marginTop: '-7px', marginLeft: '-25px' }}>
                  {natlifikation.filter(filter => filter.to_user_id == localStorage.getItem("OneuserId")).length}
                </div>)}

                {/* {localStorage.getItem("soya").length == 0 ? ("") : (<div className="nol" style={{ background: "red", width: "20px", height: "20px", borderRadius: '50%', color: '#fff', textAlign: "center", marginTop: '-7px', marginLeft: '-25px' }}>
                  {localStorage.getItem("soya")}
                </div>)} */}

                <BsThreeDots
                  onClick={() => taxrirlashModal()}
                  className="profil_blok_ikki_icon_ikki"
                />
                <div className="profil_blok_ikki_icon_texrirlash_modal">
                  <div
                    onClick={() => (window.location = "/editprofil")}
                    className="taxrirlash_modal_div"
                  >
                    <FiEdit className="taxrirlash_modal_icon" />
                    <p>Edit profile</p>
                  </div>
                  {/* <div
                  onClick={() => notificationModal()}
                  className="taxrirlash_modal_div"
                >
                  <BiCast className="taxrirlash_modal_icon" />
                  <p>Notifications</p>
                </div> */}
                  <div className="taxrirlash_modal_div">
                    <FiLifeBuoy className="taxrirlash_modal_icon" />
                    <p onClick={() => (window.location = "/help")}>Help</p>
                  </div>
                  <hr />
                  <div className="taxrirlash_modal_div" onClick={() => chiqish()}>
                    <FiLogOut className="taxrirlash_modal_icon" />
                    <p>Exit</p>
                  </div>
                </div>




                <div className="profil_blok_ikki_icon_taxriirlash_chat">
                  <div className="for_wiewall">
                    {natlifikation.length === 0 ? (
                      <div><p style={{ textAlign: 'center', marginTop: '35%', fontSize: '20px', opacity: '0.4' }}>Not written to you</p>

                      </div>) : (<div>
                        {natlifikation.map((item, key) => {

                          if (item.to_user_id == localStorage.getItem("OneuserId")) {
                            return (
                              <div>
                                {/* <p style={{ marginLeft: '70%' }} onClick={() => soyaa(item.id)}>прочитал</p> */}
                                <div className="taxrirlash_chad">
                                  <div className="taxrirlash_chad_img_size">
                                    <img src={item.image} alt="" />

                                  </div>
                                  <div className="taxrirlash_chad_size">
                                    <div className="taxrirlash_chad_vaqt">
                                      <h1>{item.username}</h1>
                                      <div className="taxrirlash_chad_vaqt_soat">
                                        <TbPointFilled className="chad_set" />
                                        <p >{item.time_create.slice(11, 16)}</p>
                                      </div>


                                    </div>
                                    <div className="taxrirlash_chad_text">
                                      <p>{item.last_name}</p>
                                    </div>
                                  </div>
                                </div>

                                <p >{item.time_create.slice(0, 10)}</p>
                              </div>

                            )
                          }
                        })}</div>

                    )}
                  </div>

                  <a className="wiewu" style={natlifikation.length === 0 ? { display: "none" } : { display: "flex" }} href="/WiewAll"> <div className="taxrirlash_chad_barchasini">
                    <p>
                      view all
                      <AiOutlineRight />
                    </p>
                  </div></a>
                </div>

              </div>
            </div>
          </div>
          <div className="profil_notifacation_size">

            <div className="div-admin-sms">
              <h5>SMS</h5>
              <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>
            </div>
            <div className="sms-insta">
              <div className="sms-insto-bb1">
                {natlifikation.map(item => {
                  if (item.to_user_id == localStorage.getItem("OneuserId")) {
                    return (
                      <div className="sms-insta-block">
                        <div className="sms-img">
                          <img src={"https://markazback2.onrender.com/" + item.image} alt="" />
                        </div>
                        {/* <div className="sms-kotta-pas">
                        <div className="sms-text-tepa"><p> </p><p></p></div>
                        <div className="sms-text-pas"><p> </p></div>
                      </div> */}

                        <div className="sms_bos">
                          <div className="nik_name">
                            <p>{item.title}</p>
                          </div>
                          <div className="sms_nik">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })}





              </div>
            </div>

            <div className="div-admin-sms">
              <h5>SMS</h5>
              <div
                onClick={() => notificationClose()}
                className="profil_notifacation_size_close"
              >
                <GrClose className="closei" />
              </div>
            </div>
            <div className="sms-insta">
              <div className="sms-insto-bb1">



                <div className="sms-insta-block">
                  <div className="sms-img">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/user-1024.png"
                      alt=""
                    />
                  </div>

                  <div className="sms-kotta-pas">
                    <div className="sms-text-tepa">
                      <p>
                        boxodirov_025 • now{" "}
                        <span>
                          <box-icon type="solid" name="bell-ring"></box-icon>
                        </span>
                      </p>
                    </div>
                    <div className="sms-text-pas">
                      <p>Sent an sms to: Salom</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="profil-qora-qiladi"></div>
        </div>
      </div>
      <div>
        <div className="gray_blok">
          <div className="fil_text_blok">

            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(1)} style={toggle === 1 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>My courses</h1>{toggle === 1 ? (<div className="fil_text_blok_kurs_lenght">{kursdata.length} pieces</div>) : ("")}</div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(0)} style={toggle === 0 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>Education</h1>{toggle === 0 ? (<div className="fil_text_blok_kurs_lenght">{education.length} pieces</div>) : ("")}</div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(2)} style={toggle === 2 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>Chat</h1></div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(3)} style={toggle === 3 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>Tasks</h1>{toggle === 3 ? (<div className="fil_text_blok_kurs_lenght">{localStorage.getItem("stTasks")} pieces</div>) : ("")}</div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(7)} style={toggle === 7 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>Test</h1></div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(4)} style={toggle === 4 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>My subscribtions</h1>{toggle === 4 ? ("") : ("")}</div>
            <div className='fil_text_blok_soz'><h1 onClick={() => updatetoggle(5)} style={toggle === 5 ? { borderBottom: "2px solid #44bef1" } : {}} className='fromLeft'>Courses</h1>{toggle === 5 ? (<div className="fil_text_blok_kurs_lenght">{courses.length}  pieces</div>) : ("")}</div>
          </div>
          <div className="profil_blok_menu_size">
            <TiThMenu onClick={() => menuModal()} className='profil_blok_menu' />
            <TiThMenu onClick={() => menuModalClone()} className='profil_blok_menu_clone' />
          </div>
          <div className="profil_modal_media">
            <h1 onClick={() => updatetoggle(1)} className='fromMenu'>My courses</h1>
            <h1 onClick={() => updatetoggle(2)} className='fromMenu'>Chat</h1>
            <h1 onClick={() => updatetoggle(3)} className='fromMenu'>Tasks</h1>
            <h1 onClick={() => updatetoggle(7)} className='fromMenu'>Test</h1>
            <h1 onClick={() => updatetoggle(4)} className='fromMenu'>My subscribtions</h1>
            <h1 onClick={() => updatetoggle(5)} className='fromMenu'>My subscribers</h1>
          </div>
        </div>

        <div className={toggle === 1 ? "show-content" : "content"}><div>
          <div className="Filter">
            <div className="blur_blok">
              <div className="inp_blok">
                <input
                  onChange={searchInput}
                  id="search"
                  type="text"
                  placeholder="Search among my courses"
                />
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
                  {courstype.length === 0 ? (
                    <div className="delete_padding1">
                      <img src={Groupimg} alt="" />
                      <h4 style={{ fontSize: '30px', opacity: '0.3' }}>Our courses are not yet</h4>

                    </div>) : (<>   {courstype.map((item) => {
                      return (
                        <div className="button_filter_kurs">
                          {item.name === null ? (
                            ""
                          ) : (
                            <div
                              onClick={() => filter(item.id)}
                              className="div_kurs"
                              style={{ paddingBottom: "5px" }}
                            >
                              {item.name}
                            </div>
                          )}
                        </div>
                      );
                    })}</>)}

                </div>
              </div>
            </div>
          </div>
          <div className="kurs_cards">
            {kursdata.length === 0 ? (
              <div className="delete_padding1">
                <img src={Groupimg} alt="" />
                <h4 style={{ fontSize: '30px', opacity: '0.3' }}>You didn't buy the course</h4>
                <div className="delete_btns">
                  <a href="/Ourcourse">
                    {" "}
                    <button
                      style={{ background: "#44bef1  " }}
                      className="delete_btn_yes"
                    >
                      Buy a course
                    </button>
                  </a>
                </div>
              </div>
            ) : kursdata.map(item => {
              // localStorage.setItem("for_course", kursdata.length)
              return (
                <div onClick={() => { window.location = "/video"; localStorage.setItem("abbas", item.id) }} className="kurs_card">
                  <img src={item.image} alt="" />
                  <div className="kurs_paddaing_auto">
                    <h4>{item.name}</h4>
                    <div className="star_card">
                      {item.star === 1 ? (<div><i className='bx bxs-star' ></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i>
                      </div>) : (item.star === 2 ? (<div><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i></div>) :
                        (item.star === 3 ? (<div><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bx-star'></i><i className='bx bx-star'></i></div>) :
                          (item.star === 4 ? (<div><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bx-star'></i></div>) :
                            (item.star === 5 ? (<div><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i><i className='bx bxs-star' ></i></div>) : (<div><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i><i className='bx bx-star'></i></div>)))))}
                      <p>
                        {item.star === null ? ("0") : (item.star)}<span>(524)</span>
                      </p>
                    </div>
                    <div className="hajm">
                      <h5>
                        <p>Course size</p>
                        {item.planned_time}
                      </h5>
                      <h5>
                        <p>Course price</p>
                        {item.price}$
                      </h5>
                    </div>
                  </div>
                  <button className="button_circle">
                    <AiOutlineArrowRight onClick={() => { window.location = "/video"; localStorage.setItem("abbas", item.id) }} />
                  </button>
                </div>

              )

            })}

          </div>


        </div></div><div className={toggle === 7 ? "show-content" : "content"}>
          <Testpage />
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}><UserChat /></div>
        <div className={toggle === 0 ? "show-content" : "content"}>
          <Education />

        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div className="m_dobavit_kurs">
            <button onClick={() => openModal()}>Add task</button>
          </div>
          <div className="m_zadach">
            {stTasks.length === 0 ? (
              <div className="delete_padding1">
                <img src={Team} alt="" />
                <h4 style={{ fontSize: '50px', marginTop: '-100px', opacity: '0.3' }}>No tasks</h4>
              </div>) : (<>   {stTasks.map(item => {
                // localStorage.setItem("taskLength", stTasks.length)
                return (
                  <div>
                    <div className="m_zadach_block">
                      <div className="fors_imagesa">
                        {item.image ? (<img className='jony_foto' src={img_for_null} alt="" />) : (<img src={`${url}/` + item.image} alt="" />)}</div>
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


                    <div className="m_zadacha_tepadan">
                      <div className="m_zadachi_dobavit">
                        <div className="m_clouse_x" onClick={() => clouseModal()}>
                          <GrFormClose /></div>
                        <div className="m_input_file_dobavit">
                          <div className="a_input_file12">
                            <FiDownload /> Add task
                          </div>
                          <input type="file" className='img_inp_zadac' />
                        </div><br />
                        <div className="m_input_bilmafim">
                          <label htmlFor="">Name:</label>
                          <input type="text" name="" id="" className='inp_name_zadac' />
                          <label htmlFor="">Course theme:</label>
                          <input type="text" name="" id="" className='inp_course_theme_zadac' />
                          <label htmlFor="">Time create:</label>
                          <input type="date" name="" id="" className='inp_bdate_zadac' />
                          <label htmlFor="">Time update:</label>
                          <input type="date" name="" id="" className='inp_tdate_zadac' />
                          <label htmlFor="">Mark:</label>
                          <input type="text" name="" id="" className='inp_mark_zadac' />
                          <label htmlFor="">Feedback:</label>
                          <textarea placeholder='Description' name="" id="" cols="30" rows="10" className='inp_ops_zadac'></textarea> <br />
                          <div className="a_button_for_end">
                            <button onClick={() => { postforzadac() }}>Add</button>
                          </div>
                        </div>
                      </div>
                    </div>






                  </div>)
              })}</>)}



          </div>
          <div id='zadaca_put' className="m_zadacha_tepadan">

            <div id='zadac_put_card' className="m_zadachi_dobavit">
              <div className="m_clouse_x" onClick={() => clouseput()}>
                <GrFormClose /></div>
              <div className="m_input_file_dobavit">
                <div className="a_input_file12">
                  <FiDownload /> Add task
                </div>
                <input type="file" className='img_inp_zadacput' />
              </div><br />
              <div className="m_input_bilmafim">
                <label htmlFor="">Name:</label>
                <input type="text" name="" id="" className='inp_name_zadacput' />
                <label htmlFor="">Course theme:</label>
                <input type="text" name="" id="" className='inp_course_theme_put' />
                <label htmlFor="">Time create:</label>
                <input type="date" name="" id="" className='inp_bdate_zadacput' />
                <label htmlFor="">Time update:</label>
                <input type="date" name="" id="" className='inp_tdate_zadacput' />
                <label htmlFor="">Mark:</label>
                <input type="text" name="" id="" className='inp_mark_zadacput' />
                <label htmlFor="">Feedback:</label>
                <textarea placeholder='Description' name="" id="" cols="30" rows="10" className='inp_ops_zadacput'></textarea> <br />
                <div className="a_button_for_end">
                  <button onClick={() => dashedput()}>Add</button>
                </div>
              </div>
            </div>
          </div>
          <div className="m_zadacha_tepadan1">

            <div className="m_zadachi_dobavit">
              <div className="m_clouse_x" onClick={() => clouseModal1()}><GrFormClose /></div>
              <div className="m_input_file_dobavit">
                <div className="a_input_file12">Change image </div>
                <input type="file" />
              </div>
              <div className="m_input_bilmafim">
                <select name="" id="select1">
                  <option value="">Otash bilad</option>
                </select>
                <textarea placeholder='Edid description' name="" id="" cols="30" rows="10"></textarea>
                <div className="a_button_for_end"><button>Change</button></div>
              </div>
            </div>
          </div>
          <div className="m_delete_tepadan2">
            <div className="a_delete_bgc">
              <div className="for_center">
                <img src={Groupimg} alt="" />
                <h4>Do you really want to delete?</h4>
                <div className="a_delete_button">
                  <button className='a_delete_no' onClick={() => clouseModal2()}>Not</button>
                  <button onClick={() => deletetask()}
                    className="a_delete_yes">Yes</button>
                </div>
              </div>
            </div>
          </div>


        </div>





        <div className={toggle === 4 ? "show-content" : "content"}>
          <div className='followi1'>


            <div className="followcards1">
              {follow.length !== 0 ? (
                <div className="delete_padding1">
                  <img style={{ width: '400px' }} src={Following_img} alt="" />
                  <h4 style={{ fontSize: '30px', opacity: '0.3' }}>No subscribers</h4>
                  {/* <div className="delete_btns">
                            <a href="/Ourcourse">  <button style={{ background: '#44bef1  ' }} className="delete_btn_yes">Купить курс</button></a>
                        </div> */}
                </div>) : (<div>
                  {follow.map((item, key) => {
                    if (following == item.minuser) {
                      return <div>
                        {users.map(item1 => {

                          if (item1.id == item.topuser) {
                            return (
                              <a>
                                <div id='col_12' className="col-12 col-sm-6 col-md-4 col-lg-3">
                                  <div className="our-team">
                                    <div className="picture">
                                      {item1.image === null ? (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDQxJomerNcXJqX7IQeLmKbFUA7U5JLanCEW23p8p52ZWtq3gcOcQEB4v_HegvorxeZM&usqp=CAU" />) : (<img className="img-fluid" src={item1.image} />)}
                                    </div>
                                    <div className="team-content">
                                      <h3 style={{ lineHeight: "70px" }} className="name">{item1.username}</h3>
                                    </div>
                                    <center><ul className="social">
                                      <button style={{ background: "gray" }} onClick={() => folowcolor1(item.id)} className='followButton5' >Subscribed</button>
                                    </ul></center>
                                  </div>
                                </div>
                              </a>


                            )
                          }
                        })}
                      </div>
                    }
                  })}
                </div>)}




            </div>
          </div>
        </div>
        <div className={toggle === 5 ? "show-content" : "content"}>
          <Ourcourse />
        </div>
      </div>

      <div className="profil_notifacation_size">

        {/* <div className="admin">
            <h4>Sms</h4>
            <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>

          </div> */}

        <div className="div-admin-sms">
          <h5>SMS</h5>
          <div onClick={() => notificationClose()} className="profil_notifacation_size_close"><GrClose className='closei' /></div>
        </div>
        <div className="sms-insta">
          <div className="sms-insto-bb1">
            {natlifikation.map(item => {
              if (item.to_user_id == localStorage.getItem("OneuserId")) {
                return (
                  <div className="sms-insta-block">
                    <div className="sms-img">
                      <img src={"https://markazback2.onrender.com/" + item.image} alt="" />
                    </div>
                    {/* <div className="sms-kotta-pas">
                        <div className="sms-text-tepa"><p> </p><p></p></div>
                        <div className="sms-text-pas"><p> </p></div>
                      </div> */}

                    <div className="sms_bos">
                      <div className="nik_name">
                        <p>{item.title}</p>
                      </div>
                      <div className="sms_nik">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              }
            })}





          </div>
        </div>


      </div>
      <div className="profil-qora-qiladi"></div>


      <Futer />
    </div>

  )

}
