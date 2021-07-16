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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Movies from './Movies';
import MovieDescription from './MovieDescription';
import Favorites from './Favorites';

  

import {
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';

const StackNavigator = createStackNavigator(); 


const HomeStack = () => (
  <StackNavigator.Navigator>
       <StackNavigator.Screen name="Home" component={Movies} />
       <StackNavigator.Screen name="movieDescription" component={MovieDescription} />
     </StackNavigator.Navigator>
)
const FavoritesStack = () => (
  <StackNavigator.Navigator>
       <StackNavigator.Screen name="Favorites" component={Favorites} />
       {/* AQUI VA LA LINEA DE FAVORITAS DESCRIPTION CUANDO ESTÉ HECHA */}
       {/* <StackNavigator.Screen name="favoriteDescription" component={FavoriteDescription} />  */}
     </StackNavigator.Navigator>
)

const TabNavigator = createBottomTabNavigator();

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <TabNavigator.Navigator>
          <TabNavigator.Screen 
            name="Home"
            component={HomeStack}
            />
          <TabNavigator.Screen 
            name="Favorites"
            component={FavoritesStack}
            />
        </TabNavigator.Navigator>
      </NavigationContainer>


              
      
    )
  }
}