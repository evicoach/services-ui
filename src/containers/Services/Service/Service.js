import React, { Component } from "react";

import Card from "../../../components/UI/Card/Card";
import classes from "./Service.module.css";

class Service extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        this.setState({ id: this.props.id }) // save the id in the state and use it later to make ajax request
    }

    render() {

        return (
            <Card>
                <h2>{this.props.title}</h2>
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