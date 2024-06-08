import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
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
                            Make Admin
                        </span>
                        <div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 w-100" placeholder="Admin email" {...register("email")} />
                        </div>


                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Make admin
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

export default AddAdmin;