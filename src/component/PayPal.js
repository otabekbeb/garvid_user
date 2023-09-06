import { useState, useEffect } from "react";
import {
    PayPalScriptProvider,
    BraintreePayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { FcApproval } from "react-icons/fc"
import axios from "axios";
import url from "../pages/js/Host";
import errorpaypal from "../pages/img/istockphoto-1321436405-612x612.jpg"

// This values are the props in the UI
const style = { "label": "paypal", "layout": "vertical" };
const amount = "2";

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

    return (<BraintreePayPalButtons
        style={style}
        disabled={false}
        fundingSource="" // Available values are: ["paypal", "card", "credit", "paylater", "venmo"]
        forceReRender={[style, amount]}
        createOrder={function (data, actions) {
            return actions.braintree
                .createPayment({
                    flow: "checkout",
                    amount: document.querySelector("#PayPal_input").value, // Here change the amount if needed
                    currency: "USD", // Here change the currency if needed
                    intent: "capture",
                    enableShippingAddress: true,
                    shippingAddressEditable: false,
                    shippingAddressOverride: {
                        recipientName: "Scruff McGruff",
                        line1: "1234 Main St.",
                        line2: "Unit 1",
                        city: "Chicago",
                        countryCode: "US",
                        postalCode: "60652",
                        state: "IL",
                        phone: "123.456.7890",
                    },
                })
                .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                });
        }}
        onApprove={function (data, actions) {
            return actions.braintree
                .tokenizePayment(data)
                .then((payload) => {
                    var formdata = new FormData()
                    formdata.append("amout", document.querySelector("#PayPal_input").value)
                    formdata.append("user_id", localStorage.getItem("OneuserId"))
                    formdata.append("type",2)

                    axios.post(`${url}/pay/payment`, formdata, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                    })

                    var formdata1 = new FormData()
                    formdata1.append("balance", document.querySelector("#PayPal_input").value)

                    axios.put(`${url}/auth/balance/${localStorage.getItem("OneuserId")}`, formdata1, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
                    })

                    document.querySelector("#paypal_big_div1").style = "position:fixed;top:80px;"
                    setTimeout(() => {
                        document.querySelector("#paypal_big_div1").style = "position:fixed;top:-100%;"
                    }, 5000);
                    document.querySelector("#PayPal_input").value = ""
                    // Your code here after capture the order
                    console.log(JSON.stringify(payload));
                });
        }
        }
    />);
};

export default function App() {
    const [clientToken, setClientToken] = useState(null);
    const [Paypal_kluch, setPaypal_kluch] = useState([])

    useEffect(() => {
        (async () => {
            const response = await (
                await fetch(
                    "https://react-paypal-js-storybook.fly.dev/api/braintree/generate-client-token",
                    { method: "POST" }
                )
            ).json();
            setClientToken(response?.client_token || response?.clientToken);
        })();
        axios.get(`${url}/super/pay`, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).then(res => {
            setPaypal_kluch(res.data)
        }).catch(err=>{})
    }, []);

    return (
        <div>
            {clientToken ? (
                Paypal_kluch.paypal_kluch ? (<div style={{boxShadow:"0px 0px 15px #9DA7BB", maxWidth: "80%", minHeight: "200px", marginLeft:"10%", padding:"10px", borderRadius:"10px", marginTop:"20px", marginBottom:"20px"  }}>
                  <p>Введите сумму</p>
                    <input placeholder="1000$" type="text" id="PayPal_input" />
                    <PayPalScriptProvider
                        options={{
                            clientId: Paypal_kluch.paypal_kluch,
                            components: "buttons",
                            // dataUserIdToken: "your-tokenization-key-here",
                            dataClientToken: clientToken,
                            intent: "capture",
                            vault: false,
                        }}
                    >
                        <ButtonWrapper currency={"USD"} />
                    </PayPalScriptProvider>
                </div>) : (<div className="errorpaypal_bosa" > 
                <img src={errorpaypal} alt="" />
                 </div>) 
            ) : (
                <h1>Loading token...</h1>
            )}
            <div className="paypal_modal">
                <div id="paypal_big_div1" className="paypal_big_div">
                    <FcApproval />Деньги были выплачены
                </div>
            </div>
        </div>
    );
}