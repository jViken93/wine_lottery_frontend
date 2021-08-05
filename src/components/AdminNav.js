import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const AdminNav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Admin</Navbar.Brand>
                <Nav>
                    <LinkContainer to="update">
                    <Nav.Link>Oppdater</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="winner">
                    <Nav.Link>Trekk Vinner</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default AdminNav