import React from 'react';
import {View, Text} from 'react-native';
import Tts from 'react-native-tts';

const DelieveryList = () => {
  const handleTts = (ttsText) => {
    Tts.getInitStatus().then(() => {
      Tts.speak(ttsText);
    });
  };
  return (
    <>
      <View>
        <Text onPress={handleTts('대윤파닭')}>대윤파닭</Text>
      </View>
      <View>
        <Text onPress={handleTts('도스마스')}>도스마스</Text>
      </View>
    </>
  );
};

export default DelieveryList;
