import React, { useState, useEffect } from 'react';
import { Carousel, Badge } from 'react-bootstrap';
import historyData from '../books/history.json';

function Carosello() {
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    const loadImage = () => {
      const image = new Image();
      image.src = historyData[0].img;
      image.onload = () => {
        setImageHeight(700);
      };
    };

    loadImage();

    return () => {
    // vado a ritornare qualcosa solo se necessario
    };
  }, []);

  const renderSlides = () => {
    return historyData.slice(0, 5).map((book, index) => (
      <Carousel.Item key={index}>
        <div style={{ height: imageHeight, overflow: 'hidden' }}>
          <img
            src={book.img}
            alt={book.title}
            className=" w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p><Badge bg="dark">${book.price}</Badge></p>
          <p><Badge bg="info">{book.category}</Badge></p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  };

  return (
    <div className="container">
      <div className="text-center mb-5">
        <Carousel>
          {renderSlides()}
        </Carousel>
      </div>
    </div>
  );
}

export default Carosello;