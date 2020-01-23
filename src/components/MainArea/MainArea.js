import React from "react";

import Services from "../../containers/Services/Services";
import classes from "./MainArea.module.css";

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
        {
            imgUrl: 'https://media.gettyimages.com/photos/plumbing-tools-picture-id183857475',
            description: 'We render all kind of services',
            price: '45'
        },
        {
            imgUrl: 'https://media.gettyimages.com/photos/plumbing-tools-picture-id183857475',
            description: 'We render all kind of services',
            price: '45'
        }
    ]
    return (<main className={classes.MainArea}>
        <Services services={services} />
    </main>);
}

export default mainArea;