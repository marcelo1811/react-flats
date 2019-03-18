import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flat.js';
import SimpleMap from './map.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      center: {
        lat: -25.4399,
        lng: -49.2697
      },
      zoom: 11
    };

    this.setMarker(-25.4399, -49.2697);
  }

  setMarker = (lat, lng) => {
    this.setState({
      center: {
        lat: lat,
        lng: lng
      }
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} setMarkerFunction={this.setMarker}/>
        <div className="map-container">
          <SimpleMap center={this.state.center} zoom={this.state.zoom} />
        </div>
      </div>
    );
  };
}

export default App;
