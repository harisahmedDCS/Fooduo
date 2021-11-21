import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import Profile from '../../assets/images/profile.jpg';
import {logout} from '../../redux/actions/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SHeight} from '../../utils/Constants';

const DrawerContent = props => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth);
  const {loading} = selector;
  console.log('@@@@', loading);

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <ImageBackground
            source={Profile}
            borderRadius={100}
            style={{
              width: '100%',
              height: '100%',
            }}></ImageBackground>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>Haris Ahmed</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <MaterialIcons name="logout" size={25} color="#fff" />
              )}
              labelStyle={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
              }}
              label="Logout"
              style={{
                backgroundColor: '#FFC27C',
              }}
              onPress={() => {
                dispatch(logout());
                if (loading !== false) {
                  props.navigation.navigate('Login');
                } else {
                  props.navigation.navigate('SignUp');
                }
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFC27C',
    padding: 8,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#EDA53F',
    marginTop: 30,
  },
  text: {
    marginLeft: 20,
    marginTop: 20,
  },
  textColor: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
