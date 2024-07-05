
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate()

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      //  window.location.href = "/Profile";
      navigate('/Profile')
      
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  }
  return (
    <div className="signup-container">

      <h2>Login</h2>
      <form className="signup-form" onSubmit={handlesubmit} >
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="submit" className="signup-button">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/Signup">Signup</Link>
      </p>
    </div>

  )
}
