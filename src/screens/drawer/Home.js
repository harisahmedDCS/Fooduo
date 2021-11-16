import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
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
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
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
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
