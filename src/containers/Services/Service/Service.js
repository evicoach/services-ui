import React, { Component } from "react";

import Card from "../../../components/Card/Card";
import classes from "./Service.module.css";

class Service extends Component {
    componentDidMount() {

    }

    render() {

        return (
            <Card>
                <img
                    className={classes.ServiceImage}
                    src={this.props.imgUrl} width="200" height="200"
                    alt="" />
                <div className={classes.ServicePrice}>
                    {this.props.price}</div>
                <div className={classes.ServiceDescription}>
                    {this.props.description}</div>
            </Card>
        );
    }
}
export default Service;