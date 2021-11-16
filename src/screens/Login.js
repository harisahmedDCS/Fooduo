import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import Button from '../../src/components/Button';

import {
  SWidth,
  SHeight,
  MainColor,
  SecondaryFontColor,
} from '../utils/Constants';
import {login} from '../redux/actions/auth';
const LoginScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {loading} = auth;
  const onChangeText = (key, val) => {
    setFormData({...formData, [key]: val});
  };

  const onSubmit = () => {
    dispatch(login({email, password, setLoad}));
  };
  const buttonStyle = {
    backgroundColor: MainColor,
    textAlign: 'center',
    alignItems: 'center',
  };
  const textStyle = {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    padding: 12,
  };
  console.log('loading', loading);
  console.log('load', load);
  return (
    <ScrollView style={{top: -10}} showsVerticalScrollIndicator={false}>
      {load ? null : (
        <OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
        />
      )}
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.loginDetails}>Add your details to login</Text>
        <TextInput
          placeholder="email"
          value={email}
          placeholderTextColor={SecondaryFontColor}
          style={styles.input}
          onChangeText={val => onChangeText('email', val)}
        />
        <TextInput
          value={password}
          placeholder="email"
          keyboardType="email-address"
          placeholderTextColor={SecondaryFontColor}
          style={styles.input}
          onChangeText={val => onChangeText('password', val)}
        />
        <Button
          navigation={navigation}
          onSubmit={onSubmit}
          screenName={!loading ? 'Login' : 'CustomDrawer'}
          textStyle={textStyle}
          buttonStyle={buttonStyle}
          name="Login"
          width={87}
          height={7}
          activeOpacity={0.8}
          borderRadius={25}
          navigation={navigation}
          // ...rest
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Dont't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: MainColor, fontWeight: 'bold'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  input: {
    height: 55,
    width: '87%',
    paddingLeft: 30,
    paddingRight: 30,
    margin: 12,
    backgroundColor: 'rgba(182, 183, 183, 0.3)',
    borderColor: 'grey',
    borderRadius: 25,
  },
  login: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 400,
    color: 'black',
  },
  loginDetails: {
    marginTop: 5,
    fontSize: 15,
  },
});
