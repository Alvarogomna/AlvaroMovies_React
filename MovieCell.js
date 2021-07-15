import React from 'react';
import { Component } from 'react';
import {Text, Image, View, StyleSheet, TouchableHighlight} from 'react-native';


export default class MovieCell extends Component{
    
    render(){
        return (
            <TouchableHighlight 
            onPress={ this.props.onPress }
            >
                <View style={styles.container}>
                    <Image
                        style={styles.imgStyle}
                        source={{ uri: this.props.moviePoster }}
                    />
                    <Text>{this.props.movieTitle}</Text>
                </View>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        padding:25,
    },
    imgStyle: {
        width:100,
        height:200           
    }
})