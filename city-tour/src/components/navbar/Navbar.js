import React from 'react';
import logo from '../../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Home from '../home/Home';
import About from '../about/About';
import Tours from '../tours/Tours';

function Navigation() {
    return (
        <Router>
            <Container fluid={true}>
                <Navbar bg="dark" variant="dark" className="navbar">
                    <Navbar.Brand href="#home"><img src={logo} alt="city tours company"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
                        <Nav.Link className="nav-link" href="/tours">Tours</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/about" exact render={() => <About />} />
                    <Route path="/tours" exact render={() => <Tours />} />
                </Switch>
            </Container>
        </Router>
    )
}

export default Navigation;