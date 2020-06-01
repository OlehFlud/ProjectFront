import React, {Component} from 'react';
import Carousel from "react-bootstrap/esm/Carousel";
import NotFound from '../assets/not-found.png'
import Westindtla from '../assets/westindtla.jpg'
import './CarouselBox/CarouselBox.css'
export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="dBlock "
                            src={Westindtla}
                            alt="asdasd"
                        />
                        <Carousel.Caption>
                            <h3>asdfds</h3>
                            <p>saddasasd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="dBlock"
                            src={NotFound}
                            alt="asdasd"
                        />
                        <Carousel.Caption>
                            <h3>asdfds</h3>
                            <p>saddasasd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img className='dBlock'
                            src={Westindtla}
                            alt="asdasd"
                        />
                        <Carousel.Caption>
                            <h3>asdfds</h3>
                            <p>saddasasd</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

