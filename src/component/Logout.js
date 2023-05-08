import React ,{useEffect} from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';
function Logout() {
  const navigate = useNavigate();
     const getdata = async () => {
       try {

            const res = await Axios.get("/Logout")
           const aa = res.data
          // setData({...data, ...aa})
           
            console.log(aa)
            if (res.status === 200) {
              console.log('logout')
              navigate('/login')
            }
          } catch (error) {
            navigate('/login')
            console.log(error)
          }
    };

    useEffect(() => {
        getdata()
    },[])
    
  return (
    <div>hii</div>
  );
}

export default Logout
