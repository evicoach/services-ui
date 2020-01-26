import React from "react";

import AddService from '../../containers/Services/Service/AddService/AddService';
import { Switch, Route } from "react-router-dom";
import Services from "../../containers/Services/Services";
import classes from "./MainArea.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";

const mainArea = (props) => {
    let services = [
        {
            imgUrl: 'https://media.gettyimages.com/photos/plumbing-tools-picture-id183857475',
            description: 'We render all kind of services',
            price: '45'
        },
        {
            imgUrl: 'https://media.gettyimages.com/photos/plumbing-tools-picture-id183857475',
            description: 'We render all kind of services',
            price: '45'
        },


    ]
    return (<main className={classes.MainArea}>
        <Switch>
            <Route
                exact
                path="/"
                render={() => (<Services services={services} />)} />
            <Route
                exact
                path="/add-service"
                component={AddService} />
        </Switch>
    </main>);
}

export default mainArea;