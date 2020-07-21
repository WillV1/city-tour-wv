import React from 'react';
import './Home.scss';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import woman from '../img/woman.jpg';

const Home = () => {
    return (
        <Container fluid={true}>
            <div className="card-deck">
                <Card className="home-card">
                    <Card.Img className="home-image" variant="top" src={woman} alt="woman with map" />
                </Card>
                <Card className="home-card text">
                    <Card.Body className="home-text">
                        <h5>Welcome to City Tours, your one-stop location to learn about a variety of fun tours in fun locations.
                        Check out our pages to learn more about us and the tours we have to offer!
                        </h5>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Home;