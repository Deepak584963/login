import React from 'react'
import Menu from './Menu'
function RestaurantMenu({menu}) {
  
  return (
    <div className='' >
      {menu.map((object, ind)=>{
       return( 
       
       <Menu key={ind} object={object}></Menu>
      );
      })}
    </div>
  )
}

export default RestaurantMenu
