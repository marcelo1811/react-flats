import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return(
    <div className="flat-list">
      {props.flats.map((flat) => {
        return <Flat flat={flat} setMarkerFunction={props.setMarkerFunction} />
      })}
    </div>
  );
}

export default FlatList;
