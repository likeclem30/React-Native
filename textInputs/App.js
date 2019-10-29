/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';


function func2(){
  console.log(this)
}

export default class App extends Component {
  constructor(){
    super()
    this.state={}
    //this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleUsernameChanges(newText){
    console.log('Username is ${newText}')
  }
  handlePasswordChanges(newText){
    console.log('Password is ${newText}')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Username</Text>
        <TextInput onChangeText ={this.hhandleUsernameChanges}
         placeholder="Type here to translate! whatever"
        />

       <Text>Password</Text>
        <TextInput onChangeText ={this.handlePasswordChanges}
         placeholder="Type here to translate! whatever"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20

  }
});
