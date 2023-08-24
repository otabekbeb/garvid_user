import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import url from "../pages/js/Host";
import {FcApproval} from "react-icons/fc"

export default function Paypal() {
  const paypal = useRef();
  const [page, setPage] = useState(0)
  const [state, setState] = useState("salom")

  useEffect(() => {
    axios.get(`${url}/auth/oneuser`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
    res.data.map(item=>{
      window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          var formdata = new FormData()
          formdata.append("amout", document.querySelector("#PayPal_input").value)
          formdata.append("user_id", localStorage.getItem("OneuserId"))
          axios.post(`${url}/pay/payment`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
          })

          
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: `Имя : ${item.username}  Фамилия : ${item.last_name}  Электронная почта : ${item.email}  Номер телефона : ${item.phone_number}`,
                amount: {
                  currency_code: "USD",
                  value: `${document.querySelector("#PayPal_input").value}`,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          res.data.map(item=>{
            var formdata1 = new FormData()
            formdata1.append("username", item.username);
            formdata1.append("balance",document.querySelector("#PayPal_input").value)
            formdata1.append("last_name", item.last_name);
            formdata1.append("email", item.email);
            formdata1.append("image", item.image);
            formdata1.append("phone_number",item.phone_number);
            formdata1.append("address", item.address);
            formdata1.append("description",item.description);
            
            axios.put(`${url}/auth/oneuser/${localStorage.getItem("OneuserId")}`, formdata1, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            })
          })
          document.querySelector(".paypal_big_div").style="position:fixed;top:80px;"
          setTimeout(() => {
            document.querySelector(".paypal_big_div").style="position:fixed;top:-100%;"
          }, 5000);
          document.querySelector("#PayPal_input").value=""

        },
        onError: (err) => {
          console.log(err);
        },
      }).render(paypal.current);
    })
    })
  }, []);



  return (
    <div>
          
          <p>Введите деньги</p>
          <input id="PayPal_input" type="number" />
          <div ref={paypal}></div>
            
          <div className="paypal_modal">
            <div className="paypal_big_div">
            <FcApproval/>Деньги были выплачены
            </div>
          </div>
    </div>
  );
}