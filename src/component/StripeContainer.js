import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useEffect, useState } from "react"
import PaymentForm from "./PaymentForm"
import axios from "axios"
import url from "../pages/js/Host"



export default function StripeContainer() {

	const [Strip_Payment, setStrip_Payment] = useState([])

	useEffect(() => {
		axios.get(`${url}/super/pay`, { headers: { Authorization: "Bearer" + localStorage.getItem("token") } }).then(res => {
			setStrip_Payment(res.data)
		})
	}, [])
	const PUBLIC_KEY = Strip_Payment.public_key

	const stripeTestPromise = loadStripe(PUBLIC_KEY)

	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}