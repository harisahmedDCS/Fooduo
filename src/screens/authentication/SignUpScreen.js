import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  SWidth,
  SHeight,
  MainColor,
  SecondaryFontColor,
  getToken,
} from '../../utils/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {setAlert} from '../../redux/actions/alert';
import {register} from '../../redux/actions/auth';

const SignUpScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name, email, password} = formData;
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  console.log(selector);
  const onChangeText = (key, val) => {
    setFormData({...formData, [key]: val});
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
    padding: 8,
  };
  const onSubmit = () => {
    dispatch(register({name, email, password}));
  };

  return (
    <ScrollView style={{top: -10}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.login}>Sign Up</Text>
        <Text style={styles.loginDetails}>Add your details to sign up</Text>
        <View style={{marginTop: 80, width: '100%', alignItems: 'center'}}>
          <TextInput
            placeholder="name"
            value={name}
            placeholderTextColor={SecondaryFontColor}
            style={styles.input}
            onChangeText={val => onChangeText('name', val)}
          />
          <TextInput
            value={email}
            placeholder="email"
            keyboardType="email-address"
            placeholderTextColor={SecondaryFontColor}
            style={styles.input}
            onChangeText={val => onChangeText('email', val)}
          />
          <TextInput
            value={password}
            placeholder="password"
            keyboardType="number-pad"
            placeholderTextColor={SecondaryFontColor}
            style={styles.input}
            onChangeText={val => onChangeText('password', val)}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'flex-end'}}>
          <Button
            navigation={navigation}
            onSubmit={onSubmit}
            screenName={'Login'}
            textStyle={textStyle}
            buttonStyle={buttonStyle}
            width={87}
            height={7}
            name="Sign Up"
            activeOpacity={0.8}
            borderRadius={25}
            // ...rest
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text>Already have an account?</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: MainColor, fontWeight: 'bold'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    height: SHeight,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginTop: -30,
  },
  login: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 70,
    color: 'black',
  },
  loginDetails: {
    marginTop: 5,
    fontSize: 15,
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
});
