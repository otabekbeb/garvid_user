import React, { useState } from 'react'
import '../css/Aplata.css'
import Navbar from './Navbar'
import Footer1 from '../js/Footer1'
import Usernavbar from '../js/Navbar'
import PayPal from "../../component/PayPal";
import StripeContainer from '../../component/StripeContainer';


export default function Oplata() {

    const [page, setPage] = useState(0)

    return (
        <div>
            <Usernavbar />
            <div className="container2_bid_div">
                <div className="container2">
                    <div className="oplata_button_div"><button style={page == 1 ? { backgroundColor: "#6b3d0c", color: "#fff" } : {}} onClick={() => setPage(1)}>Stripe</button><button style={page == 0 ? { backgroundColor: "#6b3d0c", color: "#fff" } : {}} onClick={() => setPage(0)}>PayPal</button></div>
                    {page == 1 ? (
                        <div className='PayPal_big_div'><StripeContainer /></div>


                    ) : (<div className='PayPal_big_div'><PayPal /></div>)}
                </div>
            </div>

            <Footer1 />

        </div>
    )
}
