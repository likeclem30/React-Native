
import React from 'react';
import {StyleSheet,Button, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Screen!</Text>
        <Button
          title="Go to Second Page"
        onPress={() => navigate('Second')}
        />
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Second Screen!</Text>
        <Button
          title="Go to Home page"
        onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Second:{
    screen:SecondScreen
  }
});

export default createAppContainer(AppNavigator);

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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
