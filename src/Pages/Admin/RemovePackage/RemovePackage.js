
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RemovePackage = () => {

    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://the-white-hall-ju-server-main.vercel.app/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE this Package')
        if (proceed) {
            const url = `https://the-white-hall-ju-server-main.vercel.app/packages/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = packages?.filter(singlePackage => singlePackage._id !== id);
                        setPackages(remaining);

                    }

                })
        }
    }
    return (
        <div>
            <div className="row">
            </div>
            <div className="d-flex mt-5 justify-content-center ">
                <h1 className="text-danger text-center">Packages</h1></div>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {packages.map(singlePackage => <div className="col" key={singlePackage.key} >
                        <div className="card h-100 hover custom-cart shadow-lg  mb-5 bg-body rounded">
                            <img src={singlePackage.img} className="img-fluid rounded-start w-100" alt="..." />
                            <div className="card-body p-5">
                                <h3 className="card-title text-danger text-center">{singlePackage.name}</h3>
                                <p className="card-text">{singlePackage.desc}</p>
                            </div>
                            <div className="  text-center d-flex">
                                <button className="btn btn-danger mx-2 mb-4" onClick={() => handelDelete(singlePackage._id)}>Delete Food Package</button>
                             <Link to={`/updatepckage/${singlePackage._id}`}><button className="btn btn-danger mx-2 mb-4">Update Food Package</button></Link>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div >
        </div>

    );
};

export default RemovePackage;