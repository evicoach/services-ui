import React, { Component } from "react";

import AddService from '../../containers/Services/Service/AddService/AddService';
import { Switch, Route } from "react-router-dom";
import Services from "../../containers/Services/Services";
import classes from "./MainArea.module.css";
import axios from "axios";
import ServiceDetail from "../../containers/Services/Service/ServiceDetail/ServiceDetail";
// import Backdrop from "../UI/Backdrop/Backdrop";

class MainArea extends Component {

    state = {
        services: []
    }

    componentDidMount() {
        axios.get(
            'https://services-fix-api.herokuapp.com/services'
        )
            .then(response => {
                console.log(response.data);
                this.setState({ services: response.data })
            })
            .catch(err => {
                console.log('Something went wrong, could not get data', err);
            })
    }
    render() {
        return (<main className={classes.MainArea}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => (<Services services={this.state.services} />)} />
                <Route
                    exact
                    path="/add-service"
                    component={AddService} />
                <Route
                    exact
                    path="/service-details"
                    component={ServiceDetail} />
                
            </Switch>
        </main>);
    }
}

export default MainArea;