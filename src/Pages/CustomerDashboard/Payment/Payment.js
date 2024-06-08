
// import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import CheckOutForm from "./CheckOutForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51Jvm9zD8Za3ly54iWHHCWbKT3mPVrUzRjFqc4sLXszNuCyJik2OecofEeoACfkEADrsqS8K8LfsM2NOK1VsJwjpN00HZb4icSe"
);

const Payment = () => {
  const [totalOrder, setTotalOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://the-white-hall-ju-server-main.vercel.app/myOrder/${user?.email}
    `)
      .then((res) => res.json())
      .then((data) => setTotalOrder(data));
  }, [user?.email]);

  let sum = 0;
  totalOrder.forEach((pd) => {
    sum += +pd.price;
  });

  console.log(totalOrder);
  return (
    <>
      <div className="place-order">
        <input type="text" defaultValue={user.displayName} />
        <input type="text" defaultValue={user.email} />
        <Table bordered responsive>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {totalOrder.map((product) => (
              <tr key={product._id}>
                <>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>Order Total: {sum}</p>
        {totalOrder.length ? (
          <Elements stripe={stripePromise}>
            <CheckOutForm sum={sum} />
          </Elements>
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </>
  );
};

export default Payment;