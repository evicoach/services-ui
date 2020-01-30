import React, { Fragment } from 'react';

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
    return (
        <Fragment>
            <NavigationItem routeTo="/login">Login</NavigationItem>
            <NavigationItem routeTo="/signup">Sign up</NavigationItem>
            <NavigationItem routeTo="/add-service">Register a Service</NavigationItem>
        </Fragment>
    );
}


export default navigationItems;