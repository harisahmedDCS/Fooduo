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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {
  PlaceholderColor,
  PrimaryFontCOlor,
  SecondaryFontColor,
  SWidth,
  MainColor,
} from '../../utils/Constants';
import PopularRestaurant from '../../components/PopularRestaurant';

const Item = ({state}) => {
  const {img, title, id} = state;
  console.log(id);
  return (
    <View style={styles.item}>
      <Image
        source={img}
        style={{
          width: 100,
          height: 100,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: PlaceholderColor,
        }}
      />
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

const Main = () => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const auth = useSelector(state => state.auth);
  const {loading} = auth;
  const [selectedValue, setSelectedValue] = useState('java');
  const [email, setEmail] = useState('');
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
          <View style={{flex: 1}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#000" />
          </View>
          <View style={{flex: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Deserts
            </Text>
          </View>
          <View>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            },
          ]}>
          <MaterialIcons name="search" size={25} color="#000" />

          <TextInput
            placeholder="Search food"
            value={email}
            placeholderTextColor={SecondaryFontColor}
            onChangeText={setEmail}
          />
        </View>
      </View>
      {/* menu */}
      <View>
        {data.map((item, key) => {
          return (
            <View key={key} style={{marginBottom: 10}}>
              <ImageBackground
                source={item.img}
                style={{
                  height: 180,
                  width: SWidth,
                }}>
                <View style={styles.imageText}>
                  <Text style={styles.txt}>{item.title}</Text>
                </View>
                <View style={styles.row}>
                  <View>
                    <FontAwesome name="star" size={22} color={MainColor} />
                  </View>
                  <View>
                    <Text style={{color: '#fff'}}>{item.rating}</Text>
                  </View>
                  <View>
                    <Text style={{color: '#fff'}}>{item.totalRating}</Text>
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text style={{color: '#fff'}}>{item.type}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Main;

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
