import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import Mysection from '../books/fantasy.json';
import './FantasyBooksSection.css'; 

function FantasyBooksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [booksToShow, setBooksToShow] = useState([]);

  useEffect(() => {
    setBooksToShow(getRandomBooks());
  }, [currentIndex]);

  function getRandomBooks() {
    const startIndex = currentIndex;
    const endIndex = (currentIndex + 3) % Mysection.length;
    return Mysection.slice(startIndex, endIndex);
  }

  const nextBook = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % Mysection.length);
  };

  return (
    <Container>
      <section className='mb-5'>
        <Row>
          {booksToShow.map(book => (
            <Col key={book.asin} xs={6} md={4} className="custom-xs-12">
              <div className="book-item">
                <img src={book.img} alt={book.title} className="img-fluid" style={{ height: '300px', width: 'auto' }} />
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p><Badge bg="dark">${book.price}</Badge></p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Button variant="primary" onClick={nextBook}>Next Book</Button>
      </section>
    </Container>
  );
}

export default FantasyBooksSection;