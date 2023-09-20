// import React from 'react'
// import { useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// export default function Number() {
//     const [PhoneNumber, setPhoneNumber] = useState('')
//     const [valid, setValid] = useState(true);
//     const handleChange = (event) => {
//         const input = event.target.value;
//         setPhoneNumber(input);
//         setValid(validatePhoneNumber(input));

//     };
//     const validatePhoneNumber = (phoneNumber) => {
//         const phoneNumberPattern = /^\d{10}$/;
//         return phoneNumberPattern.test(phoneNumber);
//     }

//     return (
//         <div>
//             <label>
//                 PhoneNumber:
//                 <input
//                     type="text"
//                     value={PhoneNumber}
//                     onChange={handleChange} />
//             </label>
//             {!valid&&<p>Plese enter  a valid 10</p>}
//         </div>
//     )
// }
