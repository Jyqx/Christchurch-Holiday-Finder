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
 


class FavoritesButtons extends React.Component () {
  constructor(props){
    super();
      this.state={
        textValue: 'Temporary text',
        styleValue: {backgroundColor: 'red'},
        marker: markers[props.key]
      };
  }


render(){
  return(
    <TouchableOpacity
                  style={styles.favorited}
                  onPress={() => {
                    var marker = this.state.marker
                    if(marker.isFavorited){
                      marker.isFavorited = false
                      this.setState({
                        textValue: "XYZ"
                      })
                    } 
                    else{
                      marker.isFavorited = true

                    }
                    }}
                >
                    <Text style={this.state.styleValue}>{this.state.textValue}</Text>
    </TouchableOpacity>
  )
  }
}

export default FavoritesButtons;

const styles = StyleSheet.create({

    favorited: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      backgroundColor: "tomato"
    },
  })