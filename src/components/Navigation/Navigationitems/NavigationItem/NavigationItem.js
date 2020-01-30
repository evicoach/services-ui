import React from 'react';
import { NavLink } from "react-router-dom";

import classes from './NavigationItem.module.css';

const navigationItem = props => {
    return (
        <NavLink
            exact
            className={classes.NavigationItem}
            to={props.routeTo}
        >
            {props.children}
        </NavLink>
    );
};


export default navigationItem;