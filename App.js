import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import Delievery from './src/Screens/Delievery';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>안녕하세요,</Text>
      <Text style={styles.nameFirst}>
        <Text style={styles.nameFirst}>오늘의</Text>
        <Text style={styles.nameSecond}> 배달</Text>
        <Text style={styles.nameFirst}>을</Text>
      </Text>
      <Text style={styles.nameThird}> 시작해봐요</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('배달')}>
        <Text style={styles.buttonName}>시작</Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="배달"
          component={Delievery}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
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
  title: {
    position: 'absolute',
    width: 319,
    height: 70,
    left: 40,
    top: 147,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 64,
    lineHeight: 76,

    color: '#000000',
  },
  nameFirst: {
    position: 'absolute',
    width: 310,
    height: 70,
    left: 60,
    top: 380,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#000000',
  },
  nameSecond: {
    position: 'absolute',
    width: 310,
    height: 70,
    left: 60,
    top: 380,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#32D8BA',
  },
  nameThird: {
    position: 'absolute',
    width: 338,
    height: 100,
    left: 110,
    top: 456,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: 59,

    color: '#000000',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 193,
    height: 60,
    left: 87,
    top: 625,
    borderRadius: 90,
    backgroundColor: '#32D8BA',
  },
  buttonName: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000',
  },
});
