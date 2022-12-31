import React from "react";
import {useGlobelcontext} from './Context';

export default function Card() {
  const { alldata, removepage } = useGlobelcontext();
  return (
    <div>
      <div className="row">
        {alldata.map((element, id ) => {
          const { urlToImage, title, description, url } = element;
          return (
            <div className="mm" key={id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description.slice(0, 80)}</p>
                  <a href={url} className="btn btn-primary">
                    Read more
                  </a>
                  <button onClick={()=>removepage(id)}>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
