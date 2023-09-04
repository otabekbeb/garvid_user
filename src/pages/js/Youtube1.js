import React, { useEffect, useState, useRef } from "react";
import img_kotta from "../img/Rectangle.png";
import img_ava from "../img/Ellipse.png";
import img_accordion from "../img/Rectangle 14.1.svg";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import "../css/youtube1.css";

import Usernavbar from "../js/Navbar";
import Loader from "./loader";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import err from "../img/istockphoto-1321436405-612x612.jpg";
import novideo from "../img/download.svg";
import Create_Theme_Category_mentor from "./Create_Theme_Category_mentor.js";
import "../css/comment.css";
import { FiCornerUpLeft } from "react-icons/fi";
import { FcFile } from "react-icons/fc";
import img_comment from "../img/Ellipse.jpg";
import img_comment1 from "../img/Ellipse.png";
import axios from "axios";
import url from "./Host";
import Swal from "sweetalert2";
import person from "../img/149071.png";
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import { AiOutlineComment, AiOutlineDelete } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import anonim from "../img/anonim-user.png";
import Footer1 from "./Footer1.js";
import ReactPlayer from "react-player";
import "../css/vazifa1.css";
import "../css/yozishmalar.css";
import { TfiMarkerAlt } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import mark_img from "../img/evaluation_of_education_300.jpg";
import { Accordion } from "react-bootstrap";
import Profil from "./Profil";
import Create_theme_mentor from "./Create_theme_mentor";
import { async } from "q";

