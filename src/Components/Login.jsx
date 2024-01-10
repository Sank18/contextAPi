/* eslint-disable no-unused-vars */
import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext';

function Login() {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const {setUser}=useContext(UserContext)
    //user context kai andar jo values this wo fetch karne kai liye 
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password});
        //data bhej diya context mai 

    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='username'/>
        <input type='text' value={password} onChange={(e)=>{setpassword(e.target.value)}}placeholder='password'/>
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login