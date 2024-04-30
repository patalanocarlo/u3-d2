import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="footer  py-3 bg-dark text-light">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <span>© {new Date().getFullYear()} Books Store. All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;