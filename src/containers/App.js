import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';

import MainPage from './MainPage';
import About from '../components/About';
import NavBar from '../components/NavBar';
import LoginPage from './LoginPage';
import PrivateRoute from '../components/PrivateRouter';
import { getPosition } from '../actions/mapActions';

class App extends Component {
    componentWillMount() {
        this.props.getPosition();
    }

    render() {
        const { user } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    {user && <NavBar />}

                    <Switch>
                        <PrivateRoute exact path='/' component={MainPage}  user={user} />
                        <PrivateRoute path='/about' component={About}  user={user} />
                        <Route path='/login' component={LoginPage} />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

MainPage.propTypes = {
    user: PropTypes.object,
    getPosition: PropTypes.object
};

const mapStateToProps =  state => ({
    user: state.user 
});

const mapDispatchToProps = dispatch => ({
    getPosition: () => dispatch(getPosition())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));