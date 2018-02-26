import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Map, Marker } from "2gis-maps-react";
import DG from '2gis-maps';

const styleMap = {
    width: "100%",
    height: "100%"
};

export default class MapComponent extends Component {
    constructor(props) {
        super(props);
    }

    createMarker = (e) => {
        const { lat, lng } = e.latlng
        const marker = [lat, lng];
        this.props.createMarker(marker);
    }

    deleteMarker = (e) => {
        const { lat, lng } = e.latlng
        const marker = [lat, lng];
        this.props.deleteMarker(marker);
    }

    currentPosClick = (e) => {
        this.props.openSnackbar('Сan not be removed');
    }

    render() {
        const { markers, center } = this.props;
        return (
            <Map
                style={styleMap}
                center={center}
                zoom={13}
                onClick={this.createMarker}
            >
                <Marker pos={center} onClick={this.currentPosClick} />
                {
                    markers.map((item, index) =>
                        <Marker
                            key={index}
                            pos={item}
                            onClick={this.deleteMarker}
                        />)
                }
            </Map>
        );
    }
}

MapComponent.propTypes = {
    createMarker: PropTypes.func,
    deleteMarker: PropTypes.func,
    openSnackbar: PropTypes.func
};