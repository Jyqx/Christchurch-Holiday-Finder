import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = (
  { onPress, title, size, backgroundColor } //This is used to specify parameters for the button
) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === 'sm' && {
        width: 270,
        paddingVertical: 12,
        elevation: 8,
      },
      size === 's' && {
        width: 130,
        paddingVertical: 12,
        elevation: 8,
      },
      backgroundColor && { backgroundColor },
    ]}>
    <Text
      style={[
        styles.appButtonText,
        size === 'sm' && { fontSize: 18 },
        size === 's' && { fontSize: 15 },
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  //This is used for the default style of the button
  appButtonContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
