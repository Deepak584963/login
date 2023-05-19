import React from "react";
import AllRestaurant from "./AllRestaurant";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import Footer from "./Footer";
function Body() {
  return(
  <>
  <Head />
  <Outlet />
  <Footer />;
  </>

  )
}

export default Body;
