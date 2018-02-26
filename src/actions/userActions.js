import axios from 'axios';
import { b64EncodeUnicode } from '../utils';
import config from '../../config';
import { openSnackbar } from './snackbarActions';

export const ON_LOGIN = 'ON_LOGIN';
export const ON_LOGOUT = 'ON_LOGOU';

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
    }).catch(error => dispatch(openSnackbar('Invalid login or password')));
};

export const logout = () => dispatch => {
    window.localStorage.removeItem('user');
    dispatch({
        type: ON_LOGOUT
    });
};