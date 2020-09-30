import React from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

import BeforeHelmet from './BeforeHelmet';

const Helmet = ({navigation}) => {
  const handleHelmet = () => {
    navigation.navigate('delievery');
  };
  return (
    <View>
      <BeforeHelmet />
      <TouchableOpacity style={styles.button} onPress={handleHelmet}>
        <Text style={styles.buttonName}> 콜 받기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Helmet;

const styles = StyleSheet.create({
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
});
