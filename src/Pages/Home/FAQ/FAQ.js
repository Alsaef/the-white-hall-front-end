import React from 'react';
import faq from '../../../Assets/img/FAQ.jpg';
const FAQ = () => {
    return (
        <div>
        

      <div className="container">
      <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
      Frequently Asked Questions    </h2>

        <div className="container d-lg-flex">
          <div className="mb-3 col-md-6">
            <img src={faq} width="100%" height="90%" alt="" />
          </div>

          <div className="my-auto col-md-6 ms-4 ">
          <div className="accordion" id="accordionExample">
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                Order Cancellation Fees

                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p> If you decide to cancel the program then 100% of the advanced payment

If 7 days before the program then 50% of the total payment

If 3 days before the program then 100% of the total payment

Please note different community center may have different booking/order cancellation fees you should be aware of that. Contact with them. Thank You. </p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Payment

                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>If you take any service from us like food, decor or even book any community center via us then you will be asked to pay 50% (But few place may ask for full payment) for the booking or order any service money from the full payment (Full payment shall be paid before 3 days of your respective program </p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Property Rights
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                  You are granted limited license only for purposes of viewing & editing the material contained on this Website if you are the owner of this property (fees may apply).

</p>
                </div>
              </div>
            </div>
            <div className="mb-3 accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             Media
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.

</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FAQ;