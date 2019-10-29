
import React, {Component} from 'react';
import {StyleSheet,Button, Text, View} from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {text:'Welcome to React Native!', desc:'To Get Started edit App',item:''}
  }

  render() {
    return (
      <View style={styles.container}>
      <Button title='Get Data' onPress={this._getData}/>
        <Text style={styles.welcome} >{this.state.text}</Text>
        <Text style={styles.welcome}>{this.state.desc}</Text>
        <Text style={styles.welcome}>{this.state.item}</Text>
        
      </View>
    );
  }
  _getData = async () =>{

    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        text:responseJson.title,
        desc:responseJson.description,
        item:responseJson.movies[2].title
      });
    })
    .catch((error) => {
      console.error(error);
    });
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
  },
  
});
