import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  FlatList,
} from 'react-native';
import { markers, } from '../model/MapData';
import StarRating from '../components/starRating';
import FavoritesButton from '../components/favoritesbutton';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const IsFavorited = (props) => {

    // This array will contain our star tags and allow us to set a star rating from 1 to 5
    let favs = [];
    // Loop 5 times to set see which stars should fill or not
    for (var i = 0; i <markers.length; i++) {
        var marker = markers[i]
        if (marker.isFavorited) {
          favs.push(marker)
        }
    }  
    return (
            <View style={styles.container0}>
              <FlatList
                data={favs}
                renderItem={({ item }) => (
                  <View style={styles.card}>
                  <Image 
                   source={item.image}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{item.title}</Text>
              <StarRating ratings={item.rating} reviews={item.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
                )}
              />
            </View>
            );
  }
  
export default IsFavorited

const styles = StyleSheet.create({

  container0: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#485696',
  },
  card: {
    // padding: 10,
    backgroundColor: "#052E6C",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
    cardtitle: {
    fontSize: 12,
    color: '#fff',
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#DCDCDC",
  },
    textContent: {
    flex: 2,
    padding: 10,
  },
    cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});