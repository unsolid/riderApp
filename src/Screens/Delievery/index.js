import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Tts from 'react-native-tts';
import WaitingCall from './WaitingCall';
import DeliveryCall from './DelieveryCall';

const Delievery = () => {
  const [call, setCall] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCall(false);
    }, 3000);
  });

  const handleTts = (ttsText) => {
    Tts.getInitStatus().then(() => {
      Tts.speak(ttsText);
    });
  };

  return <>{call ? <WaitingCall /> : <DeliveryCall />}</>;
};

export default Delievery;
