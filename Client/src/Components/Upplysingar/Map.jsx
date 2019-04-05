import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import Breakpoints from '../Elements/breakpoints';
class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      latMark: 63.9295,
      lngMark: -21.01764,
      zoom: 13.5,
      lat: 63.9295,
      lng: -21.029
    };
  }

  render() {
    const positionMark = [this.state.latMark, this.state.lngMark];
    const position = [this.state.lat, this.state.lng];
    return (
      <Try center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionMark}>
          <Popup>
            Gagnheiði 43, <br /> 800 Selfossi
          </Popup>
        </Marker>
      </Try>
    );
  }
}
export default Maps;

const Try = styled(LeafletMap)`
  min-width: 80%;
  min-height: 40vh;
  overflow: hidden;

  @media (max-width: ${Breakpoints.portrait}px) {
    font-size: 12px;
  }
  
`;
