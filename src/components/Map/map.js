import React, {useState, useRef, useEffect} from "react";
// import MapGL, {GeolocateControl } from 'react-map-gl'
import mapboxgl from 'mapbox-gl';
// import config from '../config'
// import 'mapbox-gl/dist/mapbox-gl.css'
import styles from "./map.module.scss";

mapboxgl.accessToken = "pk.eyJ1IjoiY2FyaW5ha2FuIiwiYSI6ImNraDVucW1hNDBhZGwycW1lNmQyOHJ3bmcifQ.x5gqx6hHlFoXc_S2tgIhTQ";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: props.lng,
      lat: props.lat,
      zoom: 10
    };
  }
 
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
  });
  
  map.on('move', () => {
    this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
    });
  }
  
  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default Map;