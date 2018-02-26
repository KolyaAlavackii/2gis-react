import axios from 'axios';
import { openSnackbar } from './snackbarActions';
import { b64EncodeUnicode } from '../utils';
import config from '../../config';

export const CREATE_MARKER = 'CREATE_MARCER';
export const GET_MARKERS = 'GET_MARKERS';
export const SAVE_MARKERS = 'SAVE_MARKERS';
export const GET_POSITION = 'GET_POSITION';
export const DELETE_MARKER = 'DELETE_MARKER';

const url = `${config.apiPrefix}/markers`;

const getUser = () => {
    return JSON.parse(window.localStorage.getItem('user')) || {};
};

export const createMarker = marker => ({
    type: CREATE_MARKER,
    marker
});

export const deleteMarker = marker => ({
    type: DELETE_MARKER,
    marker
});

export const getPosition = () => dispatch => {
    navigator.geolocation.getCurrentPosition((position) => {
        const center = [position.coords.latitude, position.coords.longitude];
        dispatch({
            type: GET_POSITION,
            center
        });
    });
};

export const getMarkers = () => dispatch => {
    const user = getUser();
    const { username, password } = user;
    axios.get(url, {
        headers: {
            authorization: `basic ${b64EncodeUnicode(`${username}:${password}`)}`
        }
    })
    .then(res => {
        dispatch({
            type: GET_MARKERS,
            markers: res.data.markers
        });
        dispatch(openSnackbar('Markers are successful'));
    })
    .catch(error => dispatch(openSnackbar('Error get markers')));
};

export const saveMarkers = (markers) => dispatch => {
    const user = getUser();
    const { username, password } = user;
    axios.post(url, { markers }, {
        headers: {
            authorization: `basic ${b64EncodeUnicode(`${username}:${password}`)}`
        }
    })
    .then(res => dispatch(openSnackbar('Markers is saved')))
    .catch(error => dispatch(openSnackbar('Error saved')));
};