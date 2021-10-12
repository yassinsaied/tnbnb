import React from 'react'

import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props)=> {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

    return(<>
    
    <Map
        google={props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      />
          
    
    
    
    </>)
}

export default GoogleApiWrapper({
  apiKey: 'nPpszfATm0V0Qd5zFPOxe9_bgKblSqQsxRvfJLtmu8w'
})(GoogleMap);