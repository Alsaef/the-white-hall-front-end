import React from 'react';
import { useForm } from "react-hook-form";

const AddStaff = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("https://the-white-hall-ju-server-main.vercel.app/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('Added admin successfully!!!!')

    };
    return (
        <div className="add-package">
            <div className="contact1">
                <div className="container-contact1 d-flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form ">
                        <span className="contact1-form-title">
Add Staff                        </span>
                        <div className="wrap-input1 validate-input" data-validate="Name is required">
    <input className="input1 w-100" placeholder="Name" {...register("name")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Admin email is required">
    <input className="input1 w-100" placeholder="Email" {...register("email")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Phone number is required">
    <input type="tel" className="input1 w-100" placeholder="Phone number" {...register("phoneNumber")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="NID is required">
    <input className="input1 w-100" placeholder="NID" {...register("nid")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Address is required">
    <input className="input1 w-100" placeholder="Address" {...register("address")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Position is required">
    <input className="input1 w-100" placeholder="Position" {...register("position")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Salary is required">
    <input type="number" className="input1 w-100" placeholder="Salary" {...register("salary")} />
  </div>

  <div className="wrap-input1 validate-input" data-validate="Joining date is required">
    <input type="date" className="input1 w-100" {...register("joiningDate")} />
  </div>


                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Add
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

export default AddStaff;