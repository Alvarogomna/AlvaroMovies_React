/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  
} from 'react-native';



export default class MovieDescription extends React.Component{
  

  constructor(props){
    super(props)

    this.state = {
      
    }
    /*
    this.props.navigation.setOptions({
        title:'movie',
    })
    */
  }
  
  componentDidMount(){


  }

  render(){
    return (
        <Text>MovieDescription</Text>
    )
   
  }
}