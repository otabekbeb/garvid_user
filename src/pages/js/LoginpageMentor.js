import React, { useEffect, useState } from "react";
import "../css/Loginpage.css";
import axios from "axios";
import url from "./Host";
import Footer from "../js/Footer1";
import Loader from "./loader"
import Swal from "sweetalert2";

import Usernavbar from "../js/Navbar";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  const [adress, setAdress] = React.useState([]);
  const [adresput, setAdresput] = React.useState([]);
  const [loader, setLoader] = React.useState(0);
  const [state1, setState1] = React.useState();
  useEffect(() => {
    setState1(
      localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    );
    axios
      .get(`${url}/auth/user/`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        document.querySelector("#first_name").value = res.data.first_name;
        document.querySelector("#last_name").value = res.data.last_name;
        document.querySelector("#username").value = res.data.username;
        console.log(res.data);
        document.querySelector("#phone_number").value = res.data.phone_number;
        document.querySelector("#birthday").value = res.data.birthday;
        document.querySelector("#adress").value = res.data.adress;
        document.querySelector("#description").value = res.data.description;
        setUser(res.data);
        user.map((item,key)=>{
          document.querySelector("#first_name").value = item.first_name;
          document.querySelector("#last_name").value = item.last_name;
          document.querySelector("#username").value = item.username;
          document.querySelector("#phone_number").value = item.phone_number;
          document.querySelector("#birthday").value = item.birthday;
          document.querySelector("#adress").value = item.adress;
          document.querySelector("#description").value = item.description;
        })   
      });

        setLoader(1)
  }, []);

  const plus = () => {
    setData(data + 1);
  };
  const minus = () => {
    if (data > 0) {
      setData(data - 1);
    }
  };

  function putUser() {
    var formdata = new FormData();
    formdata.append("first_name", document.querySelector("#first_name").value);
    formdata.append("last_name", document.querySelector("#last_name").value);
    formdata.append("username", document.querySelector("#username").value);
    formdata.append("image", document.querySelector("#img").files[0]);
    formdata.append(
      "phone_number",
      document.querySelector("#phone_number").value
    );
    formdata.append("birthday", document.querySelector("#birthday").value);
    formdata.append("balance", 100000);
    formdata.append("adress", document.querySelector("#adress").value);
    formdata.append(
      "description",
      document.querySelector("#description").value
    );

    axios
      .put(`${url}/auth/user/`, formdata, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        state1==="ru"?(Swal.fire("Введенная информация")):(Swal.fire("Entered information"))
        window.location.reload();
      })
      .catch((err) => {
        state1==="ru"?(Swal.fire("Информация введена не полностью")):(Swal.fire("The information was not fully entered"))
      });
  }

  function button(){
    axios
    .get(`${url}/auth/user/`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
    .then((res) => {
      document.querySelector("#first_name").value = res.data.first_name;
      document.querySelector("#last_name").value = res.data.last_name;
      document.querySelector("#username").value = res.data.username;
      console.log(res.data);
      document.querySelector("#phone_number").value = res.data.phone_number;
      document.querySelector("#birthday").value = res.data.birthday;
      document.querySelector("#adress").value = res.data.adress;
      document.querySelector("#description").value = res.data.description;
      setUser(res.data);
        document.querySelector("#first_name").value = res.data.first_name;
        document.querySelector("#last_name").value = res.data.last_name;
        document.querySelector("#username").value = res.data.username;
        document.querySelector("#phone_number").value = res.data.phone_number;
        document.querySelector("#birthday").value = res.data.birthday;
        document.querySelector("#adress").value = res.data.adress;
        document.querySelector("#description").value = res.data.description;

    });
    setData(1);
  }

  function postPassword(){

  }

  return (
    <div>
      {loader===1?(
      <div>
        <Usernavbar />


          <div className="katta12">
            <div className="all-button">
              <button
                style={
                  data === 1
                    ? { background: "#6b3d0c", color: "white", border: "none" }
                    : { background: "white", color: "black", border: "none" }
                }
                onClick={() => {
                  button()
                }}
              >
                Account details
              </button>

              <button
                style={
                  data === 2
                    ? { background: "#6b3d0c", color: "white", border: "none" }
                    : { background: "white", color: "black", border: "none" }
                }
                onClick={() => {
                  setData(2);
                }}
              >
                Password change
              </button>
            </div>
            <div className="katta">
              {data === 1 ? (
                <div className="mnb">
                  <div className="accaunt-detailes">
                    <div className="form1">
                      <div className="inputla">
                        <h2>Your contact information</h2>

                        <div className="inputs1" id="asd">
                          <div className="input1">
                            <h2>Name</h2>
                            <input
                              type="text"
                              className="username"
                              id="first_name"
                            />
                            <h2>Surname </h2>
                            <input
                              type="text"
                              className="last_name"
                              id="last_name"
                            />
                          </div>
                          <div className="input1">
                            <h2>Birthday</h2>
                            <input
                              type="date"
                              className="birthday"
                              id="birthday"
                            />
                            <h2>Address</h2>
                            <input type="text" className="email" id="adress" />
                          </div>
                        </div>
                        <div className="inputs1">
                          <div className="input1">
                            <h2>Telephone</h2>
                            <input
                              type="number"
                              className="passportNum"
                              id="phone_number"
                            />
                          </div>
                          <div className="input1">
                            <h2>Nickname</h2>

                            <input
                              type="text"
                              className="username"
                              id="username"
                            />
                          </div>
                        </div>
                        <div className="inputs1">
                          <div className="input1">
                            <h2>Description</h2>

                            <input
                              type="text"
                              className="passportSer"
                              id="description"
                            />
                          </div>
                        </div>
                        <div className="inputs111">
                          <button onClick={() => putUser()}>Keeping</button>
                        </div>
                      </div>
                    </div>
                    <div className="profil">
                      <h2>Your photo</h2>
                      <div className="profil1">
                        <input id="img" type="file" />
                        <img src={"https://baisan.onrender.com"+user.image} alt="" />
                      </div>
                      <h2 className="bb1">Upload a profile photo</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mnb">
                  {data === 2 ? (
                    <div className="mnb">
                      <div className="change-password">
                        <div className="change">
                          <h2>Change Password</h2>
                          <div className="inpu1">
                            <h2>Old password</h2>
                            <input className="oldPassword" type="text" />
                            <div className="error">Старый пароль ошибка, введите правильно</div>
                            <h2> New password</h2>
                            <input className="passwordChange" type="password" />
                            <div className="error">{state1==="en"?("The password cannot be less than 8"):("Пароль не может быть меньше 8")}</div>
                            <h2>Confirm new password</h2>
                            <input className="restPassword" type="password" />
                          </div>
                          <div className="error">Новый пароль и повторяющийся пароль должны быть одинаковыми</div>
                          <button onClick={()=>postPassword()}>Save</button>
                        </div>
                      </div>
                    </div>
                  ) : data === 4 ? (
                    <div id="mlk" className="nmbv">
                      <div className="regionDv">
                        <div className="divAdress">
                          <h2>Add an address</h2>
                          <br />

                          <div className="inpla11">
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>enter the country</h2>
                                <input className="countrySlc" id="countrySlc" />
                              </div>
                              <div className="in11">
                                <h2>enter the area</h2>
                                <input className="regionSlc" id="regionSlc" />
                              </div>
                            </div>{" "}
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>enter the city</h2>
                                <input className="citySlc" id="citySlc" />
                              </div>
                              <div className="in11">
                                <h2>enter the county</h2>

                                <input
                                  className="districtSlc"
                                  id="districtSlc"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="regionAdd" id="region1">
                            <div className="in11">
                              <h2>enter the street</h2>
                              <input className="streetSlc" id="streetSlc" />
                            </div>
                          </div>

                          <button>Add</button>
                        </div>

                        <div className="adres2Big">
                          <div className="divAdress2">
                            <h2> Edit Address</h2>
                            <br />
                            <p></p>
                            <div className="inpla11">
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>enter the country</h2>
                                  <input
                                    className="countrySlc2"
                                    id="countrySlc2"
                                  />
                                </div>
                                <div className="in11">
                                  <h2>enter the region</h2>
                                  <input
                                    className="regionSlc2"
                                    id="regionSlc2"
                                  />
                                </div>
                              </div>
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>enter the city</h2>
                                  <input className="citySlc2" id="citySlc2" />
                                </div>

                                <div className="in11">
                                  <h2>enter the area</h2>
                                  <input
                                    className="districtSlc2"
                                    id="districtSlc2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="regionAdd" id="region1">
                              <div className="in11">
                                <h2>enter the street</h2>
                                <input className="streetSlc2" id="streetSlc2" />
                              </div>
                            </div>
                            <div className="btnddiv">
                              <button>To close</button>
                              <button>Save</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ba">
                      <div className="kok">
                        <center>
                          <h1>There are no favorites yet!</h1>
                        </center>
                      </div>
                    </div>
                  )}{" "}
                </div>
              )}
            </div>
            <Footer />
          </div>
       
      </div>):(<Loader/>)}

    </div>
  );
}
