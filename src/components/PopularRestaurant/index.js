import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {
  MainColor,
  PlaceholderColor,
  SecondaryFontColor,
  SWidth,
} from '../../utils/Constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const index = () => {
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
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.txt}>Popular Restaurants</Text>
        </View>
        <View>
          <Text style={styles.viewAllTxt}>View all</Text>
        </View>
      </View>
      {/* categories */}
      <View style={{marginTop: 10}}>
        {data.map((item, key) => {
          return (
            <View key={key}>
              <Image
                source={item.img}
                style={{
                  height: 200,
                  width: SWidth,
                  backgroundColor: PlaceholderColor,
                }}
              />
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
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
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
