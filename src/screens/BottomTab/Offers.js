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
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  MainColor,
  PlaceholderColor,
  PrimaryFontCOlor,
  SecondaryFontColor,
  SWidth,
} from '../../utils/Constants';
const Offers = ({navigation}) => {
  const [filePath, setFilePath] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeText = (key, val) => {
    setFormData({...formData, [key]: val});
  };
  const {name, email, password, mobile, address, confirmPassword} = formData;
  let options = {
    // title: 'Select Image',
    // customButtons: [
    //   {
    //     name: 'customOptionKey',
    //     title: 'Choose Photo from Custom Option',
    //   },
    // ],
    // storageOptions: {
    //   skipBackup: true,
    //   path: 'images',
    // },
  };
  const result = async () =>
    await launchImageLibrary(options, response => {
      console.log('here', response);
      setFilePath(response.assets[0].uri);
    });
  console.log('lll', filePath);
  const data = [
    {
      title: 'Minute By TukTuk',
      rating: 4.9,
      totalRating: '(124 ratings) Cafe',
      type: 'Western Food',
      img: require('../../assets/images/meat1.jpg'),
    },
    {
      title: 'DE NOIR',
      rating: 4.9,
      totalRating: '(124 ratings) Cafe',
      type: 'Western Food',
      img: require('../../assets/images/meat2.jpg'),
    },
    {
      title: 'Portugess',
      rating: 4.9,
      totalRating: '(124 ratings) Cafe',
      type: 'Western Food',
      img: require('../../assets/images/meat3.jpg'),
    },
    {
      title: 'BBQ in spain',
      rating: 4.9,
      totalRating: '(124 ratings) Cafe',
      type: 'Western Food',
      img: require('../../assets/images/meat4.jpg'),
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{margin: 20}}>
        {/* header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: '#000'}}>
              Latest Offers
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
        {/* titile */}
        <Text style={{marginTop: 10}}>
          Find discounts,Offers special {'\n'}meals and more!
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.input, {backgroundColor: MainColor}]}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Check Offers
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        {data.map((item, key) => {
          return (
            <View key={key}>
              <Image source={item.img} style={{height: 200, width: SWidth}} />
              <View style={styles.restaurantItem}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.row}>
                <View>
                  <FontAwesome name="star" size={22} color={MainColor} />
                </View>
                <View>
                  <Text>{item.rating}</Text>
                </View>
                <View>
                  <Text>{item.totalRating}</Text>
                </View>
                <View style={{marginLeft: 15}}>
                  <Text>{item.type}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  flatListContainer: {
    marginTop: 20,
  },
  txt: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '60%',
    backgroundColor: 'rgba(182, 183, 183, 0.3)',
    borderColor: 'grey',
    borderRadius: 25,
    marginTop: 20,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  viewAllTxt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: MainColor,
  },
  restaurantItem: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
});
