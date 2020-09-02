import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const Toggle = ({value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {value ? 'ON' : 'OFF'}</Text>
      <Switch
        style={styles.switch}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
  },
  switch: {
    width: 50,
  },
});

export default Toggle;
