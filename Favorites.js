import axios from 'axios';
import React from 'react';
import SQLite from "react-native-sqlite-2";

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';



export default class Favorites extends React.Component{
  
  constructor(props){
    super(props)
    
    this.obtainFavorites = this.obtainFavorites.bind(this);
    
    this.state = {
      favMovies: [],
      loading: false,
    }
    obtainFavorites: this.obtainFavorites.bind(this),

    props.navigation.setOptions({
        
    })
    
  }
  
  componentDidMount(){
    this.obtainFavorites();
  }

  obtainFavorites = () =>{
    var tempFavMovies = [];
    this.setState({loading: true})

    const FavoritesDb = SQLite.openDatabase("favMovies.db", "1.0", "", 1);
    FavoritesDb.transaction(function (txn) {
      
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS favorites ( id INTEGER PRIMARY KEY, title VARCHAR(100),  release_date VARCHAR(20), overview VARCHAR(10000), poster_path VARCHAR(100) )",
        []
      );

      txn.executeSql('select * from favorites', [], (tx, result) => {
        var len = result.rows.length;
        for (i=0;i<len;i++){
          responseMovies = result.rows._array[i];
          console.log('RESPUESTA' + responseMovies)
          this.setState({ favMovies: this.state.favMovies.concat(responseMovies) })
          
        }
        
        });
        
      });

      this.setState({loading: false})

  }

  render(){
    if(this.state.loading){
      return(
        <SafeAreaView>
          <Text>Loading ...</Text>
        </SafeAreaView>
      )
     }
    return (
       <Text>Vista favoritas tamaño {this.state.favMovies.length}</Text>
        
    )
   
  }
}
