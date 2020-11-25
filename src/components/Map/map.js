import React, {useState, useRef} from "react";
import MapGL, {GeolocateControl } from 'react-map-gl'
// import config from '../config'
// import 'mapbox-gl/dist/mapbox-gl.css'
import styles from "./map.module.scss";

const TOKEN = "pk.eyJ1IjoiY2FyaW5ha2FuIiwiYSI6ImNraDVucW1hNDBhZGwycW1lNmQyOHJ3bmcifQ.x5gqx6hHlFoXc_S2tgIhTQ";

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

// const [viewport, setViewPort ] = useState({
//     width: "100%",
//     height: 900,
//     // latitude: 0,
//     // longitude: 0,
//     center: [37, 122],
//     zoom: 2
//   })

//   const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

const Map = () => {

  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        // {...viewport}
        center
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        // onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map