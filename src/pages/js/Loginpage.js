
import React, { Component, useEffect, useState } from "react";
import '../css/Loginpage.css'
import Usernavbar from "../js/Usernavbar"

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






    return (
        <div>

            <div>
<Usernavbar/>

                <div className="katta12">


<div className="all-button">
                        <button
                            style={
                                data === 1
                                    ? { background: "#536DFD", color: "white",border:'none' }
                                    : { background: "white", color: "black",border:'none' }
                            }
                            onClick={() => { setData(1); }}

                        >
                            Реквизиты счета

                        </button>

                        <button
                            style={
                                data === 2
                                    ? { background: "#536DFD", color: "white",border:'none' }
                                    : { background: "white", color: "black" ,border:'none'}
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
                                                        id="username"
                                                    />
                                                    <h2>Телефон </h2>
                                                    <input type="number" className="phone" id="phone" />
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
                                                       
                                                            Электронная почта
                                                           
                                                    </h2>
                                                    <input type="text" className="email" id="email" />
                                                </div>
                                            </div>
                                            <div className="inputs1">
                                                <div className="input1">
                                                    <h2>
                                                        Номер паспорта
                                                    </h2>
                                                    <input
                                                        type="number"
                                                        className="passportNum"


id="passportNum"
                                                    />
                                                </div>
                                                <div className="input1">
                                                    <h2>

                                                        Паспорт серия

                                                    </h2>


<input
                                                        type="text"
                                                        className="passportSer"
                                                        id="passportSer"
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
                                        <h2
                                            className="dele1"
                                            onClick={() => {
                                                localStorage.clear();
                                                window.location = "/";
                                            }}
                                        >
                                        
                                                Удалить аккаунт
                                             
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