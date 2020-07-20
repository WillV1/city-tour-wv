import React from 'react';
import './TourList.scss';


class TourList extends React.Component {

    render() {

        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;

        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city image" />
                    <span className="close-btn">
                        <i className="fas.fa-window-close" />
                    </span>
                </div>
            </article>
        )

    }
}

export default TourList;