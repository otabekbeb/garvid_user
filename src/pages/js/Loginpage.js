import React, { useEffect, useState } from "react";
import "../css/Loginpage.css";
import axios from "axios";
import url from "./Host";
import Footer from "../js/Footer1";

import Usernavbar from "../js/Usernavbar";

export default function Loginpage() {
  const [user, setUser] = React.useState([]);
  const [data, setData] = React.useState(1);
  const [manzil, setManzil] = React.useState([]);
  const [adress, setAdress] = React.useState([]);
  const [adresput, setAdresput] = React.useState([]);
  const [loader, setLoader] = React.useState(2);
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
        user.map(item=>{
          document.querySelector("#first_name").value = item.first_name;
          document.querySelector("#last_name").value = item.last_name;
          document.querySelector("#username").value = item.username;
          document.querySelector("#phone_number").value = item.phone_number;
          document.querySelector("#birthday").value = item.birthday;
          document.querySelector("#adress").value = item.adress;
          document.querySelector("#description").value = item.description;
        })

      });

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
        state1==="ru"?(alert("Введенная информация")):(alert("Entered information"))
        window.location.reload();
      })
      .catch((err) => {
        state1==="ru"?(alert("Информация введена не полностью")):(alert("The information was not fully entered"))
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
  var formdata = new FormData()
  if (sessionStorage.getItem("password")===document.querySelector(".oldPassword").value) {
  formdata.append("old_password",document.querySelector(".oldPassword").value)
  const error=document.querySelectorAll(".error")
  error[0].style="display:none"
  document.querySelector(".oldPassword").style="border-color:#9cf;"  
  }else{
  const error=document.querySelectorAll(".error")
  error[0].style="display:block"
  document.querySelector(".oldPassword").style="border-color:red;"
  }
  if (document.querySelector(".passwordChange").value==document.querySelector(".restPassword").value) {
    const error=document.querySelectorAll(".error")
    error[2].style="display:none"
    document.querySelector(".passwordChange").style="border-color:#9cf;"
    document.querySelector(".restPassword").style="border-color:#9cf;"  
    formdata.append("new_password",document.querySelector(".passwordChange").value)  
  }else{
    const error=document.querySelectorAll(".error")
    error[2].style="display:block"
    document.querySelector(".passwordChange").style="border-color:red;"
    document.querySelector(".restPassword").style="border-color:red;"  
  }
  if (document.querySelector(".passwordChange").value<=8) {
    const error=document.querySelectorAll(".error")
    error[1].style="display:block"
    document.querySelector(".passwordChange").style="border-color:red;"
  }else{   
    const error=document.querySelectorAll(".error")
    error[1].style="display:none"
    document.querySelector(".passwordChange").style="border-color:#9cf;" 
    formdata.append("new_password",document.querySelector(".passwordChange").value) 
  }


  
  

    axios.put(`${url}/auth/change_password/`,formdata,{ headers: {Authorization:'Bearer ' + localStorage.getItem("token")}}).then(res=>{  
      state1==="ru"?(alert("Пароль обновлен")):(alert("Password updated"))
   sessionStorage.setItem("password",document.querySelector(".passwordChange").value)
   window.location.reload()
  }).catch(err=>{
    console.log(err);
  })
  }

  return (
    <div>
      <div>
        <Usernavbar />

        {state1 === "en" ? (
          <div className="katta12">
            <div className="all-button">
              <button
                style={
                  data === 1
                    ? { background: "#536DFD", color: "white", border: "none" }
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
                    ? { background: "#536DFD", color: "white", border: "none" }
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
        ) : (
          <div className="katta12">
            <div className="all-button">
              <button
                style={
                  data === 1
                    ? { background: "#536DFD", color: "white", border: "none" }
                    : { background: "white", color: "black", border: "none" }
                }
                onClick={() => {
                  button()
                }}
              >
                Реквизиты счета
              </button>

              <button
                style={
                  data === 2
                    ? { background: "#536DFD", color: "white", border: "none" }
                    : { background: "white", color: "black", border: "none" }
                }
                onClick={() => {
                  setData(2);
                }}
              >
                Смена пароля
              </button>
            </div>
            <div className="katta">
              {data === 1 ? (
                <div className="mnb">
                  <div className="accaunt-detailes">
                    <div className="form1">
                      <div className="inputla">
                        <h2>Ваша контактная информация</h2>

                        <div className="inputs1" id="asd">
                          <div className="input1">
                            <h2>Имя</h2>
                            <input
                              type="text"
                              className="username"
                              id="first_name"
                            />
                            <h2>Фамилия </h2>
                            <input
                              type="text"
                              className="last_name"
                              id="last_name"
                            />
                          </div>
                          <div className="input1">
                            <h2>День рождения</h2>
                            <input
                              type="date"
                              className="birthday"
                              id="birthday"
                            />
                            <h2>Адрес</h2>
                            <input type="text" className="email" id="adress" />
                          </div>
                        </div>
                        <div className="inputs1">
                          <div className="input1">
                            <h2>Телефон</h2>
                            <input
                              type="number"
                              className="passportNum"
                              id="phone_number"
                            />
                          </div>
                          <div className="input1">
                            <h2>Прозвище</h2>

                            <input
                              type="text"
                              className="username"
                              id="username"
                            />
                          </div>
                        </div>
                        <div className="inputs1">
                          <div className="input1">
                            <h2>Описание</h2>

                            <input
                              type="text"
                              className="passportSer"
                              id="description"
                            />
                          </div>
                        </div>
                        <div className="inputs111">
                          <button onClick={() => putUser()}>Хранение</button>
                        </div>
                      </div>
                    </div>
                    <div className="profil">
                      <h2>Ваш фото</h2>
                      <div className="profil1">
                        <input id="img" type="file" />
                        <img src={"https://baisan.onrender.com"+user.image} alt="" />
                      </div>
                      <h2 className="bb1">Загрузить фото профиля</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mnb">
                  {data === 2 ? (
                    <div className="mnb">
                      <div className="change-password">
                        <div className="change">
                          <h2>Изменить пароль</h2>
                          <div className="inpu1">
                            <h2>Старый пароль</h2>
                            <input className="oldPassword" type="text" />
                            <h2> Новый пароль</h2>
                            <input className="passwordChange" type="password" />
                            <h2>Подтвердить новый пароль</h2>
                            <input className="restPassword" type="password" />
                          </div>
                          <button>Сохранять</button>
                        </div>
                      </div>
                    </div>
                  ) : data === 4 ? (
                    <div id="mlk" className="nmbv">
                      <div className="regionDv">
                        <div className="divAdress">
                          <h2>Добавить адрес</h2>
                          <br />

                          <div className="inpla11">
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>введите страну</h2>
                                <input className="countrySlc" id="countrySlc" />
                              </div>
                              <div className="in11">
                                <h2>введите область</h2>
                                <input className="regionSlc" id="regionSlc" />
                              </div>
                            </div>{" "}
                            <div className="regionAdd">
                              <div className="in11">
                                <h2>введите город</h2>
                                <input className="citySlc" id="citySlc" />
                              </div>
                              <div className="in11">
                                <h2>введите округ</h2>

                                <input
                                  className="districtSlc"
                                  id="districtSlc"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="regionAdd" id="region1">
                            <div className="in11">
                              <h2>введите улицу</h2>
                              <input className="streetSlc" id="streetSlc" />
                            </div>
                          </div>

                          <button>Добавлять</button>
                        </div>

                        <div className="adres2Big">
                          <div className="divAdress2">
                            <h2> Редактировать Адрес</h2>
                            <br />
                            <p></p>
                            <div className="inpla11">
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>введите страну</h2>
                                  <input
                                    className="countrySlc2"
                                    id="countrySlc2"
                                  />
                                </div>
                                <div className="in11">
                                  <h2>введите регион</h2>
                                  <input
                                    className="regionSlc2"
                                    id="regionSlc2"
                                  />
                                </div>
                              </div>
                              <div className="regionAdd">
                                <div className="in11">
                                  <h2>введите город</h2>
                                  <input className="citySlc2" id="citySlc2" />
                                </div>

                                <div className="in11">
                                  <h2>введите район</h2>
                                  <input
                                    className="districtSlc2"
                                    id="districtSlc2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="regionAdd" id="region1">
                              <div className="in11">
                                <h2>введите улицу</h2>
                                <input className="streetSlc2" id="streetSlc2" />
                              </div>
                            </div>
                            <div className="btnddiv">
                              <button>Закрыть</button>
                              <button>Сохранить</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="ba">
                      <div className="kok">
                        <center>
                          <h1>Избранного пока нет!</h1>
                        </center>
                      </div>
                    </div>
                  )}{" "}
                </div>
              )}
            </div>

            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
