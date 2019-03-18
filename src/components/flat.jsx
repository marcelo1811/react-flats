import React, { Component } from 'react';


class Flat extends Component {
  handleClick = ({ target: { dataset: { lat, lng } } }) => {
    this.props.setMarkerFunction(lat, lng)
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick} data-lat={this.props.flat.lat} data-lng={this.props.flat.lng} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`}}>
        <div className="card-category">
          {`${this.props.flat.price} ${this.props.flat.priceCurrency}`}
        </div>
        <div className="card-description">
          {this.props.flat.name}
        </div>
      </div>
    );
  }
}

export default Flat;

