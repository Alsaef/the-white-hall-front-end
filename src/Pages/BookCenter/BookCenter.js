import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookCenter = () => {

    const [bookCenter, setBookCenters] = useState([]);
    useEffect(() => {
      fetch(`https://the-white-hall-ju-server-main.vercel.app/bookCenter`)
        .then((res) => res.json())
        .then((data) => setBookCenters(data));
    }, []);
    return (
        <div id="packages ">
        <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
          All Booking Center Package
        </h2>
      
          <div className="row row-cols-1 row-cols-md-3 m-2  ">
            {bookCenter.map((singlebookCenter) => (
              <div className="col mb-4 " id="packages" key={singlebookCenter._id}>
                <div className="card h-100 shadow-lg  mb-5 bg-body rounded">
                  <img
                    src={singlebookCenter.img}
                    className="card-img-top rounded"
                    alt="..."
                    height="450"
                  />
                  <div className="card-body ">
                    <h2 className="card-title text-danger text-center">{singlebookCenter.name}</h2>
                    <p className="card-text">{singlebookCenter.Description}</p>
  
                  </div>
                  <div className=" text-center">
                    <small className="text-muted">
                      <h3 className="text-primary mt-1 mb-5">
                        Price: {singlebookCenter.price}
                      </h3> 
                      <Link to={`/bookCenter/${singlebookCenter._id}`}>
                        <button className="btn btn-danger mb-5">
                        <i className="fas fa-cart-plus"></i> Book Center 
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

export default BookCenter;