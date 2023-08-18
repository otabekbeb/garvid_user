import { useState } from "react";


export default function Koz() {
    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;
  
    return (
    <div className="wrapper-login">
       <div className="wrapper-form">
          <h2>Welcome Back!</h2>
          <form>
             <label>Email</label>
             <div>
                <input
                   type="email"
                   name="email"
                   required
                />
             </div>
             <label>Password</label>
             <div className="form-group">
                <input placeholder="aa"
                   type={changePassword ? "password" : "text"}
                   name="password"
                   required
                />
                <span className="icon"
                   onClick={() => {
                      setChangePassword(changeIcon);
                   }}
                >
                   {changeIcon ? <i class='bx bx-low-vision'></i> : <i class='bx bx-low-vision'></i>}
                </span>
             </div>
          </form>
       </div>
    </div>
  );
}
