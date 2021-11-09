import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from '../../DrawerScreen/DrawerContent';
// import SignUp from './SignUpScreen';
// import Login from '../../DrawerScreen/Login';
import {MainColor} from '../../utils/Constants';
import {logout} from '../../redux/actions/auth';
import Home from './menu/Home';

const index = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: MainColor,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({});
