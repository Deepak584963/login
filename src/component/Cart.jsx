import React from "react";
import { useSelector } from "react-redux";
import { IMG_LINK } from "../Utilities/constantent";

function Cart() {
  const item = useSelector((state) => state.cart.item);
  console.log(item);
  return (
    <div className="p-4 flex-col bg-gray-200 w-full">
      {item.map((data) => {
        const { imageId, name, price, ratings, defaultPrice } = data;
        return (
          <div className="w-[50%] mx-auto my-4 rounded-lg bg-white p-5">
            <div className="flex m-2 h-12" >
              <img src={IMG_LINK + imageId} alt="" />
              <span className="mx-2">
                <h3 className="font-semibold text-gray-700">Roll Express</h3>
                <p className="text-xs font-medium  text-gray-500 my-2">C Scheme</p>
              </span>
            </div>
            <div className="flex justify-between py-3 my-4">
              <h3 className="text-xs font-bold text-gray-500 my-2">{name}</h3>
              <div className=" bg-slate-300 rounded-lg">
                <button className="mx-1  p-1 ">-</button>
                <button className="border-x-2 border-gray-90 p-1">{item.length}</button>
                <button className="mx-1 p-1">+</button>
              </div>
              <h3>{defaultPrice/100}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
