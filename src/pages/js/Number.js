import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Number() {
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [valid, setValid] = useState(true);
    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));

    };
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    return (
        <div>
            <label>
               
                <PhoneInput  
                    inputStyle={{
                    width:'100%',
                    height:'50px',
                    // background:'#f4f7f9',
                    border:'none'
                    
                    }}
                    country={'uz'}
                    value={PhoneNumber}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                    }}
                />

            </label>
            {/* {!valid && <p>Plese enter  a valid 10</p>} */}
        </div>
    )
}
