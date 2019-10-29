/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';




export default class App extends Component {
  constructor(){
    super()
    this.state={}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.half1,styles.half2x]}>
            <Text style={styles.text}> This is 1</Text>
        </View>
        <View style={styles.half2}>
             <View style={[styles.half21,styles.half2x]}>
              <Text style={styles.text}> This is 2/1</Text>
             </View>
             <View style={[styles.half22,styles.half2x]}>
               <Text style={styles.text}> This is 2/2</Text>
             </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half2x: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  half1:{
    flex:1,
    backgroundColor:'red'
  },
  half2:{
    flex:1,
    flexDirection: 'row',
    backgroundColor:'blue'
  },
  half21:{

    backgroundColor:'green'
  },
  half22:{
    
    backgroundColor:'black'
  },
  text:{
    color:'white',
    fontSize:30
  }
  
});
