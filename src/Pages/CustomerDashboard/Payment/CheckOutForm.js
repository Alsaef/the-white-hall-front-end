import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ sum }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const price = sum;
  const [success, setSuccess] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    axios
      .post("https://the-white-hall-ju-server-main.vercel.app/create-payment-intent", {
        price: price,
      })
      .then(function (response) {
        setClientSecret(response.data.clientSecret);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    //   payment Intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment proccess successfully");
      console.log(paymentIntent);
    }

    //   saved to database

    const payment = {
      amount: paymentIntent?.amount,
      created: paymentIntent?.created,
      last4: paymentMethod?.card?.last4,
      transaction: paymentIntent?.client_secret.slice("_secret")[0],
    };

    axios
      .put(
        `https://the-white-hall-ju-server-main.vercel.app/bookedService/${user.email}`,
        {
          payment: payment,
        }
      )
      .then(function (response) {
        // if (response.data.acknowledged) {
        //   navigate("/dashboard/orders");
        // }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay {sum}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;