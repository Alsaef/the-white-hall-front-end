import React from 'react';
import { Carousel } from "react-bootstrap";
import {  Nav,  } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import banner2 from '../../../Assets/img/Banner/banner2.jpg';
import banner3 from '../../../Assets/img/Banner/banner3.jpg';
const Banner = () => {
    return (
        <div className="Banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              height="400"
              alt="First slide"
            />
            <Carousel.Caption>
  

  
  
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              height="400"
              alt="Second slide"
            />
  
            <Carousel.Caption>
            <h1 className="text-center"> Birthday Party </h1>

             
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              height="600"
              alt="Third slide"
            />
  
            <Carousel.Caption> 
        
            <h1 className="text-center"> Wedding Party </h1>

             
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;