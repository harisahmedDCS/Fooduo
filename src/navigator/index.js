import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomDrawer from '../screens/authentication/CustomeDrawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authentication/SignUpScreen';
import LoginScreen from '../DrawerScreen/Login';
import HomeScreen from '../../src/screens/authentication/menu/Home';
import DrawerScreen from '../../src/DrawerScreen/DrawerContent';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="CustomDrawer"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
