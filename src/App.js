import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HomePage from "./Container/HomePage/HomePage";
import Header from "./Components/Header/Header";
import GoogleMap from "./Components/Google Map/GoogleMap";
import NotFoundPage from "./Container/NotFoundPage/NotFoundPage";
import LoginPage from "./Container/LoginPage/LoginPage";
import RegisterPage from "./Container/RegisterPage/RegisterPage";

import UserInfo from "./Container/UserInfo/UserInfo";
import Support from "./Container/Support/Support";
import RoomList from "./Components/RoomList/RoomList";
import AboutUs from "./Container/AboutUsPage/aboutUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';

function App() {

    return (
        <Router>

            <Switch>

                <Route exact path="/" component={HomePage}/>

                <Route  path="/login" component={LoginPage}/>

                <Route  path="/register"><RegisterPage/></Route>

                <Route  path="/Users" component={UserInfo}/>

                <Route  path="/Support" component={Support}/>

                <Route path="/roomList" component={RoomList}/>

                <Route path="/AdminRoomList" component={RoomList}/>

                <Route path="/AboutUs" component={AboutUs}/>

                <Route path="/GoogleMap" component={GoogleMap}/>

                <Route
                    path="/not-found"
                    render={routeProps => (
                        <NotFoundPage {...routeProps}/>
                    )}
                />
                <Redirect
                    from="*"
                    to={{
                        pathname: '/not-found'
                    }}
                />
            </Switch>
        </Router>
    )
}

export default App;

