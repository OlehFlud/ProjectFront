import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import {Footer} from "../../Components/Footer/Footer";
import {connect} from "react-redux";
import {Room} from "../../actions/getRoom";
import Photo from '../../assets/westindtla.jpg'
import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowCreateRoom: true,
            price: '',
            square: '',
            amount: '',
            nameRoom: '',
            about: '',
            park: '',
            fileName: null,
            errors: {},
            search: ''
        };


    }



    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }




    render() {
        const pushHomePage = this.props.history;
        return (
            <div>
                <Header pushHomePage={pushHomePage}/>

                <img
                    className={'Photo_Box'}
                    src={Photo}
                    alt="Photo"
                />
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store.search);
    return {
        rooms: store.HotelReducer.rooms
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchData: url => dispatch(Room(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


