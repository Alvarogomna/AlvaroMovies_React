/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import axios from 'axios';
import React, { Props } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from './Movies';
import MovieDescription from './MovieDescription';

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';

const StackNavigator = createStackNavigator(); 

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <StackNavigator.Navigator>
          <StackNavigator.Screen name="movies" component={Movies} />
          <StackNavigator.Screen name="movieDescription" component={MovieDescription} />
        </StackNavigator.Navigator>
        <Movies/>
      </NavigationContainer>


              
      
    )
  }
}