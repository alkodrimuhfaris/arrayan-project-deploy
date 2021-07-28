import React from 'react';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from 'react-google-maps';
import {StaticGoogleMap, Marker, Path} from 'react-static-google-map';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function Maps({
  markers = [
    {lat: -6.2644619, lng: 107.2672509},
    {lat: -6.3645619, lng: 107.2672409},
    {lat: -6.1646619, lng: 107.2672309},
  ],
}) {
  const [ref1, wRef1, hRef1] = getComponentWidth();
  // const MapComponent = withScriptjs(
  //   withGoogleMap((props) => (
  //     <GoogleMap defaultZoom={10} defaultCenter={markers[0]}>
  //       {props.isMarkerShown &&
  //         markers.map((val, idx) => <Marker key={idx} position={val} />)}
  //     </GoogleMap>
  //   )),
  // );

  return (
    <section ref={ref1} className="maps mt-5">
      {/* <MapComponent
        //
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_APP_API_KEY_GMAPS}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={
          <div
            style={{
              width: `100%`,
              height: `calc(100vw/2.66667)`,
            }}
          />
        }
        containerElement={
          <div
            style={{
              width: `100%`,
              height: `calc(100vw/2.66667)`,
            }}
          />
        }
        mapElement={<div style={{height: `100%`}} />}
      /> */}
      <StaticGoogleMap
        zoom={10}
        size={`${wRef1}x${hRef1}`}
        scale={4}
        apiKey={process.env.NEXT_PUBLIC_APP_API_KEY_GMAPS}
      >
        <Marker.Group label="Arrayan Residence" color="red">
          {markers.map((val, index) => (
            <Marker key={index} location={val} />
          ))}
        </Marker.Group>
      </StaticGoogleMap>
    </section>
    // <section id="locationsArrayan" className="maps p-0 mt-4">
    // </section>
  );
}
