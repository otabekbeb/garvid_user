import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { FcApproval } from "react-icons/fc"
import url from "../pages/js/Host"


const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success, setSuccess] = useState(false)
    const [page, setPage] = useState(0)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post(`${url}/payment`, {
                    amount: `${document.querySelector("#Stripe_input").value}`,
                    id
                })

                if (response.data.success) {
                    var formdata = new FormData()
            
                    formdata.append("amout", document.querySelector("#Stripe_input").value)
                    formdata.append("user_id", localStorage.getItem("OneuserId"))
                    formdata.append("type", 1)
                    axios.post(`${url}/pay/payment`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                    })
        
                    var formdata1 = new FormData()
                    formdata1.append("balance", document.querySelector("#Stripe_input").value)
        
                    axios.put(`${url}/auth/balance/${localStorage.getItem("OneuserId")}`, formdata1, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                    })

                    document.querySelector("#paypal_big_div").style = "position:fixed;top:80px;"
                    setTimeout(() => {
                      document.querySelector("#paypal_big_div").style = "position:fixed;top:-100%;"
                    }, 5000);
                    document.querySelector("#Stripe_input").value = ""
                    alert("Successful payment")
                    console.log("Successful payment")
                    setSuccess(true)
                } else {
                    alert("xato")
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <div>

                    <p>Введите деньги</p>
                    <input type="text" id="Stripe_input" />

                {!success ?
                    <form onSubmit={handleSubmit}>
                        <fieldset className="FormGroup">
                            <div className="FormRow">
                                <CardElement options={CARD_OPTIONS} />
                            </div>
                        </fieldset>
                        <button>Платить</button>
                    </form>
                    :
                    <div>
                        <h2>Ваш счет будет пополнен</h2>
                    </div>
                }
      <div  className="paypal_modal">
        <div id="paypal_big_div" className="paypal_big_div">
          <FcApproval />Деньги были выплачены
        </div>
      </div>

        </div>
    )
}