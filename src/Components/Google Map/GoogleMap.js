import React, {Component} from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMap.css'

export class GoogleMap extends Component {



    render() {
        const containerStyle = {
            width: '100%',
            height: '496px',
        };
        return (
<div className="map">

    <Map google={this.props.google} zoom={14} containerStyle={containerStyle}
         initialCenter={{
             lat: 49.841952,
             lng: 24.0315921
         }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
                {/*<h1>{this.state.selectedPlace.name}</h1>*/}
            </div>
        </InfoWindow>
    </Map>

</div>




        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAqYGYzUWSg-HwTvZneIZxwnm8r3GFeGMg")
})(GoogleMap)

