import React from 'react';
import errorPicture from '../../../src/Images/404_picture/ErrorPage.png'

const PageNotFound = () => {
     return (
          <div className="container text-center">
            <img width="70%" src={errorPicture} alt="" />   
          </div>
     );
};

export default PageNotFound;