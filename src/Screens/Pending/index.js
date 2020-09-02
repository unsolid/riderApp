import React from 'react';
import {View, Text} from 'react-native';
import LocationNotification from './locationNotification';
import DelieveryList from './delieveryList';

const PendingScreen = () => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <LocationNotification />
        <DelieveryList />
      </View>
    </>
  );
};

export default PendingScreen;
