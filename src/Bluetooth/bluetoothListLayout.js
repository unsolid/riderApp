import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BluetoothListLayout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BluetoothListLayout;
