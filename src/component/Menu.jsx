import React from "react";
import { addItem } from "../Utilities/CartSlice";
import { useDispatch} from "react-redux";


function Menu({ object }) {
  const dispatch = useDispatch()

  const addItemHandler = (item) =>{
        dispatch(addItem(item))
  }
  return (
    <>
          <h1 className="  w-[50rem] font-bold text-gray-700 text-xl">{object.title}</h1>
      {object.itemCards.map((card) => {
          const { description, imageId, name, price, id } = card.card.info;
         
          return (
              <div key={id} className="bg-white flex my-8 py-3 w-[50rem] justify-between border-t-2">
           
            <div className="w-[30rem]">
              <h1 className="font-semibold my-2 text-gray-700">{name}</h1>
              <p className="text-sm font-semibold">Rs.{price/100}</p>
              <p className="text-xs font-medium  text-gray-500 my-2">{description}</p>
            </div>
             <div className=" w-32 h-24">
              <img className="  w-32 h-24 absolute rounded-md"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  imageId
                }
                alt="logo"
              />
              <button onClick={()=>addItemHandler(card.card.info)} className="bg-green-300 font-bold w-20 h-7 rounded-md absolute pb-3 mt-20 ml-6">add</button>
             </div>
          </div>
        );
      })}
    </>
  );
}

export default Menu;
