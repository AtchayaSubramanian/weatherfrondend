import React from "react"; 
// import './css/home.css';

import { Link } from "react-router-dom";
function Login() {
  return (

    <div className="logLogin" >
      
      <div className="login">    
          <form id="login" name="suForm">    
            <label className="la" ><b>Email Id:</b>
            </label><br />
            <input type="E  mail" name="uname" className="uname" placeholder="EmailID" />    
            <br /><br />    
            <label className="la"><b>Password:</b>    
            </label>    
            <input type="Password" name="Pass" id="Pass" placeholder="Password" onclick="resetBut()" />    
            <br /><br /> <br /> <br />
            <input type="checkbox" id="check" />    
            <span>Remember me</span>    
            <br /><br />    
            <input type="button" name="log" id="log" />
        <div className="but">
          <Link to='/weatherget'>Login</Link>     
        </div>
            <br /><br /> <br /><br />
            <div className="urll">
              <Link to="/weatherpost">Create an Account</Link>
            </div>
            <a className="fpass">Forgot Password?</a>    
          </form>
      </div></div>
  );
}
export default Login;