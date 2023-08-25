import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import url from "../pages/js/Host";
import { FcApproval } from "react-icons/fc"

export default function Paypal() {
  const paypal = useRef();
  const [page, setPage] = useState(0)
  const [state, setState] = useState("salom")

  useEffect(() => {
    axios.get(`${url}/auth/oneuser`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
      res.data.map(item => {
        window.paypal.Buttons({
          createOrder: (data, actions, err) => {
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
            
            var formdata = new FormData()
            
            formdata.append("amout", document.querySelector("#PayPal_input").value)
            formdata.append("user_id", localStorage.getItem("OneuserId"))
            axios.post(`${url}/pay/payment`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            })

            var formdata1 = new FormData()
            formdata1.append("balance", document.querySelector("#PayPal_input").value)

            axios.put(`${url}/auth/balance/${localStorage.getItem("OneuserId")}`, formdata1, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            })

            document.querySelector(".paypal_big_div").style = "position:fixed;top:80px;"
            setTimeout(() => {
              document.querySelector(".paypal_big_div").style = "position:fixed;top:-100%;"
            }, 5000);
            document.querySelector("#PayPal_input").value = ""

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
          <FcApproval />Деньги были выплачены
        </div>
      </div>
    </div>
  );
}