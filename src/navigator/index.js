import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  useEffect,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainColor} from '../utils/Constants';
import LoginScreen from '../screens/Login';
import Home from '../screens/drawer/Home';
import DrawerContent from '../screens/drawer/DrawerContent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import More from '../screens/BottomTab/More';
import Homes from '../screens/BottomTab/Main';
import Main from '../screens/BottomTab/Main';
import {tick} from '../redux/actions/ui';
import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
//Drawer Navigator
const DrawerNavigator = props => {
  const dispatch = useDispatch();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={props => ({
        drawerActiveBackgroundColor: MainColor,
        headerLeft: () => (
          <TouchableOpacity
            style={{paddingLeft: 20}}
            onPress={() => {
              // dispatch(tick(true));
              props.navigation.openDrawer();
            }}>
            <Feather name="menu" size={30} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        options={{
          title: '',
          headerBackground: () => (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#ffc488', '#fb7918']}
              style={styles.linearGradient}></LinearGradient>
          ),
        }}
        name="HomeScreen"
        component={Home}
      />
    </Drawer.Navigator>
  );
};
//Bottom Tab Navigator
const Bottom = createBottomTabNavigator();
const BottomTab = () => {
  const selector = useSelector(state => state.tick);
  console.log('selector', selector);
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIcon: () => {},
        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          height: 100,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: selector.tick ? 'none' : null,
          ...styles.shadow,
        },
      }}
      initialRouteName="Home">
      <Bottom.Screen
        name="CustomDrawer"
        options={() => ({
          tabBarIcon: ({focused}) => (
            <View>
              <AntDesign
                name="appstore1"
                size={30}
                color={focused ? MainColor : '#748c94'}
              />
              <Text
                style={{color: focused ? MainColor : '#748c94', fontSize: 12}}>
                Menu
              </Text>
            </View>
          ),
        })}
        component={Main}
      />
      <Bottom.Screen
        name="Offer"
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons
                name="briefcase"
                size={30}
                color={focused ? MainColor : '#748c94'}
              />
              <Text
                style={{color: focused ? MainColor : '#748c94', fontSize: 12}}>
                Offers
              </Text>
            </View>
          ),
        }}
        component={LoginScreen}
      />
      <Bottom.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={focused ? MainColor : '#748c94'}
              />
              <Text
                style={{color: focused ? MainColor : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),

          // tabBarItemStyle: () => (
          //   <View
          //     style={{backgroundColor: 'red', width: 100, height: 100}}></View>
          // ),
        }}
        component={DrawerNavigator}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome
                name="user"
                size={30}
                color={focused ? MainColor : '#748c94'}
              />
              <Text
                style={{color: focused ? MainColor : '#748c94', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
        name="Settings"
        component={SignUpScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <AntDesign
                name="bars"
                size={30}
                color={focused ? MainColor : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? MainColor : '#748c94',
                  fontSize: 12,
                }}>
                More
              </Text>
            </View>
          ),
        }}
        name="More"
        component={More}
      />
    </Bottom.Navigator>
  );
};

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="CustomDrawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
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

const styles = StyleSheet.create({
  shadow: {
    hadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.29,
    shadowRadius: 8.65,

    elevation: 7,
  },
  linearGradient: {
    flex: 1,
  },
});
