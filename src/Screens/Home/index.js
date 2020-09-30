import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>안녕하세요,</Text>
      <Text style={styles.nameFirst}>
        <Text style={styles.nameFirst}>오늘의</Text>
        <Text style={styles.nameSecond}> 배달</Text>
        <Text style={styles.nameFirst}>을</Text>
      </Text>
      <Text style={styles.nameThird}> 시작해봐요</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('helmet')}>
        <Text style={styles.buttonName}>시작</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    width: 400,
    height: 100,
    left: 30,
    top: 147,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 70,
    lineHeight: 76,

    color: '#000000',
  },
  nameFirst: {
    position: 'absolute',
    width: 310,
    height: 70,
    left: 60,
    top: 380,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#000000',
  },
  nameSecond: {
    position: 'absolute',
    width: 310,
    height: 70,
    left: 60,
    top: 380,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#32D8BA',
  },
  nameThird: {
    position: 'absolute',
    width: 338,
    height: 100,
    left: 110,
    top: 456,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#000000',
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
  buttonName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000',
  },
});
