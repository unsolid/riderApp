import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Accept = () => {
  useEffect(() => {}, []);
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={nextCall}>
        <Text style={styles.buttonName}> 수락</Text>
      </TouchableOpacity>
    </>
  );
};

export default Accept;

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
    width: 320,
    height: 305,
    left: 40,
    top: 200,
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
    left: 70,
    top: 550,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 32,

    color: '#000000',
  },
  titleEmph: {
    position: 'absolute',
    width: 310,
    height: 70,
    left: 60,
    top: 380,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 32,

    color: '#32D8BA',
  },
});
