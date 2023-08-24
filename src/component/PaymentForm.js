import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
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
        console.log(paymentMethod, "slaom");


        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post(`${url}/payment`, {
                    amount: `${document.querySelector("#Stripe_input").value}`,
                    id
                })

                if (response.data.success) {
                    alert("Successful payment")
                    console.log("Successful payment")
                    setSuccess(true)
                } else {
                    alert("xato")
                }

            } catch (error) {
                alert(error)
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <>
            {page == 0 ? (
                <>
                    <p>Введите деньги</p>
                    <input type="text" id="Stripe_input" />
                    <button onClick={() => setPage(1)} >Платить</button>
                </>
            ) : (<>
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
            </>)}


        </>
    )
}