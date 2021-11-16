import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SWidth, SHeight} from '../../utils/Constants';
import {useSelector} from 'react-redux';
const index = ({
  width,
  height,
  backgroundColor,
  buttonStyle,
  screenName,
  navigation,
  activeOpacity,
  textStyle,
  borderRadius,
  name,
  onSubmit,
  ...rest
}) => {
  console.log('rest', rest);
  const auth = useSelector(state => state.auth);
  const {loading} = auth;
  useEffect(() => {
    if (loading === true) {
      navigation.navigate('BottomTab');
    }
  }, [loading]);
  const onPress = () => {
    navigation.navigate(screenName);
    onSubmit();
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        buttonStyle,
        {
          borderRadius: borderRadius,
          width: (SWidth * width) / 100,
          height: (SHeight * height) / 100,
        },
      ]}>
      <Text style={textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default index;
