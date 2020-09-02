import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Empty = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Empty;
