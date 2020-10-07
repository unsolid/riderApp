import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/Screens/Home';
import Helmet from './src/Screens/Helmet';
import Delievery from './src/Screens/Delievery';
import Map from './src/Screens/Map';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return <Home navigation={navigation} />;
}

function HelmetScreen({navigation}) {
  return <Helmet navigation={navigation} />;
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="helmet"
            component={HelmetScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="delievery"
            component={Delievery}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
