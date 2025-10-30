import React,{useState} from 'react';
import "../index";
import axios from "axios";

export default function Login() {
  const [data,setData]=useState({
     email:'',password:''
  })
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://shoppingcart-mern-fdxx.onrender.com/login",data).then(
      res=>alert(res.data)
    )
  }
  return (
    <div className='form-outline'>
      <h3>Login Here</h3>
        <form onSubmit={handleSubmit} className='form' autoComplete='off'>
          <input type="text" name="email" placeholder='Enter Your email' onChange={changeHandler}/>
          <input type="password" name="password" placeholder='Enter Your password' onChange={changeHandler}/>
          <input type="submit" value="Login"/>
          </form><br/>
    </div>
  )
}
