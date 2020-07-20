import React from 'react';
import './Tours.scss';
import TourList from '../tourlist/TourList';
import {tourData} from '../tourlist/tourData';

class Tours extends React.Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        console.log(id);
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