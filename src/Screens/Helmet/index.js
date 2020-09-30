import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';

import BeforeHelmet from './BeforeHelmet';
import BluetoothHelmet from './BluetoothHelmet';
import LoadingDots from 'react-native-loading-dots';

const Helmet = ({navigation}) => {
  const [clicked, setClicked] = useState(true);
  const [time, setTime] = useState(false);
  const [helmetStatus, setHelmetStatus] = useState(false);

  const createTwoButtonAlert = () =>
    Alert.alert(
      '헬멧을 착용해주세요',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  const handleHelmet = () => {
    // navigation.navigate('delievery');
    setClicked(false);
    setTimeout(() => {
      // setTime(true);
      Alert.alert('헬멧을 착용해주세요');
    }, 5000);
  };

  if (!time) {
    return (
      <View>
        {clicked ? (
          <>
            <BeforeHelmet />
            <TouchableOpacity style={styles.button} onPress={handleHelmet}>
              <Text style={styles.buttonName}> 콜 받기</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View>
            <Text style={styles.title}>확인 중</Text>
            <View style={styles.loadingDots}>
              <LoadingDots />
            </View>
          </View>
        )}
      </View>
    );
  }
  return <BluetoothHelmet />;
};

export default Helmet;

const styles = StyleSheet.create({
  loadingDots: {
    position: 'absolute',
    justifyContent: 'center',
    position: 'absolute',
    width: 100,
    height: 60,
    left: 150,
    top: 640,
  },
  image: {
    position: 'absolute',
    alignItems: 'center',
    width: 320,
    height: 305,
    left: 40,
    top: 200,
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
});
