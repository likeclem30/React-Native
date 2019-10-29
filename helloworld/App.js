/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class App extends Component{

  constructor(){
    super()
    this.state={}
    this.state.customStyles={
      color:'red'
    }

    setInterval(() => {
      if(this.state.customStyles.color=='red'){
      this.setState({
        customStyles:{
          color:'green'
        }
      })
    }else{
      this.setState({
        customStyles:{
          color:'red'
        }
    })
  }
 } , 1000)
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,this.state.customStyles]}>Welcome to React Native!</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
