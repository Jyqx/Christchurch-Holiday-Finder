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
                  <Text style={styles.item}>{item.title}</Text>
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
});