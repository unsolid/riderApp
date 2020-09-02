import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PendingScreen from './src/Screens/Pending';
import OnGoingScreen from './src/Screens/OnGoing';
import CompleteScreen from './src/Screens/Complete';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <Text>배달현황</Text>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="대기" component={PendingScreen} />
          <Tab.Screen name="진행" component={OnGoingScreen} />
          <Tab.Screen name="완료" component={CompleteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
