import { GET_MARKERS, CREATE_MARKER, GET_POSITION, DELETE_MARKER } from '../actions/mapActions';

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

        case DELETE_MARKER:
            const { marker } = action;
            const index = state.markers.findIndex(item => item[0] === marker[0] && item[1] === marker[1]);
            return {
                ...state,
                markers: [
                    ...state.markers.slice(0, index),
                    ...state.markers.slice(index + 1)
                ]
            };
            return state;

        default: return state;
    }
}

export default reducer;