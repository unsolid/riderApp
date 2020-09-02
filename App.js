import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PendingScreen from './src/Screens/Pending';
import OnGoingScreen from './src/Screens/OnGoing';
import CompleteScreen from './src/Screens/Complete';
import Seperator from './src/Bluetooth/seperator';
import Bluetooth from './src/Bluetooth/';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="블루투스"
        onPress={() => navigation.navigate('블루투스')}
      />
      <Seperator />
      <Button title="배달" onPress={() => navigation.navigate('배달현황')} />
    </View>
  );
}

const root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="대기" component={PendingScreen} />
      <Tab.Screen name="진행" component={OnGoingScreen} />
      <Tab.Screen name="완료" component={CompleteScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="블루투스" component={Bluetooth} />
          <Stack.Screen name="배달현황" component={root} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