export default function Youtube1() {
  const [id, setId] = useState(1);
  const [category, setCategory] = useState([]);



  const [main, setMain] = useState([]);
  const [main1, setMain1] = useState(
    JSON.parse(localStorage.getItem("Idvideo"))
  );

  const [state1, setState1] = React.useState();
  const [loader, setLoader] = useState(1);
  const [task_comnet_id, setTask_comnet_id] = useState(0);
  const [page5, setPage5] = useState(1);
  const [comment, setComment] = useState([]);
  const [comment2, setComment2] = useState([]);
  const [subcoment, setSubcoment] = useState(0);
  const [oneuser, setOneuser] = useState([]);

  const [teacherwork, setTeacherwork] = useState([]);
  const [commenttask, setCommenttask] = useState([]);
  const [comment5, setComment5] = useState([]);
  const [task, setTask] = useState([]);
  const [mark, setMark] = useState([]);
  const [page, setPage] = useState(1);
  const [page1, setPage1] = useState(1);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startAt, setStartAt] = useState(0);
  const playerRef = useRef(null);

  const handleDuration = (duration) => {
    const OneuserId = parseInt(localStorage.getItem("OneuserId"));
    const { id } = JSON.parse(localStorage.getItem("page_video"));
    const token = localStorage.getItem("token");

    axios
      .get(`${url}/api/student_theme/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const filteredItem = res.data.find(
          (item) => item.theme_id === id && item.student_id === OneuserId
        );
        const percentWatched = filteredItem ? filteredItem.complate : 0;
        const secondsWatched = (percentWatched * duration) / 100;
        setStartAt(secondsWatched);
      });

    setVideoDuration(duration);
  };

  const handleProgress = (progress) => {
    const OneuserId = parseInt(localStorage.getItem("OneuserId"));
    const { id } = JSON.parse(localStorage.getItem("page_video"));
    const token = localStorage.getItem("token");
    setCurrentTime(progress.playedSeconds);
    const percentWatched = Math.floor(progress.played * 100);

    if (percentWatched % 10 === 0) {
      // alert(`Вы просмотрели ${percentWatched}% видео`);

      axios
        .get(`${url}/api/student_theme/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const filteredItem = res.data.find(
            (item) => item.theme_id === id && item.student_id === OneuserId
          );

          if (!filteredItem || percentWatched > filteredItem.complate) {
            const formData = new FormData();
            formData.append("student_id", OneuserId);
            formData.append("theme_id", id);
            formData.append("complate", percentWatched);

            if (!filteredItem) {
              axios
                .post(`${url}/api/student_theme/`, formData, {
                  headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                  console.log("work");
                  console.log(filteredItem);
                  console.log(OneuserId);
                  console.log(id);
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              axios
                .put(
                  `${url}/api/student_theme/complate/${filteredItem.id}`,
                  formData,
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  }
                )
                .then((res) => {
                  console.log("work");
                  console.log(filteredItem);
                  console.log(OneuserId);
                  console.log(id);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };




  useEffect(() => {
    const idget = JSON.parse(localStorage.getItem("page_video"));
    axios
      .get(`${url}/api/course_theme_comment`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        var mycoment = res.data.filter((item) => item.theme == idget.id);
        
        axios
          .get(`${url}/auth/allusers`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res3) => {
         
            for (let i = 0; i < mycoment.length; i++) {
              mycoment[i].username = "Ananim User";
              mycoment[i].image1 = "";
              for (let j = 0; j < res3.data.length; j++) {
                if (res3.data[j].id == mycoment[i].user_id) {
                  mycoment[i].username = res3.data[j].username;
                  mycoment[i].image1 = res3.data[j].image;
                }
              }
            }

            var onlycoment = mycoment.filter(
              (item) => (item.subcomment==0&&item.task_commnet_id == 0)
            );
            var all_task = mycoment.filter((item) => item.task_commnet_id != 0);

            axios
              .get(`${url}/api/course_theme_task_student`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res1) => {
                for (let i = 0; i < all_task.length; i++) {
                  all_task[i].mark = 0;
                  for (let j = 0; j < res1.data.length; j++) {
                    if (all_task[i].id == res1.data[j].feedback) {
                      all_task[i].mark = res1.data[j].mark;
                    }
                  }
                }
                
                setComment(onlycoment);
                setCommenttask(all_task);
              })
              .catch((err) => {
                console.log("123");
              });
          });
      })
      .catch((err) => {
        console.log("1223");
      });
  }, []);
  // Abbas subcomnet
function getSubcoment(id){
  const idget = JSON.parse(localStorage.getItem("page_video"));
  axios
    .get(`${url}/api/course_theme_comment`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      var mycoment = res.data.filter((item) => item.theme == idget.id);
      
      axios
        .get(`${url}/auth/allusers`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res3) => {
       
          for (let i = 0; i < mycoment.length; i++) {
            mycoment[i].username = "Ananim User";
            mycoment[i].image1 = "";
            for (let j = 0; j < res3.data.length; j++) {
              if (res3.data[j].id == mycoment[i].user_id) {
                mycoment[i].username = res3.data[j].username;
                mycoment[i].image1 = res3.data[j].image;
              }
            }
          }
          var subcomnet = mycoment.filter((item) => item.subcommnet==id);
            })
            .catch((err) => {
        });
    })
    .catch((err) => {
   
    });
}
  function openModal() {
    document.querySelector(".navbar_yon").classList.toggle("navbar_yon1");
  }
  function closeModal() {
    document.querySelector(".navbar_yon").style = "display:none;";
  }
  function painModal() {
    document.querySelector(".zadaniya").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya1").style =
      "border-bottom: none; color: #9DA7BB;";
    setTask_comnet_id(0);
  }
  function painModal1(id) {
    document.querySelector(".zadaniya1").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya").style =
      "border-bottom: none; color: #9DA7BB;";

    setTask_comnet_id(id);
  }

  //mediya

  function painModal5() {
    document.querySelector(".zadaniya5").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya6").style =
      "border-bottom: none; color: #9DA7BB;";
  }
  function painModal6() {
    document.querySelector(".zadaniya6").style =
      "border-bottom: 2px solid #44bef1; color: #2E2E2E;";
    document.querySelector(".zadaniya5").style =
      "border-bottom: none; color: #9DA7BB;";
  }

  useEffect(() => {
    localStorage.setItem("task_commnet_id", JSON.stringify(task_comnet_id));
    var id = localStorage.getItem("abbas");
    var StudentId = localStorage.getItem("OneuserId");
    axios
      .get(`${url}/api/course_data_category/course/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setMain(res.data.one ? res.data.one : []);
        setCategory(res.data.all);
        res.data.all.map((itam) => {
          itam.theme.map((itam2) => {
            var Formdata = new FormData();
            Formdata.append("student_id", StudentId);
            Formdata.append("theme_id", itam2.id);
            Formdata.append("complate", 0);
            axios
              .post(`${url}/api/student_theme/`, Formdata, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res) => {
               
              })
              .catch((err) => {
                // alert("bor ekan")
              });
          });
        });

        localStorage.setItem(
          "page_video",
          JSON.stringify(res.data.one ? res.data.one : [])
        );
        setLoader(0);
      })
      .catch((err) => {
        // console.log(err);
        // document.querySelector(".a_err_boganda").style =
        //   "display: flex;justify-content: center;align-items: center;";
      });

    //comment

    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        res.data.map((item) => {
          if (item.task_commnet_id == task_comnet_id) {
            var coment21 = res.data;
            for (let i = 0; i < res.data.length; i++) {
              var a = 0;
              for (let j = 0; j < coment21.length; j++) {
                if (res.data[i].id == coment21[j].subcomment) {
                  a = a + 1;
                }
              }
              res.data[i].count = a;
            }
            setComment(res.data);
          } else {
          }
        });

        console.log(res.data, "coment");
      })
      .catch((err) => {});

    axios
      .get(`${url}/auth/oneuser`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setOneuser(res.data);
        console.log(res.data, "salom");
      });

    //task
    axios
      .get(`${url}/api/course_theme_task`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTeacherwork(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
    {
      JSON.parse(localStorage.getItem("page_user"))[0].position == 2 ? (
        <Create_Theme_Category_mentor id1={localStorage.getItem("abbas")} />
      ) : (
        <></>
      );
    }
    axios
      .get(`${url}/auth/oneuser`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setOneuser(res.data);
        console.log(res.data, "salom");
      });
    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        var a = res.data.filter((item) => item.task_commnet_id == 1);
        setComment5(a);
      })
      .catch((err) => {});

    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
  }, []);

  function ModalCatchBolsa() {
    if (localStorage.getItem("position") == 2) {
      window.location = "/mentor";
    } else if (localStorage.getItem("position") == 1) {
      window.location = "/user";
    } else if (localStorage.getItem("position") == 4) {
      window.location = "/studentall";
    }
  }

  function MadolChange(id) {
    localStorage.setItem("Idvideo", JSON.stringify(id));
    window.location.reload();
    axios.get(`${url}/api/course_data_category/course/${id}`).then((res) => {
      setMain(res.data.one ? res.data.one : []);
      setCategory(res.data.all);
      console.log(res.data, "ali");
    });
  }
  // console.log(main1,"aom");

  //comment
  function messagePost(id) {
    var formdata = new FormData();
    formdata.append("text", document.querySelector("#chat_text").value);
    formdata.append("image", document.querySelector("#comment_file").files[0]);
    formdata.append("user_id", oneuser[0].id);
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id);
    formdata.append("subcomment", subcoment);
    formdata.append("task_commnet_id", task_comnet_id);

    axios
      .post(`${url}/api/course_theme_comment/`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            console.log("asdsad");
            axios
              .get(`${url}/auth/allusers`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res3) => {
                console.log("asdsa2");
                for (let i = 0; i < mycoment.length; i++) {
                  mycoment[i].username = "Ananim User";
                  mycoment[i].image1 = "";
                  for (let j = 0; j < res3.data.length; j++) {
                    console.log(
                      res3.data[j].id == mycoment[i].user_id,
                      res3.data[j].id,
                      mycoment[i].user_id
                    );

                    if (res3.data[j].id == mycoment[i].user_id) {
                      mycoment[i].username = res3.data[j].username;
                      mycoment[i].image1 = res3.data[j].image;
                    }
                  }
                }

                var onlycoment = mycoment.filter(
                  (item) => item.subcoment == 0 && item.task_commnet_id == 0
                );
                var all_task = mycoment.filter(
                  (item) => item.task_commnet_id != 0
                );

                axios
                  .get(`${url}/api/course_theme_task_student`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  .then((res1) => {
                    for (let i = 0; i < all_task.length; i++) {
                      all_task[i].mark = 0;
                      for (let j = 0; j < res1.data.length; j++) {
                        if (all_task[i].id == res1.data[j].feedback) {
                          all_task[i].mark = res1.data[j].mark;
                        }
                      }
                    }
                    setComment(onlycoment);
                    setCommenttask(all_task);
                  })
                  .catch((err) => {
                    console.log("123");
                  });
              });
          })
          .catch((err) => {
            console.log("1223");
          });
        document.querySelector("#chat_text").value = "";
      })
      .catch((err) => {
        Swal.fire("Error");
      });

    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setComment(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }

  function otvetPost(id) {
    var formdata = new FormData();
    formdata.append("text", document.querySelector("#chat_text1").value);
    formdata.append("image", document.querySelector("#comment_file1").files[0]);
    formdata.append("user_id", oneuser[0].id);
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id);
    formdata.append("subcomment", subcoment);
    formdata.append("task_commnet_id", task_comnet_id);

    axios
      .post(`${url}/api/course_theme_comment/`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            console.log("asdsad");
            axios
              .get(`${url}/auth/allusers`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res3) => {
                console.log("asdsa2");
                for (let i = 0; i < mycoment.length; i++) {
                  mycoment[i].username = "Ananim User";
                  mycoment[i].image1 = "";
                  for (let j = 0; j < res3.data.length; j++) {
                    console.log(
                      res3.data[j].id == mycoment[i].user_id,
                      res3.data[j].id,
                      mycoment[i].user_id
                    );

                    if (res3.data[j].id == mycoment[i].user_id) {
                      mycoment[i].username = res3.data[j].username;
                      mycoment[i].image1 = res3.data[j].image;
                    }
                  }
                }

                var onlycoment = mycoment.filter(
                  (item) => item.subcoment == 0 && item.task_commnet_id == 0
                );
                var all_task = mycoment.filter(
                  (item) => item.task_commnet_id != 0
                );

                axios
                  .get(`${url}/api/course_theme_task_student`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  .then((res1) => {
                    for (let i = 0; i < all_task.length; i++) {
                      all_task[i].mark = 0;
                      for (let j = 0; j < res1.data.length; j++) {
                        if (all_task[i].id == res1.data[j].feedback) {
                          all_task[i].mark = res1.data[j].mark;
                        }
                      }
                    }
                    setComment(onlycoment);
                    setCommenttask(all_task);
                  })
                  .catch((err) => {
                    console.log("123");
                  });
              });
          })
          .catch((err) => {
            console.log("1223");
          });
      })
      .catch((err) => {
        Swal.fire("Нельзя писать больше 300 символов");
      });

    // axios
    //   .get(
    //     `${url}/api/course_theme_comment/${
    //       JSON.parse(localStorage.getItem("page_video")).id
    //     }`,
    //     {
    //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //     }
    //   )
    //   .then((res) => {
    //     setComment2(res.data);
    //   })
    //   .catch((err) => {});
  }

  function deleteComment(id) {
    axios
      .delete(`${url}/api/course_theme_comment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            console.log("asdsad");
            axios
              .get(`${url}/auth/allusers`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res3) => {
                console.log("asdsa2");
                for (let i = 0; i < mycoment.length; i++) {
                  mycoment[i].username = "Ananim User";
                  mycoment[i].image1 = "";
                  for (let j = 0; j < res3.data.length; j++) {
                    console.log(
                      res3.data[j].id == mycoment[i].user_id,
                      res3.data[j].id,
                      mycoment[i].user_id
                    );

                    if (res3.data[j].id == mycoment[i].user_id) {
                      mycoment[i].username = res3.data[j].username;
                      mycoment[i].image1 = res3.data[j].image;
                    }
                  }
                }

                var onlycoment = mycoment.filter(
                  (item) => item.subcoment == 0 && item.task_commnet_id == 0
                );
                var all_task = mycoment.filter(
                  (item) => item.task_commnet_id != 0
                );

                axios
                  .get(`${url}/api/course_theme_task_student`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  .then((res1) => {
                    for (let i = 0; i < all_task.length; i++) {
                      all_task[i].mark = 0;
                      for (let j = 0; j < res1.data.length; j++) {
                        if (all_task[i].id == res1.data[j].feedback) {
                          all_task[i].mark = res1.data[j].mark;
                        }
                      }
                    }
                    setComment(onlycoment);
                    setCommenttask(all_task);
                  })
                  .catch((err) => {
                    console.log("123");
                  });
              });
          })
          .catch((err) => {
            console.log("1223");
          });
      })
      .catch((err) => {});
    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.");
      });
  }

  function deleteComment1(id) {
    axios
      .delete(`${url}/api/course_theme_comment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        window.location.reload();
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            console.log("asdsad");
            axios
              .get(`${url}/auth/allusers`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res3) => {
                console.log("asdsa2");
                for (let i = 0; i < mycoment.length; i++) {
                  mycoment[i].username = "Ananim User";
                  mycoment[i].image1 = "";
                  for (let j = 0; j < res3.data.length; j++) {
                    console.log(
                      res3.data[j].id == mycoment[i].user_id,
                      res3.data[j].id,
                      mycoment[i].user_id
                    );

                    if (res3.data[j].id == mycoment[i].user_id) {
                      mycoment[i].username = res3.data[j].username;
                      mycoment[i].image1 = res3.data[j].image;
                    }
                  }
                }

                var onlycoment = mycoment.filter(
                  (item) => item.subcoment == 0 && item.task_commnet_id == 0
                );
                var all_task = mycoment.filter(
                  (item) => item.task_commnet_id != 0
                );

                axios
                  .get(`${url}/api/course_theme_task_student`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  .then((res1) => {
                    for (let i = 0; i < all_task.length; i++) {
                      all_task[i].mark = 0;
                      for (let j = 0; j < res1.data.length; j++) {
                        if (all_task[i].id == res1.data[j].feedback) {
                          all_task[i].mark = res1.data[j].mark;
                        }
                      }
                    }
                    setComment(onlycoment);
                    setCommenttask(all_task);
                  })
                  .catch((err) => {
                    console.log("123");
                  });
              });
          })
          .catch((err) => {
            console.log("1223");
          });
      });
    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        setComment2(res.data);
      })
      .catch((err) => {
        Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.");
      });
  }

  function cencelModal() {
    document.querySelector("#chat_text").value = "";
    document.querySelector("#chat_text1").value = "";
  }
  function openModalOtvet11(id) {
    setSubcoment(id);
    document.querySelector(".otevet_comment_otdel_oyna").style =
      "display: block";
    document.querySelector(".m_otdel_bgc").style = "display:none";
  }
  function closeModalOtvet11() {
    setSubcoment(0);
    document.querySelector(".m_otdel_bgc").style = "display: block";
    document.querySelector(".otevet_comment_otdel_oyna ").style =
      "display:none !important";
  }
  function openViewall() {
    document.querySelector(".view_all_otdel_oyna").style = "display: block";
    document.querySelector(".m_otdel_bgc").style = "display:none";
  }

  function closeViewall() {
    document.querySelector(".m_otdel_bgc").style = "display: block";
    document.querySelector(".view_all_otdel_oyna ").style =
      "display:none !important";
  }

  //task

  function deleteComment1(id) {
    axios
      .delete(`${url}/api/course_theme_comment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            var onlycoment = mycoment.filter(
              (item) => item.subcoment == 0 && item.task_commnet_id == 0
            );
            var all_task = mycoment.filter((item) => item.task_commnet_id != 0);
            axios
              .get(`${url}/api/course_theme_task_student`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res1) => {
                for (let i = 0; i < all_task.length; i++) {
                  all_task[i].mark = 0;
                  for (let j = 0; j < res1.data.length; j++) {
                    if (all_task[i].id == res1.data[j].feedback) {
                      all_task[i].mark = res1.data[j].mark;
                    }
                  }
                }
                setComment(onlycoment);
                setCommenttask(all_task);
              })
              .catch((err) => {
                console.log("123");
              });
          })
          .catch((err) => {
            console.log("1223");
          });
      });
    axios
      .get(
        `${url}/api/course_theme_comment/${
          JSON.parse(localStorage.getItem("page_video")).id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        var a = res.data.filter((item) => item.task_commnet_id == 1);
        setComment5(a);
        console.log(a, "comdwadwadent");
      })
      .catch((err) => {
        Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.");
      });
  }

  function commentTaskPost() {
    var formdata = new FormData();
    formdata.append("text", document.querySelector("#chat_text12").value);
    formdata.append("image", 0);
    formdata.append("user_id", oneuser[0].id);
    formdata.append("theme", JSON.parse(localStorage.getItem("page_video")).id);
    formdata.append("subcomment", subcoment);
    formdata.append("task_commnet_id", 1);

    axios
      .post(`${url}/api/course_theme_comment/`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        const idget = JSON.parse(localStorage.getItem("page_video"));
        axios
          .get(`${url}/api/course_theme_comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            var mycoment = res.data.filter((item) => item.theme == idget.id);
            console.log("asdsad");
            axios
              .get(`${url}/auth/allusers`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res3) => {
                console.log("asdsa2");
                for (let i = 0; i < mycoment.length; i++) {
                  mycoment[i].username = "Ananim User";
                  mycoment[i].image1 = "";
                  for (let j = 0; j < res3.data.length; j++) {
                    console.log(
                      res3.data[j].id == mycoment[i].user_id,
                      res3.data[j].id,
                      mycoment[i].user_id
                    );

                    if (res3.data[j].id == mycoment[i].user_id) {
                      mycoment[i].username = res3.data[j].username;
                      mycoment[i].image1 = res3.data[j].image;
                    }
                  }
                }

                var onlycoment = mycoment.filter(
                  (item) => item.subcoment == 0 && item.task_commnet_id == 0
                );
                var all_task = mycoment.filter(
                  (item) => item.task_commnet_id != 0
                );

                axios
                  .get(`${url}/api/course_theme_task_student`, {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  })
                  .then((res1) => {
                    for (let i = 0; i < all_task.length; i++) {
                      all_task[i].mark = 0;
                      for (let j = 0; j < res1.data.length; j++) {
                        if (all_task[i].id == res1.data[j].feedback) {
                          all_task[i].mark = res1.data[j].mark;
                        }
                      }
                    }
                    setComment(onlycoment);
                    setCommenttask(all_task);
                  })
                  .catch((err) => {
                    console.log("123");
                  });
              });
          })
          .catch((err) => {
            console.log("1223");
          });
      })
      .catch((err) => {
        Swal.fire("Error");
      });

    const idget = JSON.parse(localStorage.getItem("page_video"));
    axios
      .get(`${url}/api/course_theme_comment`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        var mycoment = res.data.filter((item) => item.theme == idget.id);
        var onlycoment = mycoment.filter(
          (item) => item.subcoment == 0 && item.task_commnet_id == 0
        );
        var all_task = mycoment.filter((item) => item.task_commnet_id != 0);
        axios
          .get(`${url}/api/course_theme_task_student`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res1) => {
            for (let i = 0; i < all_task.length; i++) {
              all_task[i].mark = 0;
              for (let j = 0; j < res1.data.length; j++) {
                if (all_task[i].id == res1.data[j].feedback) {
                  all_task[i].mark = res1.data[j].mark;
                }
              }
            }
            setComment(onlycoment);
            setCommenttask(all_task);
          })
          .catch((err) => {
            console.log("123");
          });
      })
      .catch((err) => {
        console.log("1223");
      });
  }

  function cencelModal() {
    document.querySelector("#chat_text12").value = "";
  }

  function markOpen(id) {
    document.querySelector(".mark-uchun-koish-joy").style = "display:flex ";
  }
  function markOpen2(id) {
    document.querySelector(".mark-uchun-koish-joy1").style = "display:flex ";
  }
  function aftermarkopen(id) {
    var formdata = new FormData();

    formdata.append("mark", page);
    formdata.append(
      "image",
      document.querySelector(".comment_file12").files[0]
    );
    formdata.append("content", "ghjkh");
    formdata.append(
      "course_theme",
      JSON.parse(localStorage.getItem("page_video")).id
    );
    formdata.append("feedback", id);
    axios
      .post(`${url}/api/course_theme_task_student`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        document.querySelector(".m-comment-mark").style = "display:none";
        document.querySelector(".mark-uchun-koish-joy").style = "display:none";
        axios
          .get(`${url}/api/course_theme_task_student`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setMark(res.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {
        Swal.fire("Вы не смогли поставить оценку");
      });
  }
  function markClose() {
    document.querySelector(".mark-uchun-koish-joy").style = "display:none ";
  }
  function markClose2() {
    document.querySelector(".mark-uchun-koish-joy1").style = "display:none ";
  }
  function aftermarkopen2(id) {
    var formdata = new FormData();

    formdata.append("mark", page);
    formdata.append(
      "image",
      document.querySelector(".comment_file12").files[0]
    );
    formdata.append("content", ":");
    formdata.append(
      "course_theme",
      JSON.parse(localStorage.getItem("page_video")).id
    );
    formdata.append("feedback", id);
    axios
      .put(`${url}/api/course_theme_task_student`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        document.querySelector(".mark-uchun-koish-joy1").style = "display:none";
        axios
          .get(`${url}/api/course_theme_task_student`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setMark(res.data);
          })
          .catch((err) => {});
      })
      .catch((err) => {
        Swal.fire("Вы не смогли поставить оценку");
      });
  }

  return (
    <div className="youtube_bgc">
      <div className="a_err_boganda">
        <div className="a_err_bolsa_block">
          <img src={err} alt="" />
          <h3> Что-то произошло сервером мы уже испровляем это.</h3>
          <h3> Можете попробовать попойже</h3>
          <button onClick={() => ModalCatchBolsa()}>вернуться назад</button>
        </div>
      </div>
      {loader === 0 ? (
        <div>
          <div>
            <Usernavbar />

            <div className="youtube_bgc">
              <div className="flex_youtube">
                {localStorage.getItem("Idvideo") ? (
                  <div className="youtube_kotta_img">
                    <div className="for-otdelni-chunmadim">
                      <div className="img_youtube_kotta">
                        {/* <iframe
                          src={main1.video}
                          title="W3Schools Free Online Web Tutorials"
                        ></iframe> */}
                    {(() => {
if (main.video.includes(".jpg")||main.video.includes(".png")||main.video===null) {
  return<p style={{
    margin:"30%"
  }}>video not found or not exist</p>
}else{
  return<ReactPlayer
  ref={playerRef}
  url={main1.video}
  controls
  onDuration={handleDuration}
  onProgress={handleProgress}
  className="React_player"
/>
}

                    })()}
                      </div>
                      <div className="theme_df">
                        <div className="flex_logig">
                          <h1 className="raspberry_pi">
                          <p>
                              Размер видео: {videoDuration.toFixed(2)} секунд
                            </p>
                            <p>Последний раз останавливались на {startAt} </p>
                            <p>
                              Текущее время: {currentTime.toFixed(2)} секунд
                            </p>
                          </h1>
                          <div className="odtel_media_uchun">
                            <h1>{main1.name}</h1>
                          </div>
                        </div>
                      </div>
                      <p className="theme_content">{main1.content}</p>
                      <div
                        className="navbar_video"
                        style={{ marginTop: "50px" }}
                      >
                        <div className="navbar_none">
                          <div className="navbar_otish">
                            <p
                              onClick={() => {
                                setPage5(1);
                                painModal();
                              }}
                              className="zadaniya"
                            >
                              Comments
                            </p>
                            <p
                              onClick={() => {
                                setPage5(2);
                                painModal1();
                              }}
                              className="zadaniya1"
                            >
                              Tasks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="navbar_block">
                        <div
                          className="menu_navbar"
                          onClick={() => {
                            openModal();
                          }}
                        >
                          <TiThMenu />
                        </div>
                        <div
                          className="navbar_yon"
                          onMouseLeave={() => {
                            closeModal();
                          }}
                        >
                          <div className="navbar_otish1">
                            <p
                              onClick={() => {
                                setPage5(1);
                                painModal5();
                                setTask_comnet_id(0);
                                closeModal();
                              }}
                              className="zadaniya5"
                            >
                              Крмментарии
                            </p>
                            <p
                              onClick={(id) => {
                                setPage(2);
                                painModal6();
                                setTask_comnet_id(id);
                                closeModal();
                              }}
                              className="zadaniya6"
                            >
                              Задания
                            </p>
                          </div>
                        </div>
                      </div>
                      {page5 === 1 ? (
                        <div>
                          <div className="m_comment_kotta">
                            <div className="m_otdel_bgc">
                              <div className="comment_view_all">
                                <span className="span_comment1202">
                                  Комментария*
                                </span>
                                <p
                                  onClick={() => {
                                    openViewall();
                                  }}
                                >
                                  view all <AiOutlineComment />
                                </p>
                              </div>
                              <div className="for_scroll">
                                {comment.length === 0 ? (
                                  <div className="for_no_comment">
                                    <p>Тут ещё нут комметнарий</p>
                                  </div>
                                ) : (
                                  <>
                                    {comment.map((item) => {
                                      if (
                                        item.subcomment == 0 &&
                                        item.task_commnet_id == 0
                                      ) {
                                        return (
                                          <>
                                            <div className="m_comment">
                                              <div className="for-flex-time-name-image">
                                                <div className="m_comment_img">
                                                  <img
                                                    src={
                                                      item &&
                                                      item.image1 &&
                                                      item.image1.includes(
                                                        "http"
                                                      ) ? (
                                                        item.image1
                                                      ) : item.image1 ? (
                                                        `${url}/${item.image}`
                                                      ) : (
                                                        <img
                                                          src={anonim}
                                                          alt=""
                                                        />
                                                      )
                                                    }
                                                    alt=""
                                                  />
                                                </div>

                                                <div className="user-name-timecreate">
                                                  <h5>{item.username}</h5>
                                                  <p>
                                                    {item.time_create.slice(
                                                      0,
                                                      10
                                                    )}
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="m_comment_text">
                                                {item.image ? (
                                                  ""
                                                ) : (
                                                  <img
                                                    src={
                                                      item.image &&
                                                      item.image.includes(
                                                        "http"
                                                      )
                                                        ? item.image
                                                        : `${url}/${item.image}`
                                                    }
                                                    alt=""
                                                  />
                                                )}
                                                <p className="m_comment_text1505">
                                                  {item.text}
                                                </p>
                                                <div className="m_comment_otvet">
                                                  <p
                                                    style={{ display: "flex" }}
                                                    className="m_otvet_comment"
                                                    onClick={() => {
                                                      openModalOtvet11(item.id);
                                                    }}
                                                  >
                                                    <FiCornerUpLeft />
                                                    <span>
                                                      {item.count === 0 ? (
                                                        "Ответить"
                                                      ) : (
                                                        <>
                                                          {item.count}
                                                          <span> Ответов</span>
                                                        </>
                                                      )}
                                                    </span>
                                                  </p>

                                                  {oneuser.map((item5) => {
                                                    return (
                                                      <>
                                                        {item5.id ==
                                                        item.user_id ? (
                                                          <p
                                                            className="m_comment_delete"
                                                            onClick={() => {
                                                              deleteComment(
                                                                item.id
                                                              );
                                                            }}
                                                          >
                                                            <AiOutlineDelete />
                                                            удалить
                                                          </p>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  })}
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      }
                                    })}
                                  </>
                                )}
                              </div>

                              <div className="m_comment_yozish">
                                <input type="file" id="comment_file" />
                                <p>
                                  <FcFile />
                                </p>

                                <textarea
                                  placeholder="Введите текст"
                                  id="chat_text"
                                ></textarea>
                              </div>
                              <div className="m_comment_button">
                                <button
                                  className="m_otmen"
                                  onClick={() => {
                                    cencelModal();
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={(event) => {
                                    messagePost();
                                  }}
                                  className="m_otpravit"
                                >
                                  Send
                                </button>
                              </div>
                            </div>

                            <div className="otevet_comment_otdel_oyna">
                              <p
                                className="m_otvet_comment_back"
                                onClick={() => {
                                  closeModalOtvet11();
                                }}
                              >
                                <FiCornerUpLeft />
                                Back
                              </p>
                              <div className="comment_otevet_all">
                                {comment.length === 0 ? (
                                  <div className="for_no_comment">
                                    <p>Тут ещё нут ответов</p>
                                  </div>
                                ) : (
                                  <>
                                    {comment.map((item) => {
                                      if (item.subcomment == subcoment) {
                                        return (
                                          <>
                                            <div className="df_div_comment_page">
                                              <div className="m_comment">
                                                <div className="for-flex-time-name-image">
                                                  <div className="m_comment_img">
                                                    <img
                                                      src={
                                                        item &&
                                                        item.image1 &&
                                                        item.image1.includes(
                                                          "http"
                                                        ) ? (
                                                          item.image1
                                                        ) : item.image1 ? (
                                                          `${url}/${item.image}`
                                                        ) : (
                                                          <img
                                                            src={anonim}
                                                            alt=""
                                                          />
                                                        )
                                                      }
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div className="user-name-timecreate">
                                                    <h5>{item.username}</h5>
                                                    <p>
                                                      {item.time_create.slice(
                                                        0,
                                                        10
                                                      )}
                                                    </p>
                                                  </div>
                                                </div>

                                                <div className="m_comment_text">
                                                  {item.image ? (
                                                    ""
                                                  ) : (
                                                    <img
                                                      src={
                                                        item.image &&
                                                        item.image.includes(
                                                          "http"
                                                        )
                                                          ? item.image
                                                          : `${url}/${item.image}`
                                                      }
                                                      alt=""
                                                    />
                                                  )}
                                                  <p className="m_comment_text1505">
                                                    {item.text}
                                                  </p>
                                                  <div className="m_comment_otvet">
                                                    {oneuser.map((item5) => {
                                                      return (
                                                        <>
                                                          {item5.id ==
                                                          item.user_id ? (
                                                            <p
                                                              className="m_comment_delete"
                                                              onClick={() => {
                                                                deleteComment(
                                                                  item.id
                                                                );
                                                              }}
                                                            >
                                                              <AiOutlineDelete />
                                                              удалить
                                                            </p>
                                                          ) : (
                                                            ""
                                                          )}
                                                        </>
                                                      );
                                                    })}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      }
                                    })}
                                  </>
                                )}
                              </div>
                              <div className="m_comment_yozish">
                                <input type="file" id="comment_file1" />
                                <p>
                                  <FcFile />
                                </p>

                                <textarea
                                  placeholder="Ответить на комментарий"
                                  id="chat_text1"
                                ></textarea>
                              </div>
                              <div className="m_comment_button">
                                <button
                                  className="m_otmen"
                                  onClick={() => {
                                    cencelModal();
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={(event) => {
                                    otvetPost();
                                  }}
                                  className="m_otpravit"
                                >
                                  Send
                                </button>
                              </div>
                            </div>

                            <div className="view_all_otdel_oyna">
                              <div className="df_all_com">
                                <p
                                  className="m_otvet_comment_back"
                                  onClick={() => {
                                    closeViewall();
                                  }}
                                >
                                  <FiCornerUpLeft />
                                  Back
                                </p>
                                <p className="AiOutlineComment">
                                  View all comment <AiOutlineComment />
                                </p>
                              </div>
                              {comment.length === 0 ? (
                                <div className="for_no_comment">
                                  <p>Тут ещё нут комметнарий</p>
                                </div>
                              ) : (
                                <>
                                  {comment.map((item) => {
                                    if (item.task_commnet_id != 1) {
                                      return (
                                        <>
                                          <div className="flex_view_all">
                                            <div className="m_comment">
                                              <div className="for-flex-time-name-image">
                                                <div className="m_comment_img">
                                                  {item.oneuser &&
                                                  item.oneuser.image ? (
                                                    <img
                                                      src={
                                                        item &&
                                                        item.image1 &&
                                                        item.image1.includes(
                                                          "http"
                                                        ) ? (
                                                          item.image1
                                                        ) : item.image1 ? (
                                                          `${url}/${item.image}`
                                                        ) : (
                                                          <img
                                                            src={anonim}
                                                            alt=""
                                                          />
                                                        )
                                                      }
                                                      alt=""
                                                    />
                                                  ) : (
                                                    <img src={anonim} alt="" />
                                                  )}
                                                </div>

                                                <div className="user-name-timecreate">
                                                  <h5>{item.username}</h5>
                                                  <p>
                                                    {item.time_create.slice(
                                                      0,
                                                      10
                                                    )}
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="m_comment_text">
                                                {item.image ? (
                                                  ""
                                                ) : (
                                                  <img
                                                    src={
                                                      item.image &&
                                                      item.image.includes(
                                                        "http"
                                                      )
                                                        ? item.image
                                                        : `${url}/${item.image}`
                                                    }
                                                    alt=""
                                                  />
                                                )}
                                                <p className="m_comment_text1505">
                                                  {item.text}
                                                </p>
                                                <div className="m_comment_otvet">
                                                  <p
                                                    style={{ display: "flex" }}
                                                    className="m_otvet_comment"
                                                    onClick={() => {
                                                      openModalOtvet11(item.id);
                                                    }}
                                                  >
                                                    <FiCornerUpLeft />
                                                    {item.count === 0 ? (
                                                      "Ответить"
                                                    ) : (
                                                      <>
                                                        {item.count}{" "}
                                                        <span>Ответов</span>
                                                      </>
                                                    )}
                                                  </p>

                                                  {oneuser.map((item5) => {
                                                    return (
                                                      <>
                                                        {item5.id ==
                                                        item.user_id ? (
                                                          <p
                                                            className="m_comment_delete"
                                                            onClick={() => {
                                                              deleteComment(
                                                                item.id
                                                              );
                                                            }}
                                                          >
                                                            <AiOutlineDelete />
                                                            удалить
                                                          </p>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </>
                                                    );
                                                  })}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    }
                                  })}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="m_comment_kotta">
                            <div className="m_otdel_bgc">
                              {teacherwork.map((item) => {
                                if (
                                  item.id ==
                                  JSON.parse(localStorage.getItem("page_video"))
                                    .id
                                ) {
                                  return (
                                    <>
                                      <div className="zanacha_vaz">Задача*</div>
                                      <div className="task_div_big">
                                        <img src={item.image} alt="" />
                                        <p>{item.content}</p>
                                      </div>
                                    </>
                                  );
                                } else {
                                  <div>There are no tasks here</div>;
                                }
                              })}
                              <hr className="hr2000" />

                              <div className="for_scroll">
                                {commenttask.length == 0 ? (
                                  <div className="for_no_comment">
                                    <p>Тут ещё нут ответов на задачу </p>
                                  </div>
                                ) : (
                                  <>
                                    {commenttask.map((item, key) => {
                                      if (item.task_commnet_id == 1) {
                                        return (
                                          <>
                                            <div className="df_div_comment_page">
                                              <div className="div_img_class_over">
                                                <img
                                                  src={
                                                    item &&
                                                    item.image1 &&
                                                    item.image1.includes(
                                                      "http"
                                                    ) ? (
                                                      item.image1
                                                    ) : item.image1 ? (
                                                      `${url}/${item.image}`
                                                    ) : (
                                                      <img
                                                        src={anonim}
                                                        alt=""
                                                      />
                                                    )
                                                  }
                                                  alt=""
                                                />
                                              </div>

                                              <div className="div_class_tugadi">
                                                <div className="task-uchun-joy-and-mark">
                                                  <h5>{item.username}</h5>
                                                  {item.mark}
                                                </div>

                                                <p className="p-create-time-uchun">
                                                  {item.time_create.slice(
                                                    0,
                                                    10
                                                  )}
                                                </p>

                                                {task.map((item) => (
                                                  <img
                                                    src={
                                                      item.image &&
                                                      item.image.includes(
                                                        "http"
                                                      )
                                                        ? item.image
                                                        : `${url}/${item.image}`
                                                    }
                                                    alt=""
                                                  />
                                                ))}

                                                <p className="m_comment_text1505">
                                                  {item.text}
                                                </p>
                                                <div className="div-like-dislike-delete-share">
                                                  {oneuser.map((item5) => {
                                                    return (
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          alignItems: "center",
                                                          gap: "10px",
                                                          flexWrap: "wrap",
                                                        }}
                                                      >
                                                        {localStorage.getItem(
                                                          "position"
                                                        ) === 2
                                                          ? ""
                                                          : ""}

                                                        <p
                                                          className="m-comment-mark"
                                                          onClick={() => {
                                                            markOpen();
                                                            setPage(1);
                                                          }}
                                                        >
                                                          <TfiMarkerAlt />
                                                          <span>
                                                            поставить оценку
                                                          </span>
                                                        </p>
                                                        {item5.id ==
                                                        item.user_id ? (
                                                          <p
                                                            className="m_comment_delete1"
                                                            onClick={() => {
                                                              deleteComment1(
                                                                item.id
                                                              );
                                                            }}
                                                          >
                                                            <AiOutlineDelete />
                                                            <span>удалить</span>
                                                          </p>
                                                        ) : (
                                                          ""
                                                        )}
                                                      </div>
                                                    );
                                                  })}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mark-uchun-koish-joy">
                                              <div className="kotta-obsh-mark-uchun">
                                                <div className="kichkina-mark-uchun-joy">
                                                  <div
                                                    className="mark-two"
                                                    onClick={() => setPage(2)}
                                                  >
                                                    2
                                                  </div>
                                                  <div
                                                    className="mark-three"
                                                    onClick={() => setPage(3)}
                                                  >
                                                    3
                                                  </div>
                                                  <div
                                                    className="mark-four"
                                                    onClick={() => setPage(4)}
                                                  >
                                                    4
                                                  </div>
                                                  <div
                                                    className="mark-five"
                                                    onClick={() => setPage(5)}
                                                  >
                                                    5
                                                  </div>
                                                </div>
                                                <h5>Оценить ученика:</h5>
                                                <div className="mark-bosgandan-kein">
                                                  {page === 2 ? (
                                                    <div className="mark-two">
                                                      2
                                                    </div>
                                                  ) : (
                                                    <>
                                                      {page === 3 ? (
                                                        <div className="mark-three">
                                                          3
                                                        </div>
                                                      ) : (
                                                        <>
                                                          {page === 4 ? (
                                                            <div className="mark-four">
                                                              4
                                                            </div>
                                                          ) : (
                                                            <>
                                                              {page === 5 ? (
                                                                <div className="mark-five">
                                                                  5
                                                                </div>
                                                              ) : (
                                                                <></>
                                                              )}
                                                            </>
                                                          )}
                                                        </>
                                                      )}
                                                    </>
                                                  )}
                                                </div>
                                                <div className="mark-otmen-potver-uchun">
                                                  <button
                                                    className="otmen-uchen-but"
                                                    onClick={() => {
                                                      markClose();
                                                    }}
                                                  >
                                                    Отменить
                                                  </button>
                                                  <button
                                                    className="porver-uchen-but"
                                                    onClick={() => {
                                                      aftermarkopen(item.id);
                                                    }}
                                                  >
                                                    Потвердить
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mark-uchun-koish-joy1">
                                              <div className="kotta-obsh-mark-uchun">
                                                <div className="kichkina-mark-uchun-joy">
                                                  <div
                                                    className="mark-two"
                                                    onClick={() => setPage1(2)}
                                                  >
                                                    2
                                                  </div>
                                                  <div
                                                    className="mark-three"
                                                    onClick={() => setPage1(3)}
                                                  >
                                                    3
                                                  </div>
                                                  <div
                                                    className="mark-four"
                                                    onClick={() => setPage1(4)}
                                                  >
                                                    4
                                                  </div>
                                                  <div
                                                    className="mark-five"
                                                    onClick={() => setPage1(5)}
                                                  >
                                                    5
                                                  </div>
                                                </div>
                                                <h5>Изменить оценку на:</h5>
                                                <div className="mark-bosgandan-kein">
                                                  {page1 === 2 ? (
                                                    <div className="mark-two">
                                                      2
                                                    </div>
                                                  ) : (
                                                    <>
                                                      {page1 === 3 ? (
                                                        <div className="mark-three">
                                                          3
                                                        </div>
                                                      ) : (
                                                        <>
                                                          {page1 === 4 ? (
                                                            <div className="mark-four">
                                                              4
                                                            </div>
                                                          ) : (
                                                            <>
                                                              {page1 === 5 ? (
                                                                <div className="mark-five">
                                                                  5
                                                                </div>
                                                              ) : (
                                                                <></>
                                                              )}
                                                            </>
                                                          )}
                                                        </>
                                                      )}
                                                    </>
                                                  )}
                                                </div>
                                                <div className="mark-otmen-potver-uchun">
                                                  <button
                                                    className="otmen-uchen-but"
                                                    onClick={() => {
                                                      markClose2();
                                                    }}
                                                  >
                                                    Отменить
                                                  </button>

                                                  <button
                                                    className="porver-uchen-but"
                                                    onClick={() => {
                                                      aftermarkopen2(mark.id);
                                                    }}
                                                  >
                                                    Изменить
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      }
                                    })}
                                  </>
                                )}
                              </div>

                              <div className="m_comment_yozish">
                                <input
                                  type="file"
                                  id="comment_file"
                                  className="comment_file12"
                                />
                                <p>
                                  <FcFile />
                                </p>

                                <textarea
                                  placeholder="Введите ответ на задания"
                                  id="chat_text12"
                                ></textarea>
                              </div>
                              <div className="m_comment_button">
                                <button
                                  className="m_otmen"
                                  onClick={() => {
                                    cencelModal();
                                  }}
                                >
                                  Cancel
                                </button>
                                <button
                                  className="m_otpravit"
                                  onClick={() => {
                                    commentTaskPost();
                                    // imagePost();
                                  }}
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="youtube_kotta_img">
                    <div className="img_youtube_kotta">
                    {(() => {
if (main.video.includes(".jpg")||main.video.includes(".png")||main.video===null) {
  return<p style={{
    margin:"30%"
  }}>video not found or not exist</p>
}else{
  return<ReactPlayer
  ref={playerRef}
  url={main.video}
  controls
  onDuration={handleDuration}
  onProgress={handleProgress}
  className="React_player"
/>
}

                    })()}
                    </div>
                    <div className="theme_df">
                      <div className="flex_logig">
                        <h1 className="raspberry_pi">{main.name}</h1>
                        <div className="odtel_media_uchun">
                          <h1>{main.name}</h1>
                        </div>
                      </div>
                    </div>
                    <p className="theme_content">{main.content}</p>
                  </div>
                )}

                <div className={main == "" ? "db" : "a_err_boganda"}>
                  <div className="a_err_bolsa_block">
                    <img src={err} alt="" />
                    <h3>
                      Something happened to the server, we are already fixing
                      it.
                    </h3>
                    <h3>You can try better</h3>
                    <br />
                    {JSON.parse(localStorage.getItem("page_user"))[0]
                      .position == 2 ? (
                      <Create_Theme_Category_mentor
                        id1={localStorage.getItem("abbas")}
                      />
                    ) : (
                      <></>
                    )}
                    <br />
                    <br />
                    <button onClick={() => ModalCatchBolsa()}>Come back</button>
                  </div>
                </div>
                {JSON.parse(localStorage.getItem("page_user"))[0].position ==
                2 ? (
                  <Create_Theme_Category_mentor
                    id1={localStorage.getItem("abbas")}
                  />
                ) : (
                  <></>
                )}
                <div className="youtube_kichkina">
                  {category.map((item, key) => {
                    return (
                      <>
                        <Accordion className="for-scroll-accordion">
                          <Accordion.Item eventKey={0 + key}>
                            <Accordion.Header>{item.name}</Accordion.Header>
                            <div className="for-position-fixed">
                              {item.theme.map((item2) => {
                                return (
                                  <Accordion.Body
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      MadolChange(item2);
                                    }}
                                  >
                                    <div
                                      style={{ cursor: "pointer" }}
                                      className="accordion_flex"
                                    >
                                      <div className="accordion_img">
                                        {item2.image === null ? (
                                          <img src={novideo} alt="" />
                                        ) : (
                                          <img
                                            src={
                                              item.image &&
                                              item.image.includes("http")
                                                ? item.image
                                                : `${url}/${item.image}`
                                            }
                                            alt=""
                                          />
                                        )}
                                      </div>
                                      <div className="accordion_text">
                                        <h6>{item2.name}</h6>
                                        <p>
                                          {item2.content.length > 15
                                            ? `${item2.content.slice(0, 15)}...`
                                            : item2.content}
                                        </p>
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                );
                              })}
                            </div>
                          </Accordion.Item>
                        </Accordion>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}

      <Footer1 />
    </div>
  );
}