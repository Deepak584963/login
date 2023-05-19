import React, { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStatus } from "../Utilities/CartSlice";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getdata = async () => {
    try {
      const res = await Axios.get("/Logout");
      const aa = res.data;
      // setData({...data, ...aa})

      console.log(aa);
      if (res.status === 200) {
        console.log("logout");
        navigate("/login");
        dispatch(updateStatus(false));
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return <div>hii</div>;
}

export default Logout;
