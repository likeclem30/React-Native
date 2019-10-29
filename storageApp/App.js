

import React, {Component} from 'react';
import {Platform, StyleSheet,Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button onPress={this._storeData} title="Save Data" />
        <Button
          onPress={this._retrieveData} title="Read Data" />
      </View>
    );
  }
  _storeData = async () => {
    try {
      await AsyncStorage.setItem('setting', 'v.1.0.1')
      alert("Stored")
    } catch (error) {
      // Error saving data
      alert("error")
    }
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('Settings');
      if (value !== null) {
       alert(value);
      }
    } catch (error) {
      alert('error');
    }
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
  }
});
