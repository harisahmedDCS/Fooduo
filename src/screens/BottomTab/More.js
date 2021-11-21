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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MoreList from '../../components/MoreList';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const More = ({navigation}) => {
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
              More
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <MaterialIcons name="shopping-cart" size={25} color="#000" />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <MoreList
            name="payment"
            index={0}
            screenName="PaymentDetails"
            navigation={navigation}>
            Payment Details
          </MoreList>
          {/* fontAwesome */}
          <MoreList name="briefcase" index={1}>
            My Orders
          </MoreList>
          {/* MaterialCommunity */}
          <MoreList name="bell" index={2}>
            Notifications
          </MoreList>
          {/* fontAwesome */}
          <MoreList name="envelope" index={3}>
            Inbox
          </MoreList>
          {/* AntDesign */}
          <MoreList name="exclamationcircleo" index={4}>
            About Us
          </MoreList>
        </View>
      </View>
    </ScrollView>
  );
};

export default More;

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
