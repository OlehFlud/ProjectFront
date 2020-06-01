import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import {Footer} from "../../Components/Footer/Footer";
import {connect} from "react-redux";
import {Room} from "../../actions/getRoom";
import Photo from '../../assets/westindtla.jpg'
import './aboutUs.css'
import GoogleMap from "../../Components/Google Map/GoogleMap";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {};


    }



    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }




    render() {
        const pushHomePage = this.props.history;
        return (
            <div>
                <Header pushHomePage={pushHomePage}/>
                <GoogleMap/>
                <div className={"aboutUsFooter"}>
                    <Footer/>
                </div>

                {/*<img*/}
                {/*    className={'Photo_Box'}*/}
                {/*    src={Photo}*/}
                {/*    alt="Photo"*/}
                {/*/>*/}

            </div>
        )
    }
}



export default AboutUs;


