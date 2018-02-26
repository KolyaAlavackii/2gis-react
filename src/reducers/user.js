import { ON_LOGIN, ON_LOGOUT } from '../actions/userActions';

const initialState = JSON.parse(window.localStorage.getItem('user'));

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_LOGIN:
            return action.user;

        case ON_LOGOUT: 
            return null

        default: return state;
    }
};

export default reducer;