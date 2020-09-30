import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import LoadingDots from 'react-native-loading-dots';

const WaitingCall = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('../../Assets/images/waitingCall.png')}
      />
      <Text style={styles.title}>콜 잡는중</Text>
      <View style={styles.loadingDots}>
        <LoadingDots />
      </View>
    </View>
  );
};

export default WaitingCall;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    alignItems: 'center',
    width: 245,
    height: 350,
    left: 80,
    top: 100,
  },
  buttonName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000',
  },
  title: {
    position: 'absolute',
    width: 340,
    height: 100,
    left: 140,
    top: 600,
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
});
