import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Navigator = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Vin-lotteri</Navbar.Brand>
                <Nav>
                    <LinkContainer to="/">
                    <Nav.Link>Registrer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="participants">
                    <Nav.Link>Deltagere</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/winner">
                    <Nav.Link>Vinner</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigator