import React from "react";

import Service from "./Service/Service";

const services = (props) => {
    let services = props.services.map(service => {
        return <Service
            key={Math.random()}
            imgUrl={service.imgUrl}
            price={service.price}
            description={service.description}
        />
    })
    return services

}

export default services;