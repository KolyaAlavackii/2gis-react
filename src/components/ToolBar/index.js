import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './index.less';

const buttonStyle = {
    marginTop: 20,
    width: "100%"
};

export default class ToolBar extends Component {
    getMarkers = () => {
        this.props.getMarkers();
    }

    saveMarkers = () => {
        const { markers } = this.props;
        this.props.saveMarkers(markers);
    }

    render() {
        return (
            <aside className="tool-bar">
                <RaisedButton
                    label="Save"
                    primary={true}
                    style={buttonStyle}
                    onClick={this.saveMarkers}
                />
                <RaisedButton
                    label="Show"
                    primary={true}
                    style={buttonStyle}
                    onClick={this.getMarkers}
                />
            </aside>
        );
    }
}

ToolBar.propTypes = {
    saveMarkers: PropTypes.func,
    getMarkers: PropTypes.func
};