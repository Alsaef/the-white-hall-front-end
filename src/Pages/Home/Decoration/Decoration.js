import React from 'react';
import room1 from '../../../Images/centerPhoto/pic1.jpg';
import room2 from '../../../Images/centerPhoto/pic2.jpg';
import room3 from '../../../Images/centerPhoto/pic3.jpg';
import room4 from '../../../Images/centerPhoto/pic4.jpg';
import room5 from '../../../Images/centerPhoto/pic5.jpg';

const Decoration = () => {
    return (
        <div className="container my-5">
            <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
      Our Decoration   </h2>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={room1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <img width="100%" src={room2} alt="" />
                </div>
            </div>
            <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-12">
                <p>The wedding is a very important occasion for every person. We all want everything to be absolutely perfect. The demand for unique and different ideas for weddings have also increased. Of course, everybody wants their wedding to be the best of the year. Don’t worry, we have creative minds to help you in managing wedding celebrations in the best possible manner. One of such tasks is the wedding stage decoration. This is the part where you need expert advice. You cannot learn wedding decoration in just few weeks especially when you have many other important things to care about.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                <div className="col-lg-6 col-md-6 col-12">
                <img className="" width="100%" src={room3} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-3">
                <img width="100%" src={room4} alt="" /> 
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                <img  width="100%" src={room5} alt="" />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Decoration;