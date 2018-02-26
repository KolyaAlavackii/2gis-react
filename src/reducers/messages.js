import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/snackbarActions';

const initialState = {
    open: false,
    message: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                open: true,
                message: action.message
            };

        case CLOSE_SNACKBAR:
            return initialState;

        default: return state;
    }
};

export default reducer;