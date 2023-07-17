
import React, { Component, useEffect, useState } from "react";
import '../css/Loginpage.css'
import axios from "axios";
import url from "./Host"


export default function Loginpage() {
    const [user, setUser] = React.useState([]);
    const [data, setData] = React.useState(1);
    const [manzil, setManzil] = React.useState([]);
    const [adress, setAdress] = React.useState([]);
    const [adresput, setAdresput] = React.useState([]);
    const [state, setState] = React.useState();
    const [loader, setLoader] = React.useState(2);



    const plus = () => {
        setData(data + 1);
    };
    const minus = () => {
        if (data > 0) {
            setData(data - 1);
        }
    };

    
    function putUser(){
        var formdata=new FormData()
        formdata.append("first_name",document.querySelector("#first_name").value)
        formdata.append("last_name",document.querySelector("#last_name").value)
        formdata.append("username",document.querySelector("#username").value)
        formdata.append("image",document.querySelector("#image").filed[0])
        formdata.append("phone_number",document.querySelector("#phone_number").value)
        formdata.append("birthday",document.querySelector("#birthday").value)
        formdata.append("balance",document.querySelector("#balance").value)
        formdata.append("adress",document.querySelector("#adress").value)
        formdata.append("description",document.querySelector("#description").value)

        axios.put(`${url}/auth/user/`,formdata,{ headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") }}).then(res=>{
            alert("ishladi")
        })
        .catch(err=>{
            alert("ishlamadi")
        })
    }




    return (
        <div>

            <div>


                <div className="katta12">


                    <div className="all-button">
                        <button
                            style={
                                data === 1
                                    ? { background: "#536DFD", color: "white", border: 'none' }
                                    : { background: "white", color: "black", border: 'none' }
                            }
                            onClick={() => { setData(1); }}

                        >
                            Реквизиты счета

                        </button>

                        <button
                            style={
                                data === 2
                                    ? { background: "#536DFD", color: "white", border: 'none' }
                                    : { background: "white", color: "black", border: 'none' }
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
                                            <h2>
                                                Ваша контактная информация
                                            </h2>


                                            <div className="inputs1" id="asd">
                                                <div className="input1">
                                                    <h2>Имя</h2>
                                                    <input
                                                        type="text"
                                                        className="username"
                                                        id="first_name"
                                                    />
                                                    <h2>Фамилия </h2>
                                                    <input type="text" className="last_name" id="last_name" />
                                                </div>
                                                <div className="input1">
                                                    <h2>
                                                        День рождения

                                                    </h2>
                                                    <input
                                                        type="date"
                                                        className="birthday"
                                                        id="birthday"
                                                    />
                                                    <h2>

                                                    Адрес

                                                    </h2>
                                                    <input type="text" className="email" id="adress" />
                                                </div>
                                            </div>
                                            <div className="inputs1">
                                                <div className="input1">
                                                    <h2>
                                                        Телефон
                                                    </h2>
                                                    <input
                                                        type="number"
                                                        className="passportNum"


                                                        id="phone_number"
                                                    />
                                                </div>
                                                <div className="input1">
                                                    <h2>

                                                        Прозвище

                                                    </h2>


                                                    <input
                                                        type="text"
                                                        className="username"
                                                        id="username"
                                                    />
                                                </div>
                                            </div>
                                            <div className="inputs1">
                                                <div className="input1">
                                                    <h2>

                                                    Описание

                                                    </h2>


                                                    <input
                                                        type="text"
                                                        className="passportSer"
                                                        id="description"
                                                    />
                                                </div>
                                            </div>
                                            <div className="inputs111">
                                                <button  >
                                                    Хранение
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profil">
                                        <h2>
                                            Ваш фото
                                        </h2>
                                        <div className="profil1">
                                            <input type="file" className="image" />


                                        </div>
                                        <h2 className="bb1">

                                            Загрузить фото профиля

                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mnb">
                                {data === 2 ? (
                                    <div className="mnb">
                                        <div className="change-password">
                                            <div className="change">
                                                <h2>

                                                    Изменить пароль

                                                </h2>
                                                <div className="inpu1">



                                                    <h2>
                                                        Старый пароль
                                                    </h2>
                                                    <input className="oldPassword" type="text" />
                                                    <h2>
                                                        {" "}
                                                        Новый пароль
                                                    </h2>
                                                    <input className="passwordChange" type="password" />
                                                    <h2>

                                                        Подтвердить новый пароль
                                                    </h2>
                                                    <input className="restPassword" type="password" />
                                                </div>
                                                <button >
                                                    Сохранять
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : data === 4 ? (
                                    <div id="mlk" className="nmbv">
                                        <div className="regionDv">
                                            <div className="divAdress">
                                                <h2>

                                                    Добавить адрес


                                                </h2>
                                                <br />


                                                <div className="inpla11">
                                                    <div className="regionAdd">
                                                        <div className="in11">
                                                            <h2>

                                                                введите страну
                                                            </h2>
                                                            <input className="countrySlc" id="countrySlc" />
                                                        </div>
                                                        <div className="in11">
                                                            <h2>
                                                                введите область
                                                            </h2>
                                                            <input className="regionSlc" id="regionSlc" />
                                                        </div>
                                                    </div>{" "}
                                                    <div className="regionAdd">
                                                        <div className="in11">
                                                            <h2>
                                                                введите город

                                                            </h2>
                                                            <input className="citySlc" id="citySlc" />
                                                        </div>
                                                        <div className="in11">
                                                            <h2>
                                                                введите округ
                                                            </h2>



                                                            <input
                                                                className="districtSlc"
                                                                id="districtSlc"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="regionAdd" id="region1">
                                                    <div className="in11">
                                                        <h2>
                                                            введите улицу
                                                        </h2>
                                                        <input className="streetSlc" id="streetSlc" />
                                                    </div>
                                                </div>

                                                <button >
                                                    Добавлять
                                                </button>
                                            </div>

                                            <div className="adres2Big">
                                                <div className="divAdress2">
                                                    <h2>
                                                        {" "}
                                                        Редактировать Адрес
                                                    </h2>
                                                    <br />
                                                    <p></p>
                                                    <div className="inpla11">
                                                        <div className="regionAdd">
                                                            <div className="in11">
                                                                <h2>

                                                                    введите страну
                                                                </h2>
                                                                <input
                                                                    className="countrySlc2"
                                                                    id="countrySlc2"
                                                                />
                                                            </div>
                                                            <div className="in11">
                                                                <h2>
                                                                    введите регион
                                                                </h2>
                                                                <input
                                                                    className="regionSlc2"
                                                                    id="regionSlc2"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="regionAdd">
                                                            <div className="in11">
                                                                <h2>
                                                                    введите город
                                                                </h2>
                                                                <input className="citySlc2" id="citySlc2" />
                                                            </div>



                                                            <div className="in11">
                                                                <h2>
                                                                    введите район
                                                                </h2>
                                                                <input
                                                                    className="districtSlc2"
                                                                    id="districtSlc2"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="regionAdd" id="region1">
                                                        <div className="in11">
                                                            <h2>
                                                                введите улицу
                                                            </h2>
                                                            <input className="streetSlc2" id="streetSlc2" />
                                                        </div>
                                                    </div>
                                                    <div className="btnddiv">
                                                        <button>
                                                            Закрыть
                                                        </button>
                                                        <button>
                                                            Сохранить
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="ba">
                                        <div className="kok">
                                            <center>
                                                <h1>
                                                    Избранного пока нет!
                                                </h1>
                                            </center>
                                        </div>
                                    </div>
                                )}{" "}
                            </div>
                        )}
                    </div>


                </div>
            </div>



        </div>
    );
}