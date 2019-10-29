

import React, {Component} from 'react';
import { StyleSheet,Button, Text, View} from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state = {text:''};

  }
  render() {
    return (
      <View style={styles.container}>
      <Button title='Post Data' onPress={this._postData}/>
        <Text style={styles.welcome}>{this.state.text}</Text>
        
      </View>
    );
  }
  _postData = async () => {
    let formData = new formData();
    formData.append('username','admin');
    formData.append('password','admin')
    this.setState({text:'Clicked'})

    fetch('https://texno.tv/post.php?method=get',{
     method:'Post',
     body:formData 
    }).then((response) => response.json())
      .then((responseJson) => {
      this.setState({text: JSON.stringify(responseJson)})
      })

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
