import React from 'react'
import { useState } from 'react';
import  Axios  from "axios"
import { useNavigate } from 'react-router-dom';


const Register = () => {
const [data, setData] = useState({firstName:"",lastName:"",Email:"",Password:"",city:"",state:"",zip:""});
const navigate = useNavigate();

function Updatedata(e){
const name = e.target.name
const value = e.target.value

setData({...data,[name]:value})
};
  

async function Submitdata(e){
   
 e.preventDefault();
 const {firstName,lastName,Email,Password,city,state,zip} = data
 console.log(firstName,lastName,Email,Password,city,state,zip)
 try {
          const res = await Axios.post("http://localhost:5000/register",{
            // method:'POST',
            // headers:{
            //   "Content-Type": "application/json"
            // },
            
            // body: JSON.stringify(

            //   )
            firstName,lastName,Email,Password,city,state,zip
           
         })
         if (res.status === 201) {
          navigate('/login');
         }
          console.log(res) 
 } catch (error) {
  console.log(error) 
 }
  };
      
    
    // Example starter JavaScript htmlFor disabling form submissions if there are invalid fields
    (function() {
     
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classNameList.add('was-validated');
          }, false);
        });
      }, false);
    })();
    
    



  return (
    <div>
    <form className="needs-validation" noValidate>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom01">First name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="FirstName" name="firstName" onChange={Updatedata}    required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Last name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name"  name="lastName" onChange={Updatedata} required/>
      <div className="valid-feedback">
        Looks good!
      </div>
      
    </div>
     <div className="col-md-3 mb-3">
    <label className="form-label" htmlFor="form2Example1" >Email address</label>
    <input type="email"  className="form-control" id="form2Example1" name="Email" onChange={Updatedata}/>
  </div>
  <div className="col-md-3 mb-3">
    <label className="form-label" htmlFor="form2Example2" >Password</label>
    <input type="password" id="form2Example2" className="form-control"  name="Password" onChange={Updatedata} />
  </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationCustom03">City</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="City"  name="city" onChange={Updatedata} required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationCustom04">State</label>
      <input type="text" className="form-control" id="validationCustom04" placeholder="State"  name="state" onChange={Updatedata} required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationCustom05">Zip</label>
      <input type="text" className="form-control" id="validationCustom05" placeholder="Zip"  name="zip" onChange={Updatedata} required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox"  id="invalidCheck" onChange={Updatedata} required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div> 
  <button className="btn btn-primary" type="submit" onClick={Submitdata}>Submit form</button>
</form>



    </div>
  )
}

export default Register
