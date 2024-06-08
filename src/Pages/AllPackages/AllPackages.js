import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
      fetch(`https://the-white-hall-ju-server-main.vercel.app/packages`)
        .then((res) => res.json())
        .then((data) => setPackages(data));
    }, []);
    
    return (
      <div id="packages ">
      <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
        All Food Packages in Our Center 
      </h2>
    
        <div className="row row-cols-1 row-cols-md-3 m-2  ">
          {packages.map((singlePackage) => (
            <div className="col mb-4 " id="packages" key={singlePackage._id}>
              <div className="card h-100 shadow-lg mb-5 bg-body rounded">
                <img
                  src={singlePackage.img}
                  className="card-img-top  rounded"
                  alt="..."
                  height="450"
                />
                <div className="card-body p-3">
                  <h2 className="card-title text-danger text-center">{singlePackage.name}</h2>
                  <p className="card-text">{singlePackage.Description}</p>
                  <h3 className="text-primary mb-3 mt-4">Item</h3>
          <ol>
            <li>{singlePackage.item1}</li>
            <li>{singlePackage.item2}</li>
            <li>{singlePackage.item3}</li>
          </ol>

                </div>
                <div className=" text-center">
                  <small className="text-muted">
                    <h2 className="text-primary mt-1 mb-5">
                      Price: {singlePackage.price}
                    </h2> 
                    <Link to={`/placeOrder/${singlePackage._id}`}>
                      <button className="btn btn-danger mb-5 ">
                      <i className="fas fa-cart-plus"></i> Book Package 
                      </button>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
    );
};

export default AllPackages;
