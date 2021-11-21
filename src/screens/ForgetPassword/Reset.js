import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SecondaryFontColor, MainColor} from '../../utils/Constants';

const Reset = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>Reset Password</Text>
        <Text style={styles.loremText}>
          {'   '}
          Please enter ypur email to receive a {'\n'}link to create a new
          password via email
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput
          value={email}
          placeholder="email"
          keyboardType="email-address"
          placeholderTextColor={SecondaryFontColor}
          style={styles.input}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Otp')}
          activeOpacity={0.8}
          style={[styles.input, {backgroundColor: MainColor}]}>
          <Text
            style={{
              textAlign: 'center',
              padding: 15,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inner: {
    alignItems: 'center',
    marginTop: 25,
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
  loremText: {
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
