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
 


class FavoritesButtons extends React.Component{
  constructor(props){
    super(props);
//      console.log("constructor", props.props)
      this.state={
        textValue: 'Mark as Favorite',
//        favorite: false,
        styleValue: {backgroundColor: 'red'},
        markerId: props.markerId
      };
  }


render(){
  return(
  <View style={styles.button}>  
    <TouchableOpacity
                  style={styles.favorited}
                  onPress={() => {
                    console.log(this.state.markerId)
                    let marker = markers[this.state.markerId]
                    marker.isFavorited = !marker.isFavorited                  
                    if(marker.isFavorited){
                      this.setState({
                        textValue: "Favorite!", 
                        styleValue: {backgroundColor: 'blue'}
                      })
                    } 
                    else{
                      this.setState({
                        textValue: "Mark as Favorite", 
                        styleValue: {backgroundColor: 'yellow'}
                      })

                    }
                    }}
                >
                    <Text style={this.state.styleValue}>{this.state.textValue}</Text>
      </TouchableOpacity>
    </View>
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
  button: {
      alignItems: 'center',
      marginTop: 5
  },
  })