import React, { useEffect, useState } from 'react';
import '../AddPackage/AddPackage.css'
import axios from 'axios';
import foodPackage from '../../../Assets/img/FoodPackage.png';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const UpdatePackage = () => {
    
    
    const { register, handleSubmit, reset } = useForm();
    const [selected, setSelected] = useState({});
    const {id: _id}=useParams({})

    useEffect(() => {
        fetch(`https://the-white-hall-ju-server-main.vercel.app/packages/${_id}`)
          .then((res) => res.json())
          .then((data) => {
            setSelected(data);
            reset(data);
          });
      }, [_id, reset]);
    
    const onSubmit = data => {
        const updateData={
            desc:data.desc,
            name:data.name,
            img:data.image,
            price:data.price,
            item1:data.item1,
            item2:data.item2,
            item3:data.item3,
        }
        axios.patch(`https://the-white-hall-ju-server-main.vercel.app/packages/${_id}`, updateData)
            .then(res => {
                if (res.data.matchedCount >1) {
                    alert('Added to Database successfully')
                    reset()
                }
            })

    };
    return (
        <div className="add-package">
        <div className="contact1">
            <div className="container-contact1">
                <div  data-tilt="">
                    <img src={foodPackage} alt="IMG" height="400" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

                    <span className="contact1-form-title">
Add Food Package                    </span>

                    <div className="wrap-input1 validate-input" data-validate="Name is required">
                        <input className="input1" placeholder="Name" {...register("name", { required: true, })} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Image URL"  {...register("img",)} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="Subject is required">
                        <input className="input1" placeholder="Price" type="number" {...register("price")} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Item-1"  {...register("item1",)} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Item-2"  {...register("item2",)} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="wrap-input1 validate-input" data-validate="url">
                        <input type="text" />
                        <input className="input1" placeholder="Item-3"  {...register("item3",)} />
                        <span className="shadow-input1"></span>
                    </div>



                    <div className="wrap-input1 validate-input" data-validate="Message is required">
                        <textarea className="input1" placeholder="Description"{...register("desc",)} />
                        <span className="shadow-input1"></span>
                    </div>

                    <div className="container-contact1-form-btn">
                        <button type='submit' className="contact1-form-btn">
                            <span>
Update                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
};

export default UpdatePackage;