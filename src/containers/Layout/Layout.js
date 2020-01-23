import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import MainArea from "../../components/MainArea/MainArea";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Toolbar />
                <MainArea />
                <Footer />
            </div>
        )
    }
}

export default Layout;