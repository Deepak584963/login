import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Info from "./Info";
import RestaurantMenu from "./RestaurantMenu";
function Restaurant() {
  const { resId } = useParams();
  const [data, setData] = useState("");
  const [divData, setDivData] = useState([]);
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    Getdata();
  }, []);

  async function Getdata() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await response.json();
    // const cards = json.data.cards[2].data.data.cards;
    setData(json.data.cards[0].card.card.info);
    const category = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    setDivData(category);
    
  }

  useEffect(() => {
    const NewData = divData.map((object) => {
      if (
        object.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return object.card.card;
      }
    });
    const filtredData = NewData.filter((value) => value !== undefined);
    setMenu(filtredData);
  
  }, [divData]);

  return (
    <>
      <div className=" w-[100%] flex ">
        <div className=" w-[50rem] mx-auto " >
        <Info data={data}></Info>
        
        <RestaurantMenu menu={menu}/>
        

        </div>
      </div>
    </>
  );
}

export default Restaurant;
