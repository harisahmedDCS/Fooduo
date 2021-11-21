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
import {
  MainColor,
  PlaceholderColor,
  PrimaryFontCOlor,
  SecondaryFontColor,
} from '../../utils/Constants';

const Profile = ({navigation}) => {
  const [filePath, setFilePath] = useState(null);
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
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option',
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const result = async () =>
    await launchImageLibrary(options, response => {
      setFilePath(response.assets[0].uri);
    });

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
              Profile
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
        {/* profile image */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity onPress={result}>
            <Image
              source={{
                uri: filePath,
              }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 75,
                backgroundColor: PlaceholderColor,
              }}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View>
              <MaterialIcons name="edit" size={20} color={MainColor} />
            </View>
            <View>
              <Text style={{color: MainColor}}>Edit Profile</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.txt, {fontSize: 16}]}>Hi there Akila</Text>
          </View>
          <View>
            <Text style={[styles.txt, {fontWeight: 'normal'}]}>Sign Out</Text>
          </View>
          <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
            <TextInput
              placeholder="Name"
              value={name}
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('name', val)}
            />
            <TextInput
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('email', val)}
            />
            <TextInput
              value={mobile}
              placeholder="Mobile no"
              keyboardType="number-pad"
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('mobile', val)}
            />
            <TextInput
              value={address}
              placeholder="Address"
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('address', val)}
            />
            <TextInput
              value={password}
              placeholder="Password"
              keyboardType="number-pad"
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('password', val)}
            />
            <TextInput
              value={confirmPassword}
              placeholder="Confirm Password"
              keyboardType="number-pad"
              placeholderTextColor={SecondaryFontColor}
              style={styles.input}
              onChangeText={val => onChangeText('confirmPassword', val)}
            />
            <TouchableOpacity
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
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

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
