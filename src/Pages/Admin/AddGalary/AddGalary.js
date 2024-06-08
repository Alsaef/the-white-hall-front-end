import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddGalary = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://the-white-hall-ju-server-main.vercel.app/galary', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added to Image successfully')
                    reset()
                }
            })
    };
    return (
        <div className="add-package">
        <div className="contact1">
            <div className="container-contact1">
               
                <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form mx-auto justify-content-center">

                    <span className="contact1-form-title">
Add Galary                    </span>


                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Image URL"  {...register("img",)} />
                        <span className="shadow-input1"></span>
                    </div>


                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Image Name"  {...register("imgName",)} />
                        <span className="shadow-input1"></span>
                    </div>

                 
                    

                    <div className="container-contact1-form-btn">
                        <button type='submit' className="contact1-form-btn">
                            <span>
Add Image                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default AddGalary;