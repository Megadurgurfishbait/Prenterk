import React from 'react';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Maps extends React.Component {
      constructor() {
        super()
        this.state = {
          lat: 63.9295,
          lng: -21.01765,
          zoom: 13.5
        }
      }
    

      render() {
        const position = [this.state.lat, this.state.lng];
        return (
          <LeafletMap center={position} zoom={this.state.zoom} style={{zIndex:1, height: "400px", width:"100%"}}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                Gagnheiði 43, <br/> 800 Selfossi
              </Popup>
            </Marker>
          </LeafletMap>
        );
      }
    }
