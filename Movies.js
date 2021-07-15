/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import axios from 'axios';
import React from 'react';
import MovieCell from './MovieCell';
import movieDescription from './MovieDescription';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ApiService from './ApiService'


export default class Movies extends React.Component{
  static BASE_IMG_URL ='https://image.tmdb.org/t/p/w300';
  apiService = new ApiService();

  constructor(props){
    super(props)
    
    this.state = {
      loading:false,
      totalPages: 1,
      page: 1,
      movies: [],
      
    }
    
  }
  
  componentDidMount(){

    this.obtainMovies();
  }
  obtainMovies = () =>{
    if(this.state.page <= this.state.totalPages){
    this.setState({loading: true})
    this.apiService.getMovies(this.state.page)
    .then((res) => {
      this.setState({
        movies: this.state.movies.concat(res.movies),
        totalPages: res.totalPages,
        loading: false,
        //refreshing: false  
      })
      
    }, //cierre primera {
   ); //cierre then primer (
  }//cierre if
  };

  loadMore = ()=>{
    this.setState(state =>({
    page: this.state.page + 1
    }),
    ()=>{
      this.obtainMovies();
    }
  )
  }
  render(){
    
   if(this.state.loading && this.page ==1){
    return(
      <SafeAreaView>
        <Text>Loading ...</Text>
      </SafeAreaView>
    )
   }
    return(
      <SafeAreaView >
        <FlatList 
                data={this.state.movies}
                renderItem ={this.renderCells}
                //onEndReachedThreshold= {0.5}
                //ListFooterComponen= {() => <ActivityIndicator animating />}
                onEndReached = {this.loadMore}
        ></FlatList>       
      </SafeAreaView>
    )
  }

  renderCells = ({item}) => {
    return <MovieCell 
              movieTitle={item.title}
              moviePoster={Movies.BASE_IMG_URL + item.poster_path}
              onPress={() => this.props.navigation.navigate('movieDescription')}
              />
              
  }
}