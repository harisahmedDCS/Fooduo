import React from 'react';
import {StyleSheet, Text, View, TextInput, useState} from 'react-native';
import {SecondaryFontColor, PlaceholderColor} from '../../utils/Constants';
const index = ({placeHolderName, type, setFormData}) => {
  // const [text, onChangeText] = React.useState('');
  const onChangeText = (type, val) => {
    setFormData({[type]: val});
  };
  return (
    <TextInput
      placeholder={placeHolderName}
      placeholderTextColor={SecondaryFontColor}
      style={styles.input}
      onChangeText={val => onChangeText(type, val)}
      // value={text}
    />
  );
};

export default index;

const styles = StyleSheet.create({
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
