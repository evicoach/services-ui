import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import MainArea from "../../components/MainArea/MainArea";
import AddService from "../../containers/Services/Service/AddService/AddService";
import ServiceDetail from "../Services/Service/ServiceDetail/ServiceDetail";
// import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";
import axios from "axios";

class Layout extends Component {
    state = {
        service: {
            id: ''
        }
    }

    componentDidMount() {
        axios.get(`https://services-fix-api.herokuapp.com/services/${serviceId}`)
            .then(response => {
                console.log(response.data);
            })
    }


    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar />
                <Switch>
                    <Route path="/" exact component={MainArea} />
                    <Route path="/add-service" exact component={AddService} />
                    <Route path="/service-detail" exact render={() => {
                        <ServiceDetail />
                    }} />
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}

/* const mapStateToProps = state => {
    return {
        serviceImages: state.services.serviceImages
    }
}

export default connect(mapStateToProps)(Layout) */