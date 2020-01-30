import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
    let cardClasses = [classes.Card];
    if (props.className) {
        cardClasses.push(props.className);
    }
    return (
        <div className={cardClasses.join(" ")}>
            {props.children}
        </div>
    )
}
export default card;