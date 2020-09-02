import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Seperator from './seperator';

const Device = ({name, setDevice, iconLeft}) => {
  const handlePress = () => {
    setDevice(name);
  };
  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
        <View style={styles.wrapperLeft}>
          <Image style={styles.iconLeft} source={iconLeft} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}> {name}</Text>
        </View>
      </TouchableOpacity>
      <Seperator />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconLeft: {
    width: 20,
    height: 20,
  },
});

export default Device;
