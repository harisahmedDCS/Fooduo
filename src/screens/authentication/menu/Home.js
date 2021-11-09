import React, {useEffect} from 'react';
import {StyleSheet, Text, View, BackHandler, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
const Home = () => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp()
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
  return (
    <View>
      {/* {loading ? (
        <Text>Home</Text>
      ) : (
        <OrientationLoadingOverlay
          visible={true}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
        />
      )} */}
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
