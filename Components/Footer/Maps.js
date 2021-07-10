import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
// import maps from '../../Assets/Photos/GoogleMaps.png';

export default function Maps({
  markers = [
    {lat: -6.2644619, lng: 107.2672509},
    {lat: -6.3645619, lng: 107.2672409},
    {lat: -6.1646619, lng: 107.2672309},
  ],
}) {
  const MapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={10} defaultCenter={markers[0]}>
        {props.isMarkerShown &&
          markers.map((val, idx) => <Marker key={idx} position={val} />)}
      </GoogleMap>
    )),
  );

  return (
    <MapComponent
      //
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_APP_API_KEY_GMAPS}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={
        <div
          style={{
            marginTop: '4em',
            width: `100%`,
            height: `calc(100vw/2.66667)`,
          }}
        />
      }
      containerElement={
        <div
          style={{
            marginTop: '4em',
            width: `100%`,
            height: `calc(100vw/2.66667)`,
          }}
        />
      }
      mapElement={<div style={{height: `100%`}} />}
    />
    // <section id="locationsArrayan" className="maps p-0 mt-4">
    // </section>
  );
}
