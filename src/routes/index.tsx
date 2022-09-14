// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { Profile } from '../screens/Profile';


const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='/' headerMode='none'>
        <Stack.Screen name='/' component={SignIn} />
        <Stack.Screen name='profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
