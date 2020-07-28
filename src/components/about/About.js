import React from 'react';
import './About.scss';
import Card from 'react-bootstrap/Card'

const About = () => {
    return (
            <Card className="about-card">
                <Card.Body className ="about-page">
                <h1>About this App</h1>
                <h4>App to provide user information about potential walking tours</h4>
                <h6>Version: 1.0.0</h6>
                </Card.Body>
            </Card>
    )
}

export default About;