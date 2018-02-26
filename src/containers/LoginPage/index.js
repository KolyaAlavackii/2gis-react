import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Paper from "material-ui/Paper";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../../components/LoginForm/';
import { onLogin } from '../../actions/userActions';
import { openSnackbar } from '../../actions/snackbarActions';
import "./index.less";

const style = {
    width: 300,
    padding: 20
};

class LoginPage extends Component {
    render() {
        const { user } = this.props;
        return (!user ?
            <div className="login">
                <Paper zDepth={2} style={style} >
                    <LoginForm
                        onLogin={this.props.onLogin}
                        openSnackbar={this.props.openSnackbar}
                    />
                </Paper>
            </div>
            :
            <Redirect to='/' />
        );
    }
}

LoginPage.propTypes = {
    user: PropTypes.object,
    onLogin: PropTypes.func,
    openSnackbar: PropTypes.func
};

const mapStateToProps =  state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    onLogin: (user) => dispatch(onLogin(user)),
    openSnackbar: bindActionCreators(openSnackbar, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);