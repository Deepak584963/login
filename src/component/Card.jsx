import React from 'react'

function Card({restaurant}) {
    console.log(restaurant)
    const {id  ,name,cloudinaryImageId ,costForTwoString ,deliveryTime, cuisines} = restaurant.data
  return (

    <>
      <div
          className=" bg-white m-4 p-6 w-72 h-80"
         
          >
            <img
              className=""
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
              }
              alt={name}
              />
            <h2 className="font-semibold my-2 text-gray-800 mt-5">{name}</h2>
            <p className='text-xs font-medium  text-gray-500 my-2'>{cuisines.join(',').slice(0,64)}</p>
            <div className='flex justify-between'>
            <p className="text-xs font-normal  text-gray-500 my-2">Ratings-5.0</p>
            <p className="text-xs font-normal  text-gray-500 my-2">{deliveryTime}Min</p>
            <p className="text-xs font-normal  text-gray-500 my-2">{costForTwoString}</p>
            </div>
          </div>
    </>
  )
}

export default Card
