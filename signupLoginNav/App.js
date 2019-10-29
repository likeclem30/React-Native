

import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet, 
  Text, 
  View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
  <View>
    <StatusBar hidden={route.statusBarHidden} />
    ...
  </View>
        <Text style={{color:'#fffff',fontsize:18}}>Welcome to React Native!</Text>
        
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
});
