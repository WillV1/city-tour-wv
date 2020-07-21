import React from 'react';
import './About.scss';
import Card from 'react-bootstrap/Card'

const About = () => {
    return (
            <Card className="about-card">
                <Card.Body className ="about-page">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie, massa euismod congue posuere, 
                augue mi dignissim nisl, at porttitor neque nisl id lectus. Vestibulum ante ipsum primis in faucibus orci luctus 
                et ultrices posuere cubilia curae; In sed dolor eget elit lobortis maximus nec ut risus. Nam vitae leo dignissim, 
                hendrerit nunc non, finibus erat. Curabitur nec ipsum sed sem tempor accumsan venenatis eu ligula. 
                Suspendisse vulputate ipsum quis ipsum cursus gravida. 
            
                Vivamus fringilla lacus tristique, placerat enim at, 
                auctor risus. Maecenas vel risus vitae quam dapibus placerat. Vestibulum scelerisque volutpat nulla, eget 
                sodales arcu viverra quis. Vivamus ac magna sit amet lorem iaculis imperdiet blandit et dui. Curabitur 
                pellentesque nec sapien feugiat feugiat. Proin dictum elementum sagittis. 
                Vivamus lacus urna, accumsan nec justo nec, congue consequat lacus.</p>
                </Card.Body>
            </Card>
    )
}

export default About;