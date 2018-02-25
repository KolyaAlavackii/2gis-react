import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            () => (
                user
                    ?
                    <Component />
                    :
                    <Redirect to='/login' />
            )
        } />
    );
}

export default PrivateRoute;