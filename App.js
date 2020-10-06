import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ResultsShowScreen from './screens/ResultsShowScreen';

import AppNavigator from './navigation/AppNavigator';

// Client ID
// 5xFkiPEarQUZMbUcJYz8Rg

// API Key
// _sLWANFRo3E6s7JZTtuavfrCgwAzhRudp3td3mgHgmpjoE027i8OFZHwiTxRTzO8w25pFyENCfeGGvtxMftz0A8JN7PuP3gYFIXKT7vKX3r-mS1l5sAZA0XEqagKXnYx

const navigator = createStackNavigator({
  Home: HomeScreen,
  ResultsShow: ResultsShowScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Business Search',

  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default createAppContainer(navigator);
