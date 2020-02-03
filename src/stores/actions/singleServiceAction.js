import axios from 'axios';
import * as actionTypes from './actionTypes';


const singleServiceFetch = (response) => {
    return {
        type: actionTypes.GET_SINGLE_SERVICE,
        title: response.data.title,
        imageUrls: response.data.imageUrls,
        price: response.data.price,
        description: response.data.description
    }
}

const singleServiceFetchFailed = () => {
    return {
        type: actionTypes.GET_SINGLE_SERVICE_FAILED,
        payload: {
            // add relevant payloads later
        }
    }
}



export const getSingleService = (serviceId) => {
    console.log(serviceId);
    return dispatch => {
        // axios.get(`https://services-fix-api.herokuapp.com/services/${serviceId}`)
        axios.get(`http://localhost:5000/services/${serviceId}`)
            .then(response => {
                console.log(response.data);
                dispatch(singleServiceFetch(response));
            })
            .catch(err => {
                console.log("Something went wrong, could not fetch data", err);
                dispatch(singleServiceFetchFailed());
            });
    }
}