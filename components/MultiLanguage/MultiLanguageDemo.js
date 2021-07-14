// Example of Localization in React Native Multi Language App
// https://aboutreact.com/localization-in-react-native/

import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LanguageSelection from './LanguageSelection';
import LanguageContent from './LanguageContent';

const Stack = createStackNavigator();

const MultiLanguageDemo = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LanguageSelection">
        <Stack.Screen
          name="LanguageSelection"
          component={LanguageSelection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LanguageContent"
          component={LanguageContent}
          options={{
            title: 'Content Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MultiLanguageDemo;