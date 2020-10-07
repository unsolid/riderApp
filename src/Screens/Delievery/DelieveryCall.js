import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Tts from 'react-native-tts';

const DelieveryCall = () => {
  useEffect(() => {
    handleTts('대윤파닭');
  }, []);

  const handleTts = (ttsText) => {
    Tts.getInitStatus().then(() => {
      Tts.speak(ttsText);
    });
  };

  return <View style={styles.container}></View>;
};

export default DelieveryCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
