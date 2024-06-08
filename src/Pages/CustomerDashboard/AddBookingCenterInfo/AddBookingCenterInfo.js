import React from 'react';
import './AddPackage.css'
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddBookingCenterInfo = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://the-white-hall-ju-server-main.vercel.app/bookCenter', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added to Database successfully')
                    reset()
                }
            })
    };
    return (
        <div className="add-package">
        <div className="contact1">
            <div className="container-contact1 mx-auto justify-content-center">
               
            <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form mx-auto justify-content-center">

<span className="contact1-form-title">
  Booking Info
</span>





<div class="form-group wrap-input1 validate-input" data-validate="Message is required">
  <label for="numberOfPeople">Number of People</label>
  <select class="form-control input1" id="numberOfPeople" {...register("numberOfPeople")}>
    <option value="20">20 people</option>
    <option value="50">50 people</option>
    <option value="100">100 people</option>
    <option value="200">200 people</option>
    <option value="500">500 people</option>
    <option value="1000">1000 people</option>
  </select>
  <span class="shadow-input1"></span>
</div>


<div className="form-group wrap-input1 validate-input" data-validate="Message is required">
  <label htmlFor="functionType">Select Function Type</label>
  <select className="form-control input1" id="functionType" {...register("functionType")}>
    <option value="govt">Government</option>
    <option value="private">Private</option>
    <option value="wedding">Wedding</option>
    <option value="birthday">Birthday</option>
    <option value="others">Others</option>
  </select>
  <div className="shadow-input1"></div>
</div>



<div className="form-group wrap-input1 validate-input" data-validate="Message is required">
  <label htmlFor="foodPackage">Select Food Package</label>
  <select className="form-control input1" id="foodPackage" {...register("foodPackage")}>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
    <option value="item4">Item 4</option>
  </select>
  <div className="shadow-input1"></div>
</div>


<div className="wrap-input1 validate-input" data-validate="Message is required">
  <textarea className="input1" placeholder="Description" {...register("desc")} />
  <span className="shadow-input1"></span>
</div>


<div className="container-contact1-form-btn">
  <button type='submit' className="contact1-form-btn">
    <span>
      Add <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </span>
  </button>
</div>
</form>

            </div>
        </div>
    </div>
    );
};

export default AddBookingCenterInfo;