import React from 'react';
import About from '../About/About';
import Packages from '../Packages/Packages';


import Banner from './Banner/Banner';
import CustomerReviews from './CustomerReviews/CustomerReviews';
import Decoration from './Decoration/Decoration';
import FAQ from './FAQ/FAQ';
const Home = () => {
    return (
<div>
<Banner></Banner>
<Packages></Packages>
<Decoration></Decoration>
<FAQ></FAQ>
<CustomerReviews></CustomerReviews>

        </div>
    );
};

export default Home;