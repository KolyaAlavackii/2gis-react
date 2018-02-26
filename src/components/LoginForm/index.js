import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';

const style = {
    input: {
        width: "100%"
    },
    button: {
        width: "100%",
        marginTop: 20
    }
};

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { password, username } = this.state;
        if (password && username) {
            this.props.onLogin(this.state);
        } else {
            this.props.openSnackbar('Fill all fields');
        }
    }

    render() {
        const { username, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    value={username}
                    name="username"
                    style={style.input}
                    floatingLabelText="Username"
                    onChange={this.handleChange}
                />
                <TextField
                    value={password}
                    name="password"
                    type="password"
                    style={style.input}
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                />
                <RaisedButton
                    label="Login"
                    type="submit"
                    primary={true}
                    style={style.button}
                />
            </form>
        );
    }
}

LoginForm.propTypes = {
    onLogin: PropTypes.func,
    openSnackbar: PropTypes.func
};