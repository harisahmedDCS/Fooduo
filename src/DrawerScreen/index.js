import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import SignUp from './SignUp';
import Login from './Login';
import Home from '../screens/authentication/menu/Home';
const index = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
