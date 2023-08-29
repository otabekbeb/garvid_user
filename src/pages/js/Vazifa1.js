import React, { useEffect, useState } from "react";
import "../css/vazifa1.css";
import "../css/comment.css";
import { FiCornerUpLeft } from "react-icons/fi";
import { FcFile } from "react-icons/fc";
import img_comment from "../img/Sertifikat.png";
import img_comment1 from "../img/anonim-user.png";
import axios from "axios";
import url from "./Host";
import person from "../img/149071.png";
import { MdClose } from "react-icons/md";
import "../css/yozishmalar.css";
import { AiOutlineDelete } from "react-icons/ai";
import { TfiMarkerAlt } from "react-icons/tfi";
import { BsBookmark } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Swal from "sweetalert2";
import mark_img from "../img/evaluation_of_education_300.jpg";

export default function Comment1() {
  const [teacherwork, setTeacherwork] = useState([]);
  const [oneuser, setOneuser] = useState([]);
  const [subcoment, setSubcoment] = useState(0);
  const [commenttask, setCommenttask] = useState([]);
  const [task_commnet_id, setTask_commnet_id] = useState(
    JSON.parse(localStorage.getItem("task_commnet_id"))
  );
  const [comment, setComment] = useState([]);
  const [task, setTask] = useState([]);
  const [mark, setMark] = useState([]);
  const [page, setPage] = useState(1);
  const [page1, setPage1] = useState(1);

  useEffect(() => {
    axios
      .get(`${url}/api/course_theme_task_student`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setMark(res.data);
        console.log(res.data, "hello world");
      })
      .catch((err) => {});
    axios
      .get(`${url}/api/course_theme_task`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTeacherwork(res.data);
        console.log(res.data);
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
        setComment(a);
      });

    axios
      .get(`${url}/api/course_theme_comment`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        var a = res.data.filter(
          (item) =>
            item.task_commnet_id !=
            JSON.parse(localStorage.getItem("page_video")).id
        );
        setCommenttask(a);
        console.log(res.data, "sfdfdxdseery");
      })
      .catch((err) => {});
  }, []);

  function deleteComment1(id) {
    axios
      .delete(`${url}/api/course_theme_comment/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        axios
          .get(`${url}/api/course_theme_comment/`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            var a = res.data.filter(
              (item) =>
                item.task_commnet_id !=
                JSON.parse(localStorage.getItem("page_video")).id
            );
            setCommenttask(a);
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
        setComment(a);
        console.log(a, "comdwadwadent");
      })
      .catch((err) => {
        Swal.fire("Вы не смогли удалить комментарий, попробуйте снова.");
      });
  }

  function imagePost() {
    var formdata = new FormData();

    formdata.append("mark", 3);
    formdata.append(
      "image",
      document.querySelector(".comment_file12").files[0]
    );
    formdata.append("content", ":");
    formdata.append(
      "course_theme",
      JSON.parse(localStorage.getItem("page_video")).id
    );
    formdata.append("feedback", ".");

    axios
      .post(`${url}api/course_theme_task_student`, formdata, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTask(res.data);
        console.log(res.data, "ily");
      })
      .catch((err) => {
        Swal.fire("ishlamadi tupoy");
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
            setComment(a);
          });
        document.querySelector("#chat_text12").value = "";
      })
      .catch((err) => {
        Swal.fire("Error");
      });

    axios
      .get(`${url}/api/course_theme_comment`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        var a = res.data.filter(
          (item) =>
            item.task_commnet_id !=
            JSON.parse(localStorage.getItem("page_video")).id
        );
        setCommenttask(a);
        console.log(res.data, "sfdfdxdseery");
      })
      .catch((err) => {});
  }

  function cencelModal() {
    document.querySelector("#chat_text12").value = "";
  }

  function markOpen(id) {
    document.querySelector(".mark-uchun-koish-joy").style =
      "display:flex !important";
  }
  function markOpen2(id) {
    document.querySelector(".mark-uchun-koish-joy1").style =
      "display:flex !important";
  }
  function aftermarkopen() {
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
    formdata.append("feedback", ".");
    if (page === 1) {
      Swal.fire("Вы не выбрали какую оценку вы хотите поставить");
    } else {
      axios
        .post(`${url}/api/course_theme_task_student`, formdata, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          document.querySelector(".BsBookmark").style =
            "display:block !important";
          document.querySelector(".m-comment-mark1").style =
            "display:block !important";
          document.querySelector(".m-comment-mark").style =
            "display:none !important";
          document.querySelector(".mark-uchun-koish-joy").style =
            "display:none !important";
          Swal.fire("Вы поставили оценку");
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
  }
  function markClose() {
    document.querySelector(".mark-uchun-koish-joy").style =
      "display:none !important";
  }
  function markClose2() {
    document.querySelector(".mark-uchun-koish-joy1").style =
      "display:none !important";
  }
  function aftermarkopen2(id) {
    var formdata = new FormData();

    formdata.append("mark", page1);
    formdata.append(
      "image",
      document.querySelector(".comment_file12").files[0]
    );
    formdata.append("content", ":");
    formdata.append(
      "course_theme",
      JSON.parse(localStorage.getItem("page_video")).id
    );
    formdata.append("feedback", ".");
    if (page === 1) {
      Swal.fire("Вы не выбрали оценку");
    } else {
      axios
        .put(`${url}/api/course_theme_task_student/${id}`, formdata, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          document.querySelector(".BsBookmark").style =
            "display:block";
          document.querySelector(".mark-uchun-koish-joy1").style =
            "display:none !important";
          Swal.fire("Вы изменили оценку");
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
          Swal.fire("Вы не смогли изменить оценку");
        });
    }
  }

  function openMarkModal() {
    document.querySelector(".p-info-mark-div1").style = "display:block; ";
  }
  function closeMarkModal() {
    document.querySelector(".p-info-mark-div1").style = "display:none";
  }

  function openModalMarkOchadi() {
    document.querySelector(".div-mark-chikadigan-joy").style = "display:block";
    document.querySelector(".BsBookmark").style = "display:none";
  }
  function openModalMarkOchadi12() {
    document.querySelector(".div-mark-chikadigan-joy").style = "display:none";
    document.querySelector(".BsBookmark").style = "display:block";
  }

  return (
    <div>
      <div className="m_comment_kotta">
        <div className="m_otdel_bgc">
          {teacherwork.map((item) => {
            if (item.id == JSON.parse(localStorage.getItem("page_video")).id) {
              return (
                <>
                  <div className="zanacha_vaz">Задача*</div>
                  <div className="task_div_big">
                    <img src={item.image} alt="" /> <p>{item.content}</p>
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
                            {mark.map((item) => {
                              return (
                                <div
                                  onMouseLeave={() => {
                                    openModalMarkOchadi12();
                                  }}
                                  className="div-mark-chikadigan-joy"
                                  style={{ display: "none" }}
                                >
                                  <p className="mark-p-div-chikadi">
                                    Mentor поставил оценку: {item.mark}
                                  </p>
                                </div>
                              );
                            })}

                            <img
                              src={
                                item.oneuser ? (
                                  item.oneuser.image.includes("http") ? (
                                    item.oneuser.image
                                  ) : (
                                    `${url}/${item.oneuser.image}`
                                  )
                                ) : (
                                  <img src={img_comment1} alt="" />
                                )
                              }
                              alt=""
                            />
                          </div>

                          <div className="div_class_tugadi">
                          <div className="asxzsdsdkejhjbdfibmffdo">
                              <div className="p-info-mark-div1">
                                Нажав можете помотреть оцентку ментора
                              </div>
                             
                              <div className="oneusername-uchun-kildim">
                              <h5>
                              {item.oneuser
                                ? item.oneuser.username
                                : "Anonim User"}
                            </h5>
                              </div>
                              <div className="m-comment-Bookmark">
                                <BsBookmark
                                  className="BsBookmark"
                                  onClick={() => {
                                    openModalMarkOchadi();
                                  }}
                                  onMouseLeave={() => {
                                    closeMarkModal();
                                  }}
                                  onMouseEnter={() => {
                                    openMarkModal();
                                  }}
                                />
                              </div>
                            </div>
                            
                            {task.map((item) => {
                              <img
                                src={
                                  item.image.includes("http")
                                    ? item.image
                                    : `${url}/${item.image}`
                                }
                                alt=""
                              />;
                            })}
                            <p className="m_comment_text1505">{item.text}</p>

                            {oneuser.map((item5) => {
                              return (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {item5.id == item.user_id ? (
                                    <p
                                      className="m_comment_delete1"
                                      onClick={() => {
                                        deleteComment1(item.id);
                                      }}
                                    >
                                      <span>
                                        <AiOutlineDelete />
                                      </span>
                                      удалить
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                  {localStorage.getItem("position") === 2
                                    ? ""
                                    : ""}
                                  <p
                                    className="m-comment-mark"
                                    onClick={() => {
                                      markOpen(key);
                                      setPage(1);
                                    }}
                                  >
                                    <span>
                                      <TfiMarkerAlt />
                                    </span>
                                    поставить оценку
                                  </p>
                                  {localStorage.getItem("position") === 2
                                    ? ""
                                    : ""}
                                  <p
                                    className="m-comment-mark1"
                                    onClick={() => {
                                      markOpen2(item.id);
                                      setPage1(1);
                                    }}
                                  >
                                    <span>
                                      <TfiMarkerAlt />
                                    </span>
                                    измеить оценку
                                  </p>
                                </div>
                              );
                            })}
                            {/* <div className="m-input-mark">
                              <input
                                type="number"
                                id="mark-input-in-task"
                                placeholder="оценка"
                              />
                              <p className="errorbigfive">
                                нельзя ставить больше 5
                              </p>
                              <p className="errorbigfive2">
                                Вы не поставили оценку
                              </p>
                              <div className="mark-button-down">
                                <p
                                  className="mark-otment-bosa"
                                  onClick={() => {
                                    markClose();
                                  }}
                                >
                                  отменить
                                </p>
                                <p
                                  className="mark-okey-bosa"
                                  // onClick={() => {
                                  //   aftermarkopen();
                                  // }}
                                >
                                  оценить
                                </p>
                              </div>
                            </div>
                            <div className="m-input-mark1">
                              <input
                                type="number"
                                id="mark-input-in-task1"
                                placeholder="изменить"
                              />
                              <p className="errorbigfive1">
                                нельзя ставить больше 5
                              </p>
                              <p className="errorbigfive3">
                                Вы не изменили оценку
                              </p>
                              <div className="mark-button-down">
                                <p
                                  className="mark-otment-bosa"
                                  onClick={() => {
                                    markClose2();
                                  }}
                                >
                                  отменить
                                </p>
                                <p
                                  className="mark-okey-bosa"
                                  onClick={() => {
                                    aftermarkopen2();
                                  }}
                                >
                                  изменить
                                </p>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </>
            )}
          </div>
          <div className="mark-uchun-koish-joy">
            <div className="kotta-obsh-mark-uchun">
              <div className="kichkina-mark-uchun-joy">
                <div className="mark-two" onClick={() => setPage(2)}>
                  2
                </div>
                <div className="mark-three" onClick={() => setPage(3)}>
                  3
                </div>
                <div className="mark-four" onClick={() => setPage(4)}>
                  4
                </div>
                <div className="mark-five" onClick={() => setPage(5)}>
                  5
                </div>
              </div>
              <h5>Оценить ученика:</h5>
              <div className="mark-bosgandan-kein">
                {page === 2 ? (
                  <div className="mark-two">2</div>
                ) : (
                  <>
                    {page === 3 ? (
                      <div className="mark-three">3</div>
                    ) : (
                      <>
                        {page === 4 ? (
                          <div className="mark-four">4</div>
                        ) : (
                          <>
                            {page === 5 ? (
                              <div className="mark-five">5</div>
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
                    aftermarkopen();
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
                <div className="mark-two" onClick={() => setPage1(2)}>
                  2
                </div>
                <div className="mark-three" onClick={() => setPage1(3)}>
                  3
                </div>
                <div className="mark-four" onClick={() => setPage1(4)}>
                  4
                </div>
                <div className="mark-five" onClick={() => setPage1(5)}>
                  5
                </div>
              </div>
              <h5>Изменить оценку на:</h5>
              <div className="mark-bosgandan-kein">
                {page1 === 2 ? (
                  <div className="mark-two">2</div>
                ) : (
                  <>
                    {page1 === 3 ? (
                      <div className="mark-three">3</div>
                    ) : (
                      <>
                        {page1 === 4 ? (
                          <div className="mark-four">4</div>
                        ) : (
                          <>
                            {page1 === 5 ? (
                              <div className="mark-five">5</div>
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
          <div className="m_comment_yozish">
            <input type="file" id="comment_file" className="comment_file12" />
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
                imagePost();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
