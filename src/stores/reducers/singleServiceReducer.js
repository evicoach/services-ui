import * as actionTypes from '../actions/actionTypes';
const initialState = {
    title: '',
    imageUrls: [],
    price: '',
    description: ''
};


const singleServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SINGLE_SERVICE:
            return {
                ...state,
                title: action.title,
                imageUrls: action.imageUrls,
                price: action.price,
                description: action.description
            }
        default:
            return state;
    }
}

export default singleServiceReducer;