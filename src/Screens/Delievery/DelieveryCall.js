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

  return (
    <View>
      <Text>대윤파닭 </Text>
    </View>
  );
};

export default DelieveryCall;
