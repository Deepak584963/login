import React from 'react'

function Info({data}) {
  return (
    <>
      <div className=" w-full bg-white">
          <img 
            className="rounded-2xl h-60 "
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              data.cloudinaryImageId
            }
          />
          <h2 className=" font-bold text-2xl text-slate-700 mt-8">{data?.name}</h2>
          <p className="text-sm mt-2 border-t-2	">{data.cuisines}</p>
          <p className=" text-sm pb-3 border-dotted border-b-2 	">
            {data.areaName},{data.city},{data.sla?.lastMileTravelString}
          </p>
          <p className="text-xs font-medium  text-gray-500 my-2">
            1.3 kms | ₹25 Delivery fee will apply
          </p>
          <p className="m-1">{data.locality}</p>
          <div className="flex justify-between ">
            <h3 className="font-bold bg-slate-200 p-2 my-5">
              {data.sla?.deliveryTime}Mins
            </h3>
            <h3 className="font-bold bg-slate-200 p-2 my-5">
              {data.costForTwoMessage}
            </h3>
            <h1 className="font-extrabold bg-slate-200 p-2 my-5">
              Rating {data.avgRating}
            </h1>
          </div>
        </div>
    </>
  )
}

export default Info
