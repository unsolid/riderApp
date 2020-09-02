import React from 'react';
import {View, StyleSheet} from 'react-native';

const Seperator = () => {
  return <View style={styles.seperator}></View>;
};

const styles = StyleSheet.create({
  seperator: {
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 60,
    marginRight: 25,
    borderColor: '#eceff1',
  },
});

export default Seperator;
