import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Randompicturewithinfo.css'; // Import CSS file for styling

import Slider1 from '../../assets/Images/Slider1.png';
import Slider2 from '../../assets/Images/Slider2.png';
import Slider3 from '../../assets/Images/Slider3.png';
// Import Slider4 if available

export default function Randompicturewithinfo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel interval={600} wrap={true} infiniteLoop={true} indicators={false} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add Slider4 if available */}
        {/* <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Slider4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Vestibulum id ligula porta felis euismod semper.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
