import axios from 'axios';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';



export default class MovieDescription extends React.Component{
  
  constructor(props){
    super(props)
    //pelicula que recibo al hacer click sobre ella en pantalla Movies
     
    this.state = {
     
    }
    
    props.navigation.setOptions({
        
    })
    
  }
  
  componentDidMount(){


  }

  render(){
    return (
       <Text>Vista favoritas</Text>
        
    )
   
  }
}
