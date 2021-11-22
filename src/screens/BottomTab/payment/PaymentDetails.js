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
  Modal,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {
  MainColor,
  SecondaryFontColor,
  SHeight,
  SWidth,
} from '../../../utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Main from '../Menu';
import AddCard from '../../../Modal/AddCard';

SecondaryFontColor;

const PaymentDetails = ({navigation}) => {
  const [correct, setCorrect] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = () => {
    return setCorrect(!correct);
  };
  const onPress2 = () => {
    return setCorrect2(!correct2);
  };
  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={{height: 200}}>
        {/* header */}

        <View style={{backgroundColor: '#fff'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('More')}
              style={{flex: 1}}>
              <MaterialIcons name="arrow-back-ios" size={25} color="#000" />
            </TouchableOpacity>
            <View style={{flex: 8}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
                Checkout
              </Text>
            </View>
            <View>
              <MaterialIcons name="shopping-cart" size={25} color="#000" />
            </View>
          </View>
          {/* first card */}
          <View style={{padding: 20}}>
            <Text>Delivery Address</Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.txtBold}>653 Nostrand Ave</Text>
                <Text style={styles.txtBold}>Brooklyn, NY 11216</Text>
              </View>
              <View>
                <Text
                  style={{marginTop: 10, color: MainColor, fontWeight: 'bold'}}>
                  Change
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* second card */}
        <View style={{padding: 20, marginTop: 15, backgroundColor: '#fff'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <View>
              <Text>Payment Method</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={openModal}
              style={{flexDirection: 'row'}}>
              <Ionicons name="add" size={20} color={MainColor} />
              <Text style={{color: MainColor, fontWeight: 'bold'}}>
                Add Card
              </Text>
            </TouchableOpacity>
          </View>
          {/* Visa */}
          <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <View style={styles.paymentInput}>
              <View style={styles.center}>
                <Text>Cash on delivery</Text>
              </View>
              <View style={styles.center}>
                <View style={styles.outerCircle}>
                  <View
                    style={[
                      styles.innerCircle,
                      {backgroundColor: correct ? MainColor : null},
                    ]}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress2}
            style={{marginTop: 10}}>
            <View style={styles.paymentInput}>
              <View style={styles.center}>
                <Text>Cash on delivery</Text>
              </View>
              <View style={styles.center}>
                <View style={styles.outerCircle}>
                  <View
                    style={[
                      styles.innerCircle,
                      {backgroundColor: correct2 ? MainColor : null},
                    ]}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <AddCard
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  input: {
    height: 55,
    paddingLeft: 30,
    backgroundColor: 'rgb(182, 183, 183)',
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
  txtBold: {
    fontWeight: 'bold',
  },
  paymentInput: {
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: MainColor,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    alignSelf: 'center',
    margin: 3,
  },
});
