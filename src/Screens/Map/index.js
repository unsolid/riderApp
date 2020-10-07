import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

const Map = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const response = request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (response === 'granted') {
      locateCurrentLocation();
    }
  };

  const locateCurrentLocation = () => {
    Geolocation.getCurrentPosition((position) => {
      console.log(JSON.stringify(position));
    });
  };
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 37.506967,
        longitude: 126.958398,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}></MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
