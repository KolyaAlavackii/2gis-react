import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainPage from './MainPage';
import About from '../components/About';
import NavBar from '../components/NavBar';
import LoginPage from './LoginPage';
import PrivateRoute from '../components/PrivateRouter';
import { getPosition } from '../actions/mapActions';
import { openSnackbar, closeSnackbar } from '../actions/snackbarActions';

class App extends Component {
    componentWillMount() {
        this.props.getPosition();
    }

    closeSnackbar = () => {
        this.props.closeSnackbar();
    }

    render() {
        const { user, messages } = this.props;
        const { open, message } = messages;
        return (
            <MuiThemeProvider>
                <div>
                    {user && <NavBar />}

                    <Switch>
                        <PrivateRoute exact path='/' component={MainPage}  user={user} />
                        <PrivateRoute path='/about' component={About}  user={user} />
                        <Route path='/login' component={LoginPage} />
                    </Switch>
                    <Snackbar
                        open={open}
                        message={message}
                        autoHideDuration={3000}
                        onRequestClose={this.closeSnackbar}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

MainPage.propTypes = {
    user: PropTypes.object,
    getPosition: PropTypes.object,
    massages: PropTypes.object
};

const mapStateToProps =  state => ({
    user: state.user,
    messages: state.messages 
});

const mapDispatchToProps = dispatch => ({
    getPosition: () => dispatch(getPosition()),
    openSnackbar: bindActionCreators(openSnackbar, dispatch),
    closeSnackbar: bindActionCreators(closeSnackbar, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));