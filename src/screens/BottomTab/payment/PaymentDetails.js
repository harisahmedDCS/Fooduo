import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {SecondaryFontColor} from '../../../utils/Constants';
SecondaryFontColor;

const PaymentDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{margin: 20}}>
        {/* header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('More')}
            style={{flex: 1}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#000" />
          </TouchableOpacity>
          <View style={{flex: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
              Payment Details
            </Text>
          </View>
          <View>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 55,
    paddingLeft: 30,
    backgroundColor: 'rgba(182, 183, 183, 0.3)',
    borderColor: 'grey',
    borderRadius: 25,
  },
  flatListContainer: {
    marginTop: 20,
  },
  txt: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: '#fff',
  },
  imageText: {
    marginTop: 100,
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
});
