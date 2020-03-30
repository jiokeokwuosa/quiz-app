import React from 'react';
import {NavigationView} from './styles';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Homepage from './../home';
import Quiz from './../quiz';

const Stack = createStackNavigator();

const Nav = () => {
  return (
    <NavigationView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f7287b',
            },
            headerTintColor: '#f5f5f5',
            headerTitleStyle: {
              fontFamily: 'Segoe UI',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home Page"
            component={Homepage}
            options={{
              title: 'Bible Quiz',
            }}
          />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationView>
  );
};

export default Nav;
