import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "./Libri.jpg";

function MyNav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
  
        return () => {
          
        };
    }, []);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand href="#" className="d-flex  mx-5 text-light">
                        <img src={Logo} alt="Logo" height={50} width={60} className="mx-3" />
                        Books store
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
                        <Nav className="ms-auto mx-5">
                            <Nav.Link href="#" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#" className="text-light">About</Nav.Link>
                            <Nav.Link href="#" className="text-light">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default MyNav;