import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Map from '../../components/Map';
import ToolBar from '../../components/ToolBar';
import { createMarker, getMarkers, saveMarkers, getPosition, deleteMarker } from '../../actions/mapActions';
import { logout } from '../../actions/userActions';
import { openSnackbar } from '../../actions/snackbarActions';
import './index.less';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { markers, center } = this.props.map;
        return (
            <div className="main-page">
                <ToolBar
                    getMarkers={this.props.getMarkers}
                    saveMarkers={this.props.saveMarkers}
                    onLogout={this.props.onLogout}
                    markers={markers}
                />
                <Map
                    createMarker={this.props.createMarker}
                    deleteMarker={this.props.deleteMarker}
                    openSnackbar={this.props.openSnackbar}
                    markers={markers}
                    center={center}
                /> 
            </div>
        );
    }
}

MainPage.propTypes = {
    saveMarkers: PropTypes.func,
    getMarkers: PropTypes.func,
    createMarker: PropTypes.func,
    deleteMarker: PropTypes.func,
    onLogout: PropTypes.func,
    openSnackbar: PropTypes.func,
    map: PropTypes.object
};

const mapStateToProps =  state => ({
    map: state.map
});

const mapDispatchToProps = dispatch => ({
    createMarker: bindActionCreators(createMarker, dispatch),
    deleteMarker: bindActionCreators(deleteMarker, dispatch),
    openSnackbar: bindActionCreators(openSnackbar, dispatch),
    getMarkers: () => dispatch(getMarkers()),
    saveMarkers: (markers) => dispatch(saveMarkers(markers)),
    onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);