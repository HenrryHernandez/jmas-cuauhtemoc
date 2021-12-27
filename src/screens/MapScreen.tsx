import React from 'react';
import {View} from 'react-native';

import {LatLng, LeafletView} from 'react-native-leaflet-view';

import {Header} from '../components';

const MapScreen = () => {
  //starting points we appear on the map
  const DEFAULT_COORDINATE: LatLng = {
    lat: 28.4065055,
    lng: -106.8658996,
  };

  const locations = [
    {
      position: DEFAULT_COORDINATE,
      icon: {
        iconUrl: '../assets/pin.png',
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: [25, 55],
      },
      size: [32, 32],
    },
    {
      position: {
        lat: 28.4135537,
        lng: -106.8575945,
      },
      icon: '📍',
      size: [32, 32],
    },
    {
      position: {
        lat: 28.3936994,
        lng: -106.8784803,
      },
      icon: '📍',
      size: [32, 32],
    },
    {
      position: {
        lat: 28.4023168,
        lng: -106.8383965,
      },
      icon: '📍',
      size: [32, 32],
    },
  ];

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Header />
      <LeafletView
        mapMarkers={locations}
        mapCenterPosition={DEFAULT_COORDINATE}
        doDebug={false}
      />
    </View>
  );
};

export default MapScreen;
