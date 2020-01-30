import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import MainArea from "../../components/MainArea/MainArea";
import AddService from "../../containers/Services/Service/AddService/AddService";
// import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar />
                <Switch>
                    <Route path="/" exact component={MainArea} />
                    <Route path="/add-service" exact component={AddService} />
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Layout;