import React, { useEffect, useState } from 'react';


const RemoveCenterPackage = () => {

    const [bookCenter, setBookCenters] = useState([])
    useEffect(() => {
        fetch('https://the-white-hall-ju-server-main.vercel.app/bookCenter')
            .then(res => res.json())
            .then(data => setBookCenters(data))
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE this Package')
        if (proceed) {
            const url = `https://the-white-hall-ju-server-main.vercel.app/bookCenter/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = bookCenter?.filter(singlebookCenter => singlebookCenter._id !== id);
                        setBookCenters(remaining);

                    }

                })
        }
    }
    return (
        <div>
        <div className="row">
        </div>
        <div className="d-flex mt-5 justify-content-center "><h1>Center Package</h1></div>
        <div className="container text-black mt-5 mb-5" >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {bookCenter.map(singlebookCenter => <div className="col" key={singlebookCenter.key} >
                    <div className="card h-100 hover custom-cart shadow-lg  mb-5 bg-body rounded">
                        <img src={singlebookCenter.img} className="img-fluid rounded-start w-100" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-danger text-center">{singlebookCenter.name}</h3>
                            <p className="card-text">{singlebookCenter.desc}</p>
                        </div>
                        <div className=" text-center">
                            <button className="btn btn-danger mb-4" onClick={() => handelDelete(singlebookCenter._id)}>Delete Center Package</button>
                        </div>
                    </div>
                </div>)
                }

            </div>
        </div >
    </div>
    );
};

export default RemoveCenterPackage;