import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card} from '@paraboly/react-native-card';

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
    <View style={styles.container}>
      <Card
        title="대윤파닭"
        onPress={() => {}}
        borderRadius={20}
        bottomRightText="30 km"
        iconBackgroundColor="#32D8BA"
        textContainerNumberOfLines={null}
        content="대윤파닭"
        bottomRightStyle={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#505e80',
        }}
      />
    </View>
  );
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
