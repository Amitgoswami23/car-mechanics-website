import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { users, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Car-Macenics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#expart">Our Expart</Nav.Link>
                        { 
                        users?.email ?

                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{users?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
