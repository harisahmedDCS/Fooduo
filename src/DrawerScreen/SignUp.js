import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SignUp = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
