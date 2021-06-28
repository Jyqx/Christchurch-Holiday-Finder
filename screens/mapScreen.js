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
} from 'react-native';
import Constants from 'expo-constants';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { markers, } from '../model/MapData';
import StarRating from '../components/starRating'
import FavoritesButton from '../components/favoritesbutton.js'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

function MapFileScreen() {

const intialMapState = {
  markers,
  region: {
    latitude: -43.532,
    longitude: 172.6306,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  },
};

const [state, setState] = React.useState(intialMapState);

let mapIndex = 0;
let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  }


const _map = React.useRef(null);
const _scrollView = React.useRef(null);

return (
  <View style={styles.container0}>
    <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.map}
      >
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  key={index}
                  source={marker.icon}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        decelerationRate = 'fast'
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ?  SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          {useNativeDriver: true}
        )}
      >
      {state.markers.map((marker, index) =>(
          <View style={styles.card} key={index}>
            <Image 
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              <StarRating ratings={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                <FavoritesButton markerId={index}></FavoritesButton>
            </View>
          </View>
      ))}
      </Animated.ScrollView>
    </View>
  );
}

export default MapFileScreen;

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
  marker: {
    width: 25,
    height: 25,
    },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
    scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    backgroundColor: "#485696",
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
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
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
});


