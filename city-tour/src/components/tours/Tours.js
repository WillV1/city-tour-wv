import React from 'react';
import './Tours.scss';
import TourList from '../tourlist/TourList';
import {tourData} from '../tourlist/tourData';

class Tours extends React.Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const{tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        });
    }
    
    render() {

        const {tours } = this.state;

    return (
        <div>
            <section className='tourlist'>
                {
                 tours.map(tour => (
                 <TourList key={tour.id} tour={tour} removeTour={this.removeTour}></TourList>) )   
                }
            </section>
            </div>
    )
    }    
}

export default Tours;