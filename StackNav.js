import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import SecondScreen from './SecondScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen component={Home} name="Home" />
    <Stack.Screen component={SecondScreen} name="Second" />
  </Stack.Navigator>
);

export default StackNav;
