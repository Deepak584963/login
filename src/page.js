import React from 'react';
import { useGlobelcontext } from './Context';

export default function Page () {

const {nextpage, prevpage} = useGlobelcontext();
    
  return (
    <div>
       <div className="btnn">
        <button className="" onClick={nextpage}>
          next
        </button>
        <button className="" onClick={prevpage}>
          prev
        </button>
      </div>
    
    </div>
  )
};
