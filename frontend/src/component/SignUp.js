import React,{useState} from 'react';
import {Link} from "react-router-dom"
import "../index";
import axios from "axios";

export default function SignUp() {
  const [data,setData]=useState({
    username:'', email:'',password:'',confirmpassword:''
  })
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://shoppingcart-mern-fdxx.onrender.com/register",data).then(
      res=>alert(res.data)
    )
  }
  return (
    <div className='form-outline'>
      <h3>Let’s create your free Thamma Online account</h3>
        <form onSubmit={handleSubmit} className='form'>
          
          <input type="text" name="username" placeholder='Enter Your Name' onChange={changeHandler}/>
          <input type="text" name="email" placeholder='Enter Your email' onChange={changeHandler}/>
          <input type="password" name="password" placeholder='Enter Your password' onChange={changeHandler}/>
          <input type="password" name="confirmpassword" placeholder='Re-Enter Your Password' onChange={changeHandler}/>
          <input type="submit" value="Register"/>
          </form><br/>
        <center><h5>Already have account <Link to="/login" className='loginLink'>Login</Link> Here</h5></center>
    </div>
  )
}
