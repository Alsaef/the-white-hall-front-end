import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Calendar from "react-calendar";
import { Button, Modal } from "react-bootstrap";

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams({});
  const { user } = useAuth();
  // const { user } = allContexts
  const [selected, setSelected] = useState({});
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 console.log(id);
  useEffect(() => {
    fetch(`https://the-white-hall-ju-server-main.vercel.app/packages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
        reset(data);
      });
  }, [id, reset]);

  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.status = "Pending";
    data.date = value.toLocaleDateString();
    data.totalCost = selected.price * data.person;

    fetch(`https://the-white-hall-ju-server-main.vercel.app/addOrders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        alert("order confirmed");
      });
  };

  return (
    <div className="container custom-body mt-5">
      <div className="row  align-items-center">
        <div className=" col-md-6">
          <div className="card custom-cart mb-3">
            <img src={selected.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-title">{selected.name}</h1>
              <p className="card-text">{selected.desc}</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 add-package d-flex justify-content-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact1-form validate-form"
          >
            <span className="contact1-form-title">Order</span>
            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              {/* <input className="input1" value={selected.name} {...register("name")} /> */}
              <input
                className="input1"
                type="text"
                defaultValue={selected.name}
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                defaultValue={selected.price}
                placeholder="price"
                {...register("price", { required: true })}
              />
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <input
                className="input1"
                type="text"
                defaultValue={selected.desc}
                placeholder="Name"
                {...register("desc", { required: true })}
              />
            </div>

            <div
              className="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <input
                className="input1"
                type="text"
                defaultValue={selected.img}
                placeholder="Name"
                {...register("img", { required: true })}
              />
            </div>
            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                placeholder="Please Provide your address"
                {...register("address", { required: true })}
              />
            </div>



            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                placeholder="Event Type"
                {...register("event", { required: true })}
              />
            </div>



            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                placeholder="Total Guest"
                {...register("person", { required: true })}
              />
              <div>







                <Button className="date" onClick={handleShow}>
                  Select date {value.toLocaleDateString()}
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <div>
                    <Calendar onChange={onChange} value={value} />
                  </div>
                </Modal>
              </div>
            </div>

            <div className="container-contact1-form-btn">
              <button type="submit" className="contact1-form-btn">
                <span>
                  Order Now
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
