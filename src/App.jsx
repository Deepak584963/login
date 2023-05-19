import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./component/Body";
import AllRestaurant from "./component/AllRestaurant";
import Restaurant from "./component/Restaurant";
import { Provider } from "react-redux";
import store from "./Utilities/Store";
import Cart from "./component/Cart";
import Login from "./component/Login"
import Register from "./component/Register"
import Logout from "./component/Logout";
import ContactUs from "./component/ContactUs";
import About from "./component/about"

function App() {
  return (
    <Provider store={store}>
    
      <Outlet />
    
    </Provider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <AllRestaurant />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/Restaurant/:resId",
            element: <Restaurant />,
          },
          {
            path: "/contact",
            element: <ContactUs />,
          },
          {
            path: "/about",
            element: <About />,
          }
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/Logout",
        element: <Logout/>,
      },
    ],
  },
]);
export default App;
