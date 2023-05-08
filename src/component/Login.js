import React from 'react'
import { useState } from 'react';
import  Axios  from "axios"
import { useNavigate } from 'react-router-dom';



const Login = () => {
const [data, setData] = useState({Email:"",Password:"",});
 const navigate = useNavigate();

function Updatedata(e){
const name = e.target.name
const value = e.target.value

setData({...data,[name]:value})
};
  

async function Submitdata(e){
   
 e.preventDefault();
 const{Email ,Password} = data
 console.log(Email ,Password)
 try {
          const res = await Axios.post("/login",{
            // method:'POST',
            // headers:{
            //   "Content-Type": "application/json"
            // },
            
            // body: JSON.stringify(

            //   )
            Email ,Password
           
         })
         
         console.log(res) 
         if (res.status === 201) {
          navigate('/');
         }else{
         }
          
 } catch (error) {
  console.log(error) 
 }
  }

 
    

  return (
    <div>
     <form>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" name="Email" onChange={Updatedata}/>
    <label className="form-label" htmlFor="form2Example1" >Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control"  name="Password" onChange={Updatedata} />
    <label className="form-label" htmlFor="form2Example2" >Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="form2Example31" />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" className="btn btn-primary btn-block mb-4" onClick={Submitdata}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
  )
}

export default Login
