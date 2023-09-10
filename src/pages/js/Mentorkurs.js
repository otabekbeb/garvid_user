import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import KursClose from "../img/Course app-rafiki.png";
import ThemeClose from "../img/Webinar-pana.png";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { AiOutlineArrowRight,AiFillFolderAdd,AiOutlinePlus,AiFillPlayCircle } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { TbHomeInfinity, TbPointFilled } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";
import Swal from "sweetalert2";
import "../css/Spiska.css";
import { Modal } from 'antd';
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import { MdOutlineClose, MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import url from "./Host";
import Edit from "./Edit";
import Delete from "./Delete";
import Groupimg from "../img/Group 2.png";
import img_for_null from "../img/download.png";
import Form from "react-bootstrap/Form";
import { FiDownload, FiEdit2 } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import rafiki from "../img/Course app-pana.png";

export default function Searchfilter() {
  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();
  const [courstype, setCoursetype] = useState([]);
  const [homiy, setHomiy] = useState([]);
  const [CourseId, setCourseId] = useState();
  const [deleteId, setDeleteId] = useState();
  const [delete1, setDelete1] = useState([]);
  const [oneuser, setOneuser] = useState([]);
  const [pageVideo, setPageVideo] = useState(0);
  const [pageVideoId, setPageVideoId] = useState();
  const [course_theme, setCourse_theme] = useState([]);
  const [course_Category, setCourse_Category] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [themeId,setThemeId]=useState()
  const [CategoryId,setCategoryId]=useState()

  const showModal = () => {
    setIsModalOpen(true);
    document.querySelector("#course_video_error1").style="display:none"
    document.querySelector("#course_video_error").style="display:none"

  };
  const handleOk = () => {
    var formdata=new FormData()
    formdata.append("name",document.querySelector("#Category_Name").value)
    formdata.append("course",pageVideoId)

    axios.post(`${url}/api/course_data_category`,formdata,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      setIsModalOpen(false);
      document.querySelector("#course_video_error1").style="display:flex"
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});

    }).catch(err=>{
      alert("xato")
    })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    document.querySelector("#course_video_error1").style="display:flex"
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
    document.querySelector("#course_video_error1").style="display:none"
    document.querySelector("#course_video_error").style="display:none"
  };
  const handleOk1 = () => {
    var formdata=new FormData()
    formdata.append("name",document.querySelector("#Theme_Name").value)
    formdata.append("content",document.querySelector("#Theme_Content").value)
    formdata.append("image",document.querySelector("#Theme_Image").files[0])
    formdata.append("video",document.querySelector("#Theme_Video").files[0])
    formdata.append("extra_data",document.querySelector("#Theme_extra_data").value)
    formdata.append("category",document.querySelector("#Theme_category").value)

    axios.post(`${url}/api/course_data_theme`,formdata,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      setIsModalOpen1(false);
      document.querySelector("#course_video_error1").style="display:flex"
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});
    }).catch(err=>{
      alert("xato")
    })
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
    document.querySelector("#course_video_error1").style="display:flex"
  };

  const showModal2 = (item) => {
    setIsModalOpen2(true)
    setThemeId(item.id)
    document.querySelector("#course_video_error1").style="display:none"
    document.querySelector("#course_video_error").style="display:none"
    setTimeout(() => {
     document.querySelector("#Theme_Name_put").value=item.name
    document.querySelector("#Theme_Content_put").value=item.content
    document.querySelector("#Theme_extra_data_put").value=item.extra_data
    document.querySelector("#Theme_category_put").value=item.category  
    }, 1000)
   
  };
  const handleOk2 = () => {
    var formdata=new FormData()
    formdata.append("name",document.querySelector("#Theme_Name_put").value)
    formdata.append("content",document.querySelector("#Theme_Content_put").value)
    formdata.append("image",document.querySelector("#Theme_Image_put").files[0])
    formdata.append("video",document.querySelector("#Theme_Video_put").files[0])
    formdata.append("extra_data",document.querySelector("#Theme_extra_data_put").value)
    formdata.append("category",document.querySelector("#Theme_category_put").value)

    axios.put(`${url}/api/course_data_theme/${themeId}`,formdata,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      setIsModalOpen2(false);
      document.querySelector("#course_video_error1").style="display:flex"
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});
    }).catch(err=>{
      alert("xato")
    })
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
    document.querySelector("#course_video_error1").style="display:flex"
  };

  const showModal3 = (item) => {
    setIsModalOpen3(true);
    setCategoryId(item.id)
    setTimeout(()=>{
      document.querySelector("#Category_Name_put").value=item.name
    },1000)
    document.querySelector("#course_video_error1").style="display:none"
    document.querySelector("#course_video_error").style="display:none"

  };

  const handleOk3 = () => {
    var formdata=new FormData()
    formdata.append("name",document.querySelector("#Category_Name_put").value)
    formdata.append("course",pageVideoId)

    axios.put(`${url}/api/course_data_category/${CategoryId}`,formdata,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      setIsModalOpen3(false);
      document.querySelector("#course_video_error1").style="display:flex"
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});

    }).catch(err=>{
      alert("xato")
    })
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
    document.querySelector("#course_video_error1").style="display:flex"
  };

  function deleteCategory(id){
    axios.delete(`${url}/api/course_data_category/${id}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});
    }).catch(err=>{
      alert("xato")
    })
  } 





  function Filter() {
    var a = document.querySelector(".filter_button").style.display;
    if (a === "none") {
      document.querySelector(".filter_button").style = "display:block ";
    } else {
      document.querySelector(".filter_button").style = "display:none ";
    }
  }
  function filter1() {
    document.querySelector(".filter_button").style = "display:none !important";
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
    document.querySelector(".delete_card").style = "display:none";
  }

  function udalit(id) {
    setDeleteId(id);
    document.querySelector(".delete_card").style = "display:flex !important";
  }

  function dabavit(id) {
    setCourseId(id);
    document.querySelector(".edit_card").style = "display:flex !important";
    setTimeout(() => {
      axios
        .get(`${url}/api/course`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          // setKursdata(res.data)
          const filter = res.data.filter((item) => item.id == id);
          document.querySelector("#name").value = filter[0].name;
          document.querySelector("#description").value = filter[0].description;
          document.querySelector("#price").value = filter[0].price;
          document.querySelector("#planned_time").value =
            filter[0].planned_time;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10);
  }
  function nazat() {
    document.querySelector(".edit_card").style = "display:none";
  }

  function dashed_nazat2() {
    document.querySelector(".edit_card2").style = "display:none;";
  }
  function dashedOpen() {
    document.querySelector(".edit_card").style = "display:flex;";
  }

  function dashedOpen2() {
    document.querySelector(".edit_card2").style = "display: flex;";
  }

  function postformentor() {
    var formdata = new FormData();

    formdata.append("name", document.querySelector(".namePost").value);
    formdata.append(
      "description",
      document.querySelector(".descriptionPost").value
    );
    formdata.append("price", document.querySelector(".pricePost").value);
    formdata.append(
      "planned_time",
      document.querySelector(".planned_timePost").value
    );
    formdata.append("image", document.querySelector(".imagePost").files[0]);
    formdata.append("course_type", document.querySelector(".selectPost").value);
    formdata.append("author", localStorage.getItem("OneuserId"));

    axios
      .post(`${url}/api/course`, formdata, {
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

  function dashed(id) {
    var formdata = new FormData();
    formdata.append("name", document.querySelector(".nameInp").value);
    formdata.append(
      "description",
      document.querySelector(".description").value
    );
    formdata.append("price", document.querySelector(".inp_numbr1").value);
    formdata.append("planned_time", document.querySelector(".inp_numbr").value);
    formdata.append("image", document.querySelector(".inp_img").files[0]);
    formdata.append("course_type", document.querySelector(".select_opt").value);
    formdata.append("author", localStorage.getItem("OneuserId"));

    axios
      .put(`${url}/api/course/${id}`, formdata, {
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
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setKursdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //  function dashed2 (){

  //  }

  function dashed_nazat() {
    document.querySelector("#edit_card").style = "display:none";
  }

  function putCourse() {
    var formdata = new FormData();
    formdata.append("");

    axios.put(`${url}/api/course`).then((res) => {});
  }
  function deleteclose() {
    axios.delete(`${url}/api/course/${deleteId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      window.location.reload()
      document.querySelector(".delete_card").style = "display:none"
    }).catch(err => {
      Swal.fire("xato")
    })
  }

  useEffect(() => {
    document.querySelector(".filter_button").style = "display:none";
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    axios
      .get(`${url}/api/cours_types`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setCoursetype(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire("err");
      });
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const Filter = res.data.filter(
          (item) => item.author == localStorage.getItem("OneuserId")
        );
        setKursdata(Filter);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  function filter(id) {
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const search = res.data.filter(
          (item) =>
            item.course_type === id &&
            item.author == localStorage.getItem("OneuserId")
        );
        setKursdata(search);
      });
  }
  const searchInput = (event) => {
    const searchRegex = new RegExp(`^${event.target.value}`, "i");
    axios
      .get(`${url}/api/course`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const searchdata = res.data.filter((item) => {
          return searchRegex.test(item.name);
        });
        setKursdata(searchdata);
      })
      .catch((err) => {});
  };

  axios
    .get(`${url}/api/homiy`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => {
      setHomiy(res.data);
      console.log(res.data);
    });

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

  // const ratingItemsList = document.querySelectorAll(".star_i");
  // const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

  // ratingItemsArray.forEach(item =>
  //   item.addEventListener("click", () => {
  //     const { itemValue } = item.dataset;
  //     item.parentNode.dataset.totalValue = itemValue;
  //   })
  // );

  // item.dataset.

  function videoPage1(item) {
    axios
      .get(`${url}/api/course_data_category/course/${item.id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
          setPageVideoId(item.id)
          document.querySelector("#course_video_error1").style = "display:flex";
      });
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==item.id)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});
      
  }

  function videoPage(item) {
    axios
      .get(`${url}/api/course_data_category/course/${item.id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
            if(res.data.one==null){
              document.querySelector("#course_video_error").style = "display:flex";
            }else{
              window.location = "/video";
              localStorage.setItem("abbas", item.id);
            }
            
          })
  }

  function deleteTheme(id){
    axios.delete(`${url}/api/course_data_theme/${id}`,{
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }).then(res=>{
      axios
      .get(`${url}/api/course_data_category`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        const Filter=res.data.filter(category=>category.course==pageVideoId)
        setCourse_Category(Filter)
        axios
      .get(`${url}/api/course_data_theme`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res1) => {
        var a=[]
        for (let i = 0; i < Filter.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
          if (Filter[i].id==res1.data[j].category) {
            a.push(res1.data[j])
          }
          }
        }
        setCourse_theme(a);
      })
      .catch((err) => {});
      })
      .catch((err) => {});
    }).catch(err=>{
      Swal.fire("xato")
    })
  }


  return (
    <div>
      <div>
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
                {courstype.map((item) => {
                  return (
                    <div className="button_filter_kurs">
                      {item.name === null ? (
                        ""
                      ) : (
                        <div
                          onClick={() => filter(item.id)}
                          className="div_kurs"
                        >
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="kurs_cards" style={{ display: "flex" }}>
          {kursdata.length === 0 ? (
            <div className="rafiki_img_course">
              <img src={rafiki} alt="" />
              <h3>You have not created a course yet</h3>
              <button onClick={() => dashedOpen2()}>Create course</button>
            </div>
          ) : (
            kursdata.map((item) => {
              // localStorage.setItem("courseLength", kursdata.length)
              return (
                <div  className="kurs_card">
                  <img onClick={()=>videoPage(item)} src={item.image} alt="" />
                  <div className="kurs_paddaing_auto">
                    <h4>{item.name}</h4>
                    <div className="fors_pp">
                              {item.star == 1 ? (
                                <div  style={{ display: "flex", gap: "5px" }}>
                                  {" "}
                                  <div className="star_card">
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#FFD401" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                    <i className="star_i">
                                      <AiFillStar
                                        style={{ color: "#9DA7BB" }}
                                      />
                                    </i>
                                  </div>
                                  <p style={{ fontSize: "16px" }}>
                                    {item.star}
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  {item.star == 2 ? (
                                    <div
                                      style={{ display: "flex", gap: "5px" }}
                                    >
                                      <div className="star_card">
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#FFD401" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#FFD401" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                        <i className="star_i">
                                          <AiFillStar
                                            style={{ color: "#9DA7BB" }}
                                          />
                                        </i>
                                      </div>
                                      <p style={{ fontSize: "16px" }}>
                                        {item.star}
                                      </p>
                                    </div>
                                  ) : (
                                    <div>
                                      {item.star === 3 ? (
                                        <div
                                          style={{
                                            display: "flex",
                                            gap: "5px",
                                          }}
                                        >
                                          <div className="star_card">
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#FFD401" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#9DA7BB" }}
                                              />
                                            </i>
                                            <i className="star_i">
                                              <AiFillStar
                                                style={{ color: "#9DA7BB" }}
                                              />
                                            </i>
                                          </div>
                                          <p style={{ fontSize: "16px" }}>
                                            {item.star}
                                          </p>
                                        </div>
                                      ) : (
                                        <div>
                                          {item.star == 4 ? (
                                            <div
                                              style={{
                                                display: "flex",
                                                gap: "5px",
                                              }}
                                            >
                                              <div className="star_card">
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#FFD401" }}
                                                  />
                                                </i>
                                                <i className="star_i">
                                                  <AiFillStar
                                                    style={{ color: "#9DA7BB" }}
                                                  />
                                                </i>
                                              </div>{" "}
                                              <p style={{ fontSize: "16px" }}>
                                                {item.star}
                                              </p>
                                            </div>
                                          ) : (
                                            <div>
                                              {item.star == 5 ? (
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    gap: "5px",
                                                  }}
                                                >
                                                  <div className="star_card">
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                    <i className="star_i">
                                                      <AiFillStar
                                                        style={{
                                                          color: "#FFD401",
                                                        }}
                                                      />
                                                    </i>
                                                  </div>
                                                  <p
                                                    style={{ fontSize: "16px" }}
                                                  >
                                                    {item.star}
                                                  </p>
                                                </div>
                                              ) : (
                                                <div>
                                                  {item.star === null ? (
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        gap: "5px",
                                                      }}
                                                    >
                                                      <div className="star_card">
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                        <i className="star_i">
                                                          <AiFillStar
                                                            style={{
                                                              color: "#9DA7BB",
                                                            }}
                                                          />
                                                        </i>
                                                      </div>{" "}
                                                      <p
                                                        style={{
                                                          fontSize: "16px",
                                                        }}
                                                      >
                                                        0
                                                      </p>
                                                    </div>
                                                  ) : (
                                                    ""
                                                  )}{" "}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
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
                  <div className="edit_icon" onClick={() => dabavit(item.id)}>
                    <Edit />
                  </div>

                  <div className="edit_card">
                    <div className="edit_padding">
                      <button onClick={() => nazat()} className="close_btn">
                        <i>
                          <GrFormClose />
                        </i>
                      </button>
                      <div className="edit_inside">
                        <label htmlFor="">Name:</label>
                        <input id="name" className="nameInp" type="text" />
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Description:</label>
                        <input
                          id="description"
                          className="description"
                          type="text"
                        />
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Price:</label>
                        <input
                          id="price"
                          type="number"
                          className="inp_numbr1"
                        />
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Planned time:</label>
                        <input
                          id="planned_time"
                          type="number"
                          className="inp_numbr"
                        />
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Course type:</label>
                        <Form.Select
                          className="select_opt"
                          aria-label="Default select example"
                        >
                          {courstype.map((item) => {
                            return <option value={item.id}>{item.name}</option>;
                          })}
                        </Form.Select>
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Sponsor:</label>
                        <Form.Select
                          className="select_opt"
                          aria-label="Default select example"
                        >
                          <option value="0">not</option>
                          {homiy.map((item) => {
                            return (
                              <option value={item.id}>{item.title}</option>
                            );
                          })}
                        </Form.Select>
                      </div>
                      <div className="edit_inside">
                        <label htmlFor="">Image:</label>
                        <input id="image" type="file" className="inp_img" />
                        <div className="inp_img_div">
                          <FiDownload /> Select image
                        </div>
                      </div>
                      <button
                        className="edit_inside_btn"
                        onClick={() => dashed(item.id)}
                      >
                        Send
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => udalit(item.id)}
                    className="delete_icon"
                  >
                    <i>
                      <Delete />
                    </i>
                  </button>
                  <div className="delete_card">
                    <div className="delete_padding">
                      <img src={Groupimg} alt="" />
                      <h4>Do you really want to delete?</h4>
                      <div className="delete_btns">
                        <button
                          onClick={() => close()}
                          className="delete_btn_no"
                        >
                          Not
                        </button>
                        <button
                          className="delete_btn_yes"
                          onClick={() => deleteclose()}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="button_circle"
                    onClick={() => videoPage1(item)}
                  >
                    <AiFillPlayCircle />
                  </button>
                </div>
              );
            })
          )}

          {kursdata.length === 0 ? (
            ""
          ) : (
            <div className="dashed" onClick={() => dashedOpen2()}>
              <i>
                <AiOutlinePlus />
              </i>
            </div>
          )}

          <div className="edit_card2" style={{ display: "none" }}>
            <div className="edit_padding">
              <button onClick={() => dashed_nazat2()} className="close_btn">
                <i>
                  <GrFormClose />
                </i>
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
                <Form.Select
                  className="selectPost"
                  aria-label="Default select example"
                >
                  {courstype.map((item) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </Form.Select>
              </div>
              <div className="edit_inside">
                <label htmlFor="">Sponsor:</label>
                <Form.Select
                  className="select_opt"
                  aria-label="Default select example"
                >
                  <option value="0">not</option>
                  {homiy.map((item) => {
                    return <option value={item.id}>{item.title}</option>;
                  })}
                </Form.Select>
              </div>
              <div className="edit_inside">
                <label htmlFor="">Image:</label>
                <input className="imagePost" type="file" />
                <div className="inp_img_div">
                  <FiDownload /> Select image
                </div>
              </div>
              <button
                className="edit_inside_btn"
                onClick={() => {
                  postformentor();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="course_video_error1" className="Modal_big_div_video_error1">
        <div className="Modal_big_div_video_error_div">
          <div className="Modal_big_div_video_error_div_close">
            <MdOutlineClose
              onClick={() => {
                document.querySelector("#course_video_error1").style =
                  "display:none";
              }}
            />
          </div>
          <div className="Modal_big_div_video_error_div_button">
          <button
              style={
                pageVideo == 0 ? { background: "#44bef1", color: "#fff" } : {}
              }
              onClick={() => {
                setPageVideo(0);
              }}
            >
              Category
            </button>  
          <button
              style={
                pageVideo == 1 ? { background: "#44bef1", color: "#fff" } : {}
              }
              onClick={() => {
                setPageVideo(1);
              }}
            >
              Theme
            </button>
          </div>
          {pageVideo == 1 ? (
            <>
            <div style={{display:'flex',justifyContent:'start',width:'100%'}}>
            <AiFillFolderAdd onClick={()=>showModal1()}  className="AiFillFolderAdd"/>
            </div>
            <div
              style={{ height: "300px" ,overflowY:'scroll',boxShadow:'initial 5px 5px 4px 4px grey'}}
            >
              {course_theme.length==0?(
                <img src={ThemeClose} alt="" />
              ):(
                <>
                {course_theme.map((item) => {
                  return (
                    <div className="Modal_big_div_video_error_div_theme">
                      <p>{item.name}</p>
                      <div className="Modal_big_div_video_error_div_theme_button">
                        <FiEdit2 onClick={()=>showModal2(item)} className="button" />
                        <MdOutlineDelete onClick={()=>deleteTheme(item.id)} className="button" />
                      </div>
                    </div>
                  );
                })}
                </>
              )}
            </div>
            <Modal  title="Theme" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
            <p style={{marginBottom:"0px"}}>Name</p>
            <input className="input_Video" id="Theme_Name" type="text" />
            <p style={{marginBottom:"0px"}}>Content</p>
            <input className="input_Video" id="Theme_Content" type="text" />
            <p style={{marginBottom:"0px"}}>Image</p>
            <input className="input_Video" id="Theme_Image" type="file" />
            <p style={{marginBottom:"0px"}}>Video</p>
            <input className="input_Video" id="Theme_Video" type="file" />
            <p style={{marginBottom:"0px"}}>Extra_data</p>
            <input className="input_Video" id="Theme_extra_data" type="text" />
            <p style={{marginBottom:"0px"}}>Category</p>
            <select className="input_Video" name="" id="Theme_category">
            {course_Category.map(item=>{
             return<option value={item.id}>{item.name}</option>
            })}
            </select>
            </Modal>
            <Modal  title="Theme" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
            <p style={{marginBottom:"0px"}}>Name</p>
            <input className="input_Video" id="Theme_Name_put" type="text" />
            <p style={{marginBottom:"0px"}}>Content</p>
            <input className="input_Video" id="Theme_Content_put" type="text" />
            <p style={{marginBottom:"0px"}}>Image</p>
            <input className="input_Video" id="Theme_Image_put" type="file" />
            <p style={{marginBottom:"0px"}}>Video</p>
            <input className="input_Video" id="Theme_Video_put" type="file" />
            <p style={{marginBottom:"0px"}}>Extra_data</p>
            <input className="input_Video" id="Theme_extra_data_put" type="text" />
            <p style={{marginBottom:"0px"}}>Category</p>
            <select className="input_Video" name="" id="Theme_category_put">
            {course_Category.map(item=>{
             return<option value={item.id}>{item.name}</option>
            })}
            </select>
            </Modal>
            </>
          ) : (
            <>
            <div style={{display:'flex',justifyContent:'start',width:'100%'}}>
            <AiFillFolderAdd onClick={()=>showModal()}  className="AiFillFolderAdd"/>
            </div>
            <div
              style={{ height: "300px" ,overflowY:'scroll',boxShadow:'initial 5px 5px 4px 4px grey'}}
            >
              {course_Category.length==0?(
              <img src={KursClose} alt="" />
              ):(
              <>
              {course_Category.map((item) => {
                  return (
                  <div className="Modal_big_div_video_error_div_theme">
                    <p>{item.name}</p>
                    <div className="Modal_big_div_video_error_div_theme_button">
                      <FiEdit2 onClick={()=>showModal3(item)} className="button" />
                      <MdOutlineDelete onClick={()=>deleteCategory(item.id)} className="button" />
                    </div>
                  </div>
                  ); 
              })}
              </>
              )}
              
            </div>
          <Modal  title="Category" open={isModalOpen} onOk={handleOk}     onCancel={handleCancel}>
            <p style={{marginBottom:"0px"}}>Name</p>
            <input className="input_Video" id="Category_Name" type="text" />
          </Modal>
          <Modal  title="Category" open={isModalOpen3} onOk={handleOk3}     onCancel={handleCancel3}>
          <p style={{marginBottom:"0px"}}>Name</p>
          <input className="input_Video" id="Category_Name_put" type="text" />
           </Modal>
            </>
          )}
        </div>
      </div>
      <div id="course_video_error" className="Modal_big_div_video_error">
      <div className="Modal_big_div_video_error_div">
        <div className="Modal_big_div_video_error_div_close">
          <MdOutlineClose
            onClick={() => {
              document.querySelector("#course_video_error").style =
                "display:none";
            }}
          />
        </div>
        <img src={KursClose} alt="" />
        <p>К сожалению, к этому курсу не прикреплено видео.</p>
      </div>
    </div>
    </div>
  );
}
