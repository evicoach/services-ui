import React from "react";
import { Link } from "react-router-dom";

import Service from "./Service/Service";

const services = (props) => {
    const FIRST_SERVICE_IMAGE = 0;
    let services = props.services.map(service => {
        // Every service in the grid is a link to it's details
        return (
            <Link
                to={{
                    pathname: "/service-details",
                    state: {
                        serviceId: service._id
                    }
                }}

                key={service._id}
            >
                <Service
                    id={service._id}
                    title={service.title}
                    imgUrl={service.imageUrls[FIRST_SERVICE_IMAGE]}
                    price={service.price}
                    description={service.description}
                />
            </Link>
        )
    })
    return services

}

export default services;