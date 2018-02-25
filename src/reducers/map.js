import { GET_MARKERS, CREATE_MARKER, GET_POSITION } from '../actions/mapActions';

const initialState = {
    center: [46.455444199999995, 30.7493457],
    markers: [],

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_POSITION: 
            return {
                ...state,
                center: action.center
            };

        case CREATE_MARKER:
            return {
                ...state,
                markers: [
                    ...state.markers,
                    action.marker
                ]
            };
        case GET_MARKERS: 
            return {
                ...state,
                markers: action.markers
            };

        default: return state;
    }
}

export default reducer;