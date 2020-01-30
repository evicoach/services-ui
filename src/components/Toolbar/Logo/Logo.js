import React from "react";
import { Link } from 'react-router-dom';
import classes from "./Logo.module.css";

const logo = (props) => {
    return (
        <Link to="/" className={classes.Logo}>
            <h2>Fix /</h2>
        </Link>
    );
}

export default logo;