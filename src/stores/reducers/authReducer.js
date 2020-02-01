const initialState = {};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.LOGIN: this is the line we will actually use later on
        case action.LOGIN:
            return state;
        default:
            return state;
    }
}