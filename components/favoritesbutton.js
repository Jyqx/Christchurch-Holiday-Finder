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
import { markers } from '../model/MapData';
import StarRating from '../components/starRating';

var default_states = {}

//This class takes a value and changes the buttton in the mapview to say either Favorite this! or Remove from favorites!
class FavoritesButtons extends React.Component {
  constructor(props) {

default_states = {//Setup default button states for the favorites
  true:
  { //This is the state when it is favorited
        textValue: 'Remove from Favorites!',
        styleValue: styles.favorited
  },
  false: { //This is the state when it is not favorited
        textValue: 'Favorite this!',
        styleValue: styles.notFavorited
  }
}

    super(props);
    let marker = markers[props.markerId];
    this.state = { //This is the default state the button will be in
      textValue: default_states[marker.isFavorited].textValue,
      styleValue: default_states[marker.isFavorited].styleValue,
      markerId: props.markerId,
    };
  }

  render() {
    return ( 
      <View style={styles.button}>
        <TouchableOpacity
          style={this.state.styleValue}
          onPress={() => {
            console.log(this.state.markerId);
            let marker = markers[this.state.markerId];
            marker.isFavorited = !marker.isFavorited;
            this.setState(default_states[marker.isFavorited])
          }}>
          <Text style={styles.favTitle}>{this.state.textValue}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FavoritesButtons;

const styles = StyleSheet.create({
  favorited: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: 'tomato',
  },
  notFavorited: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#00994d',
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  favTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});
