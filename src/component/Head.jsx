import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pngegg from "../assets/pngegg.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
function Head() {
  const cart = useSelector((state) => state.cart.item);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className=" flex justify-between  h-24">
      <div>
        <img className="h-20 rounded-3xl " src={pngegg} alt="logo" />
      </div>
      <div className=" bg-blue-950 h-10 w-110 my-5 rounded-3xl text-center ">
        <Link
          className=" m-1 px-2 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50"
          to="/"
        >
          Home
        </Link>
        <Link
          className="de m-1 px-2 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50"
          to="/contact"
        >
          contact
        </Link>
        <Link
          className="m-1 px-2 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50"
          to="/about"
        >
          about
        </Link>
        <Link
          className="m-1 px-2 py-1 rounded-lg inline-block align-middle hover:bg-slate-950 text-yellow-50"
          to="/cart"
        >
          Cart {cart.length == 0 ? "" : cart.length}
        </Link>
      </div>

      <div className="m-5 pt-2">
        {user ? (
          <Link className=" p-2 bg-slate-400 rounded-xl" to="/logout">
            <LogoutIcon></LogoutIcon>
            Logout
          </Link>
        ) : (
          <Link className=" p-2 bg-slate-400 rounded-xl" to="/login">
            <LoginIcon></LoginIcon>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Head;
