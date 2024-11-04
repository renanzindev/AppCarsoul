import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import '../styles/carrossel.css'
import car1 from '../assets/images/byd.png';
import car2 from '../assets/images/urus.png';
import car3 from '../assets/images/mercedes.png';

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <ResponsiveCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
      >
         <div>
          <img src={car1} alt="Carro 1" />
          {/* <p className="legend">Lançamento Elétrico</p> */}
        </div>
        <div>
          <img src={car2} alt="Carro 2" />
          {/* <p className="legend">Lançamento Elétrico</p> */}
        </div>
         <div>
           <img src={car3} alt="Carro 3" />
           {/* <p className="legend">Lançamento Elétrico</p> */}
          </div>
      </ResponsiveCarousel>
    </div>
  );
}

export default Carousel;
