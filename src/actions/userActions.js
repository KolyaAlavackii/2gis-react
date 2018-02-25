import axios from 'axios';
import { b64EncodeUnicode } from '../utils';
import config from '../../config';

export const ON_LOGIN = 'ON_LOGIN';

const url = `${config.apiPrefix}/login`;

export const onLogin = (user) => dispatch => {
    const { username, password } = user;
    axios.post(url, {}, {
        headers: {
            authorization: `basic ${b64EncodeUnicode(`${username}:${password}`)}`
        }
    }).then(() => {
        window.localStorage.setItem('user', JSON.stringify(user));
        dispatch({
            type: ON_LOGIN,
            user
        });
    }).catch(error => console.log(error));
};