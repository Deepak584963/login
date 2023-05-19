import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from "axios"

export default function About() {
  const navigate = useNavigate();

  const getdata = async () => {
    try {
      const res = await Axios.get("/about")

      console.log(res)
      if (res.status === 200) {
        navigate('/about')
      }
    } catch (error) {
      navigate('/login')
      console.log('hii')
    }
  };

  useEffect(() => {
    getdata()
  }, [])
  return (
    <div>
      <h1>about</h1>

    </div>
  )
}
