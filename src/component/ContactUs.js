import React, { useState, useEffect } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
function ContactUs() {
    const [data, setData] = useState({ firstName: '', lastName: '', Email: '', message: '' });
    const navigate = useNavigate();
let aa = 'aa'
    const getdata = async () => {
        try {

            const res = await Axios.get("/ContactUs")
           const aa = res.data
          setData({...data, ...aa})
           
            console.log()
            if (res.status === 200) {
                console.log('mmmmmii')
                // navigate('/about')
            }
        } catch (error) {
            navigate('/login')
            console.log(error)
        }
    };

    useEffect(() => {
        getdata()
    },[aa])

    function inputvalue(e) {
        
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value });
    }
    async function formsubmit(e) {
        e.preventDefault()
        const { firstName, lastName, Email, message } = data
        
        try {
            const res = await Axios.post("/Contact", {
                // method:'POST',
                // headers:{
                //   "Content-Type": "application/json"
                // },

                // body: JSON.stringify(

                //   )
                firstName, lastName, Email, message

            });
            console.log('kkkkkkk')
            if (res.status === 200) {
           console.log('sms sent succegefully')
            }
            console.log(res)
        } catch (error) {
            console.log(error)
            console.log('hiii')
        }
    }
    console.log(data)
    return (
        <>
            <div className='main-div'>
                <form action="">
                    <div className='item'>


                        <input type="text" name='firstName' placeholder='firstName' value={data.firstName} onChange={inputvalue} />

                        <input type="text" name='lastName' placeholder='lastName' value={data.lastName} onChange={inputvalue} />

                        <input type="text" name='Email' placeholder='Email' value={data.Email} onChange={inputvalue} />
                    </div>
                    <div className='massege'>

                        <textarea name="message" id="" cols="70" rows="10" onChange={inputvalue} ></textarea>
                    </div>
                    <button onClick={formsubmit} >submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactUs
