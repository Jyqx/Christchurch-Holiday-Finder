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
        textValue: 'Favorite this!',
        styleValue: styles.notFavorited,
        markerId: props.markerId
      };
  }


render(){
  return(
  <View style={styles.button}>  
    <TouchableOpacity
                  style={this.state.styleValue}
                  onPress={() => {
                    console.log(this.state.markerId)
                    let marker = markers[this.state.markerId]
                    marker.isFavorited = !marker.isFavorited                  
                    if(marker.isFavorited){
                      this.setState({
                        textValue: "Remove from Favorites!",
                        styleValue: styles.favorited
                      })
                    } 
                    else{
                      this.setState({
                        textValue: "Favorite this!", 
                        styleValue: styles.notFavorited
                      })

                    }
                    }}
                >
                    <Text style={styles.favTitle}>{this.state.textValue}</Text>
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
  notFavorited: {
    width: '100%',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: "#00994d"
  },
  button: {
      alignItems: 'center',
      marginTop: 5
  },
  favTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: "bold",
  },
  })