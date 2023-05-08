import React, { createContext, useReducer } from "react";
import "./App.css";
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import About from "./component/about";
import Navbar from "./component/Navbar";
import ContactUs from "./component/ContactUs";
import Logout from "./component/Logout";

 function App() {
  const appContex = createContext()
 const [state, dispatch] = useReducer('Reducer',initialState)
  
  return (
    <>
    <appContex.Provider value={{state,dispatch}}>

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
    </appContex.Provider>
    </>
  )
};
export default App;
export {appContex};