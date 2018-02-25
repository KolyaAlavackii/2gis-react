import { ON_LOGIN } from '../actions/userActions';

const initialState = JSON.parse(window.localStorage.getItem('user'));

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_LOGIN:
            return action.user;

        default: return state;
    }
};

export default reducer;