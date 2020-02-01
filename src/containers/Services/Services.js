import React from "react";

import Service from "./Service/Service";

const services = (props) => {
    const FIRST_SERVICE_IMAGE = 0;
    let services = props.services.map(service => {
        return <Service
            key={service._id} // for development purpose, will be corrected with real id later
            id={service._id}
            title={service.title}
            imgUrl={service.imageUrls[FIRST_SERVICE_IMAGE]}
            price={service.price}
            description={service.description}
        />
    })
    return services

}

export default services;