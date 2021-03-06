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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import {
  PlaceholderColor,
  PrimaryFontCOlor,
  SecondaryFontColor,
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

const Home = () => {
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
  const DATA = [
    {
      id: '1',
      img: require('../../assets/images/food1.jpg'),
      title: 'Italian',
    },
    {
      id: '2',
      img: require('../../assets/images/food2.jpg'),
      title: 'Spanish',
    },
    {
      id: '3',
      img: require('../../assets/images/food3.jpg'),
      title: 'German',
    },
    {
      id: '4',
      img: require('../../assets/images/food4.jpg'),
      title: 'Chineese',
    },
  ];
  const renderItem = ({item}) => {
    state = {
      img: item.img,
      title: item.title,
      id: item.id,
    };
    return (
      <View>
        <Item state={state} />
      </View>
    );
  };
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
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              Good Morning Akila!
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
        <Picker
          selectedValue={selectedValue}
          dropdownIconColor="orange"
          style={{height: 50, width: 200, fontWeight: 'bold'}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Current Location" value="java" />
          <Picker.Item label="airport" value="js" />
        </Picker>
        <View
          style={[
            styles.input,
            {
              flexDirection: 'row',
              alignItems: 'center',
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
        <View style={styles.flatListContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <PopularRestaurant />
    </ScrollView>
  );
};

export default Home;

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
  },
});
