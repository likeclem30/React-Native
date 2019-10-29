/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,TextInput, View} from 'react-native';




export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {text:'value text'}
  }
  render() {
    return (
      <View>
      <Button 
      onPress ={this.onPress}
      title ={this.state.text}
      />

      <TextInput
      style={{borderWidth: 1}}
      onChangeText={this.onChangeText}
      value = {this.state.text}


      />
      </View>
    );
  }

  onChangeText=(text)=>{
    this.setState({text})
  }
  onPress =()=>{
    alert('Clicked')
  }
}

