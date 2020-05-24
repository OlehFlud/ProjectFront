import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HomePage from "./Container/HomePage/HomePage";
import Header from "./Components/Header/Header";
import NotFoundPage from "./Container/NotFoundPage/NotFoundPage";
import LoginPage from "./Container/LoginPage/LoginPage";
import RegisterPage from "./Container/RegisterPage/RegisterPage";
import RegisterAdminPage from "./Container/RegisterAdminPage/RegisterAdminPage";
import LoginAdminPage from "./Container/LoginAdminPage/LoginAdminPage";
import UserInfo from "./Container/UserInfo/UserInfo";
import Support from "./Container/Support/Support";
import RoomList from "./Components/RoomList/RoomList";

function App() {

    return (
        <Router>

            <Switch>

                <Route exact path="/" component={HomePage}/>

                <Route  path="/login" component={LoginPage}/>

                <Route  path="/loginAdmin" component={LoginAdminPage}/>

                <Route  path="/register"><RegisterPage/></Route>

                <Route  path="/Users" component={UserInfo}/>

                <Route  path="/Admin" component={HomePage}/>

                <Route  path="/Support" component={Support}/>

                <Route path="/registerAdmin" component={RegisterAdminPage}/>

                <Route path="/roomList" component={RoomList}/>

                <Route path="/AdminRoomList" component={RoomList}/>

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

