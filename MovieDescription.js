/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
   Button,
   TouchableOpacity
 } from 'react-native';
 
 
 
 
 export default class MovieDescription extends React.Component{
   
   constructor(props){
     super(props)
     //pelicula que recibo al hacer click sobre ella en pantalla Movies
     const clickedMovie = props.route.params.movie;
     const movieId = clickedMovie.id;
     const movieTitle = clickedMovie.title;
     const movieOverView = clickedMovie.overview;
     const movieReleaseDate = clickedMovie.release_date;
     const moviePoster = props.route.params.moviePoster;
      
     this.state = {
       movie: clickedMovie,
       title: movieTitle,
       id: movieId,
       overview: movieOverView,
       release_date: movieReleaseDate,
       poster: moviePoster,
       repeated: false
     }
     
     props.navigation.setOptions({
         title: movieTitle,
     })
     
   }
 
   addToFavorites = (movId, movTitle, movOverView, movReleaseDate, movPoster) => {
     
     const FavoritesDb = SQLite.openDatabase("favMovies.db", "1.0", "", 1);
     FavoritesDb.transaction(function (txn) {
       txn.executeSql(
         "CREATE TABLE IF NOT EXISTS favorites ( id INTEGER PRIMARY KEY, title VARCHAR(100),  release_date VARCHAR(20), overview VARCHAR(10000), poster_path VARCHAR(100) )",
         []
       );
       
       // Primero compruebo si existe la pelicula en favoritos
       txn.executeSql("SELECT * FROM `favorites` WHERE id="+ movId, [], function (tx, res) {
         console.log("item:", res.rows.length);
         // si no hay resultados la pelicula no existe en la bd, entonces se muestra el mensaje de añadida
         if(res.rows.length == 0){
           alert(movTitle + ' added to favorites')  
         }
         // Si el resultado es 1 quiere decir que ya existe en la bd, se muestra mensaje de que ya está en la bd.
         else if(res.rows.length == 1 ){
         alert('The movie '+ movTitle + ' is already in favorites')  
         }
       });
 
 
       txn.executeSql("INSERT INTO favorites (id, title, release_date, overview, poster_path)"
                     +          " VALUES  ( ?,   ?  ,      ?       ,   ?    ,     ?     )",
                                           [movId, movTitle, movReleaseDate, movOverView, movPoster]
       
       );
       
 
       txn.executeSql("SELECT * FROM `favorites`", [], function (tx, res) {
         for (let i = 0; i < res.rows.length; ++i) {
           console.log("item:", res.rows.item(i));
           }}
         );
       });
     
 }
   
   componentDidMount(){
 
 
   }
   
   render(){
     return (
        <ScrollView >
         <View style={styles.container}>
           <Text style={styles.title}> {this.state.title} </Text>
           <Text>{this.state.id}</Text>
           <Image
             style={styles.imgStyle}
             source={{ uri: this.state.poster }}
           />
           <Text style={styles.releaseDate}> {this.state.release_date} </Text>
           <Text style={styles.overview}> {this.state.overview} </Text>
           <TouchableOpacity
             style={styles.button}
             onPress={() => this.addToFavorites(this.state.id, this.state.title, this.state.overview, this.state.release_date, this.state.poster)}
             underlayColor='#fff'>
             <Text style={styles.textButton}>Add to favorites</Text>
           </TouchableOpacity>
         </View>
        </ScrollView>
         
     )
    
   }
 }
 
 const styles = StyleSheet.create({
   container:{
     alignItems: 'center',
     justifyContent: 'center',
   },
   title:{
     fontWeight: 'bold',
     fontSize:17,
     flexDirection: 'column',
     textAlign: 'center',
     backgroundColor: 'lightblue',
     padding:25,
 },
   imgStyle: {
       width:150,
       height:300,
       padding: 25
                  
   },
   releaseDate:{
     fontSize:14,
     flexDirection: 'column',
     textAlign: 'center',
     backgroundColor: 'lightblue',
     padding:20,
 },
 overview:{
   fontSize:13,
   flexDirection: 'column',
   textAlign: 'center',
   backgroundColor: 'lightblue',
   padding:10,
 },
 button:{
   backgroundColor:'lightblue',
   padding: 15
 },
 textButton:{
   color:'white'
 }
 
 })