import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PlaceholderColor, SWidth} from '../../utils/Constants';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';

const Icon = ({name, index}) => {
  if (index == 0) {
    return <MaterialIcon name={name} color="#000" size={20} />;
  } else if (index == 1) {
    return <FontAwesome name={name} color="#000" size={20} />;
  } else if (index == 2) {
    return <MaterialCommunityIcons name={name} color="#000" size={20} />;
  } else if (index == 3) {
    return <FontAwesome name={name} color="#000" size={20} />;
  } else if (index == 4) {
    return <AntDesign name={name} color="#000" size={20} />;
  }
};
const onPress = (index, navigation, screenName) => {
  if (index == 0) {
    navigation.navigate(screenName);
  }
};
const index = ({children, name, index, screenName, navigation}) => {
  console.log('___', screenName);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.textContainer}
      onPress={() => onPress(index, navigation, screenName)}>
      <View style={{flexDirection: 'row', paddingLeft: 20}}>
        <View style={styles.circle}>
          <Icon name={name} index={index} />
        </View>
        <View style={{alignSelf: 'center', marginLeft: 20}}>
          <Text style={{fontWeight: 'bold'}}>{children}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  textContainer: {
    height: 80,
    borderRadius: 5,
    backgroundColor: '#d3d3d3',
    marginTop: 20,
    justifyContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PlaceholderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
