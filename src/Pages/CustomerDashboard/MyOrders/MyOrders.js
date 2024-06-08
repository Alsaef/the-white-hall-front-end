import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import './MyOrder.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://the-white-hall-ju-server-main.vercel.app/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);



    const handleOrderCancel = id => {
        const proceed = window.confirm('Are you sure you want to Cancel this Order')
        if (proceed) {
            const url = `https://the-white-hall-ju-server-main.vercel.app/cancelOrder/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = orders?.filter(order => order._id !== id);
                        setOrders(remaining);

                    }
                })
        }
    }

    return (
        < div className="container my-order-container custom-body" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">{orders.length}</span> </h1>
            </div>

            <table className="table table-dark text-center table-responsive" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>
                        <th  >Product</th>
                        <th >Image</th>
                        <th >Price</th>
                        <th >Person</th>
                        <th >Amount</th>
                        <th >Date</th>
                        <th >Event Type</th>
                        <th >Status</th>
                        <th >Action</th>
                    </tr>
                </thead>
                {orders?.map((order) => (
                    <tbody>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <td>{order.name}</td>
                            <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td>
                            <td>{order.price}</td>
                            <td>{order.person}</td>
                            <td>{order.totalCost}</td>
                            <td>{order.date}</td>
                            <td>{order.event}</td>
                            <td>{order.status}</td>
                            <td> <button
                                className="btn btn-danger"
                                onClick={() => handleOrderCancel(order._id)}
                            >
                                Cancel Order
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >

    );
};

export default MyOrders;