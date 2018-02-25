import axios from 'axios';
import { b64EncodeUnicode } from '../utils';
import config from '../../config';

export const CREATE_MARKER = 'CREATE_MARCER';
export const GET_MARKERS = 'GET_MARKERS';
export const SAVE_MARKERS = 'SAVE_MARKERS';
export const GET_POSITION = 'GET_POSITION';

const url = `${config.apiPrefix}/markers`;
const user = JSON.parse(window.localStorage.getItem('user')) || {};

export const createMarker = marker => ({
    type: CREATE_MARKER,
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
    const { username, password } = user;
    axios.get(url, {
        headers: {
            authorization: `basic ${b64EncodeUnicode(`${username}:${password}`)}`
        }
    })
    .then(res => dispatch({
        type: GET_MARKERS,
        markers: res.data.markers
    }))
    .catch(error => console.log(error));
};

export const saveMarkers = (markers) => dispatch => {
    const { username, password } = user;
    axios.post(url, { markers }, {
        headers: {
            authorization: `basic ${b64EncodeUnicode(`${username}:${password}`)}`
        }
    })
    .then(res => console.log(res))
    .catch(error => console.log(error));
};