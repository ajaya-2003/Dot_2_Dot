import { GoogleApiWrapper } from "google-maps-react";
import { Map, InfoWindow, Marker } from "google-maps-react";

import React from "react";

const maps = () => {
  return (
    <div>
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          {/* <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div> */}
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: ""
})(maps);
