import React, { useEffect, useState } from "react";
import './Packages.css';
import Loader from '../../Assets/img/loading.gif';
import Package from "./Package";


const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
      fetch(" https://the-white-hall-ju-server-main.vercel.app/packages")
        .then((res) => res.json())
        .then((data) => setPackages(data));
    }, []);
  const  MostDesirePackages=packages.slice(0,3);
    return (
        <div id="packages ">
        <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
       Most Desire Food Packages      </h2>
  {MostDesirePackages.length===0 ? <span>   <div className=" justify-content-center w-100 d-flex ">
                                  <img src={Loader} alt="" width="300" height="300"/>
                              </div></span>:(<div className="row row-cols-1 row-cols-md-3 m-2  ">
          {MostDesirePackages.map((singlepPackage) => (
                     <Package key={singlepPackage._id} singlepPackage={singlepPackage}></Package>

           
  
          ))}
        </div>)}
  
  
  
      </div>
    );
};

export default Packages;