import React, { useEffect, useState } from "react";
import "./Galary.css";
const Galary = () => {
  const [galaries, setGalaries] = useState();
  useEffect(() => {
    fetch(`https://the-white-hall-ju-server-main.vercel.app/galary`)
      .then((res) => res.json())
      .then((data) => setGalaries(data));
  });

  return (
    <div>
      <div className="conatiner">
        <div className="row">
          {galaries?.map((galary) => (
        <div className="col-md-3">
            <div className="card card-body">
             
             <img src={galary.img} alt="" className="w-100 img-fluid" height="300" />
             <h3 className="text-center">{galary.imgName}</h3>
           
         </div>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galary;
