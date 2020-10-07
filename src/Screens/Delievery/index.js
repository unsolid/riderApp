import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

import LoadingDots from 'react-native-loading-dots';
import Tts from 'react-native-tts';

const Delievery = () => {
  const [call, setCall] = useState(true);
  const [delievery, setDelivery] = useState(true);
  const [accepted, setAccepted] = useState(true);
  const [nextCall, setNextCall] = useState(true);
  const [latitudeValue, setLatitudeValue] = useState(37.506967);
  const [logitudeValue, setLogitudeValue] = useState(126.958398);

  const handleCall = () => {
    setCall(false);
    setTimeout(() => {
      setDelivery(false);
      handleTts('롯데리아 중앙대점 , 배달까지 10분');
      showMessage({
        message: '롯데리아 중앙대점',
        description: '배달: 흑석동 중앙대학교 310관',
        type: 'success',
        duration: 3000,
      });
    }, 3000);
  };
  const handleNextCall = () => {
    setDelivery(true);
    setTimeout(() => {
      setDelivery(false);
      setAccepted(false);
      handleTts('교촌치킨 상도터널점, 배달까지 30분');
      showMessage({
        message: '교촌치킨 상도터널점',
        description: '배달: 흑석동 중앙대학교 207관',
        type: 'success',
        duration: 3000,
      });
    }, 3000);
  };
  const handleTts = (ttsText) => {
    Tts.getInitStatus().then(() => {
      Tts.speak(ttsText);
    });
  };

  const handleAccept = () => {
    setNextCall(false);
    setLatitudeValue(37.504465);
    setLogitudeValue(126.950579);
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitudeValue,
            longitude: logitudeValue,
            latitudeDelta: 0.005,
            longitudeDelta: 0.0005,
          }}>
          <Marker
            coordinate={{
              latitude: latitudeValue,
              longitude: logitudeValue,
              latitudeDelta: 0.005,
              longitudeDelta: 0.0005,
            }}></Marker>
        </MapView>
        {call ? (
          <TouchableOpacity style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonName}> 콜 받기</Text>
          </TouchableOpacity>
        ) : delievery ? (
          <>
            <View style={styles.loadingDots}>
              <LoadingDots />
            </View>
          </>
        ) : accepted ? (
          <>
            <TouchableOpacity style={styles.buttonLeft} onPress={() => {}}>
              <Text style={styles.buttonName}> 수락</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRight}
              onPress={handleNextCall}>
              <Text style={styles.buttonName}> 거절</Text>
            </TouchableOpacity>
          </>
        ) : nextCall ? (
          <>
            <TouchableOpacity style={styles.buttonLeft} onPress={handleAccept}>
              <Text style={styles.buttonName}> 수락</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRight} onPress={() => {}}>
              <Text style={styles.buttonName}> 거절</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View />
        )}
        <FlashMessage position="top" />
      </SafeAreaView>
    </>
  );
};

export default Delievery;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    alignItems: 'center',
    width: 100,
    height: 100,
    left: 40,
    top: 200,
  },
  title: {
    position: 'absolute',
    width: 340,
    height: 100,
    left: 150,
    top: 570,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 32,

    color: '#000000',
  },
  loadingDots: {
    position: 'absolute',
    justifyContent: 'center',
    position: 'absolute',
    width: 100,
    height: 60,
    left: 150,
    top: 640,
  },
  SafeAreaView: {
    flex: 1,
  },
  map: {
    height: '100%',
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 193,
    height: 60,
    left: 100,
    top: 625,
    borderRadius: 90,
    backgroundColor: '#32D8BA',
  },
  buttonRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 150,
    height: 60,
    left: 180,
    top: 625,
    borderRadius: 90,
    backgroundColor: '#32D8BA',
  },
  buttonLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 150,
    height: 60,
    left: 70,
    top: 625,
    borderRadius: 90,
    backgroundColor: '#32D8BA',
  },
  buttonName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000',
  },
});
