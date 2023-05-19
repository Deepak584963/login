import React, { useState, useEffect } from "react";
import Simmer from "./Simmer";
import Card from "./Card";
import { Link } from "react-router-dom";
function AllRestaurant() {
  const [data, setData] = useState([]);
  const [filteredData,setfilteredData ] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    Getdata();
  }, []);

  async function Getdata() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const cards = json.data.cards[2].data.data.cards;
    setData(cards);
    setfilteredData(cards)
 
  }

  function FilterData(searchText, data) {
    const filtereddata = data.filter((d) => {
      return d.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    
    return filtereddata;
  }

  return filteredData.length==0?(
    <Simmer></Simmer>):(
    <>
      <div className=" flex justify-center bg-gray-200 w-full">
        <div className="mt-2 h-11 flex">
          <input
            className=" rounded-l-3xl w-96 p-3 h-11  bg-white
            " placeholder=" Search Restaurant"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
          <button
            className=" p-3 text-xs text-white bg-slate-700 rounded-r-3xl w-24 "
            onClick={() => {
              const newData = FilterData(searchText, data);
              setfilteredData(newData);
              
            }}
            >
            Search
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-around bg-gray-200">
        {filteredData.map((restaurant) => {
        
          return <Link  key={restaurant.data.id} to={`/Restaurant/${restaurant.data.id}`}>
         <Card restaurant={restaurant}></Card>
         </Link>
})}
      </div>
      
    </>
  );
}

export default AllRestaurant;
