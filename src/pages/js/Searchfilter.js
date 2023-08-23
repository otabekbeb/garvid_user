import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { MdOutlineGrade, MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import Mon from "../img/Mon.png";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import Rasp from "../img/Rasp.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import "../css/Spiska.css";      
import "../css/Calibig.css";
import WWW from "../img/WWW.png";
import axios from "axios";
import url from "./Host";
import Loader from './loader'
import img_for_null from '../img/download.png'
import img_prover from '../img/istockphoto-1321436405-612x612.jpg'

export default function Searchfilter() {
  const [courstype, setCoursetype] = useState([])

  const [kursdata, setKursdata] = useState([]);
  const [type, settype] = useState([]);
  const [state1, setState1] = React.useState();
  const [loader, setLoader] = useState(1)
  const [oneuser, setOneuser] = useState([])
  const [star, setStar] = useState([])

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
 

  useEffect(() => {


    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );

    axios.get(`${url}/api/cours_types`, { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }).then(res => {
      setCoursetype(res.data)
      console.log(res.data);
    }).catch(err => {

    })



    axios.get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }).then(res => {
      axios.get(`${url}/api/course`, { header: {Authorization : `Bearer ${localStorage.getItem("token")}`}}).then(res1=>{
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].id==res1.data[j].id) {
              res.data[i].star=res1.data[j].star
            }
            
          }
          
        }
        setKursdata(res.data)
      })
    }).catch(err => {

    })
    setLoader(0)



  }, []);


  function filter(id) {
    axios
      .get(`${url}/api/mycourse/${localStorage.getItem("OneuserId")}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
      .then((res) => {
        const search = res.data.filter(item => item.course_type === id)
        setKursdata(search)
      });
  }
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
  return (
    <>
      {loader === 0 ? (
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
                        <div className="button_filter_kurs" >
                          {item.name === null ? ("") : (
                          <div onClick={() => filter(item.id)} className="div_kurs" style={{ paddingBottom: '5px' }}>{item.name}</div>)}
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
                  <div onClick={() => { window.location = "/video"; localStorage.setItem("abbas", item.id) }} className="kurs_card">
                    <button className="btn_das">Programming</button>
                    <img src={item.oneuser ? item.oneuser.image.includes("http") ? item.oneuser.image : `${url}/${item.oneuser.image}` :
                      <img src={img_for_null} alt="" />} alt="" />
                    <div className="kurs_paddaing_auto">
                      <h4>{item.name}</h4> 
                          <>
                           {item.star == 1 ? (<div style={{display:"flex", gap:"5px"}}> <div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                      </div><p style={{fontSize:"16px"}}>
                      {item.star}
                        <span><MdOutlineGrade style={{color:"#FFD401", fontSize:"13px"}}/></span>
                     </p></div>):(<>{item.star == 2 ? (<div style={{display:"flex", gap:"5px"}}><div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                      </div>
                      <p style={{fontSize:"16px"}}>
                      {item.star}
                        <span><MdOutlineGrade style={{color:"#FFD401", fontSize:"13px"}}/></span>
                     </p></div>):(<>{item.star === 3 ? (<div style={{display:"flex", gap:"5px"}}>
                     <div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                      </div>
                      <p style={{fontSize:"16px"}}>
                      {item.star}
                        <span><MdOutlineGrade style={{color:"#FFD401", fontSize:"13px"}}/></span>
                     </p></div>):(<>{item.star == 4?(<div style={{display:"flex", gap:"5px"}}>
                     <div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}} />
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                      </div> <p style={{fontSize:"16px"}}>
                      {item.star}
                        <span><MdOutlineGrade style={{color:"#FFD401", fontSize:"13px"}}/></span>
                     </p></div>):(<>{item.star == 5 ? (<div style={{display:"flex", gap:"5px"}}><div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#FFD401"}}/>
                        </i>
                      </div><p style={{fontSize:"16px"}}>
                      {item.star}
                        <span><MdOutlineGrade style={{color:"#FFD401", fontSize:"13px"}}/></span>
                     </p></div>):(<div style={{display:"flex", gap:"5px"}}><div className="star_card">
                      <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                          <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                        <i className="star_i">
                          <AiFillStar style={{color:"#9DA7BB"}}/>
                        </i>
                      </div> <p style={{fontSize:"16px"}}>
                        0
                        <span><MdOutlineGrade style={{color:"#9DA7BB", fontSize:"13px"}}/></span>
                     </p></div>)}</>)}</>)}</>)}</>)}    
                          </>
                                     
                      <div className="hajm">
                        <h5>
                          <p>Course size</p>
                          {item.planned_time}h
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


            {/* SPISKA */}

            {/* <div className="spiska_img_title_div">
          {kursdata.map((item) => {
            return (
              <div className="Spiska_blok">
                <div onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} className="spiska">
                  <div className="spiska_display_flex">
                    <div className="spiska_img">
                      {item.image === null ? (
                        <div className="No_img1">
                          <h1>No picture</h1>
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
                        <HiArrowRight onClick={()=>{window.location="/video";localStorage.setItem("course",item.id)}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
          </div>

        </div>) : (<Loader />)}
    </>
  );

}
