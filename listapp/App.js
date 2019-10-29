
import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,ActivityIndicator,FlatList, Text, View} from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoading:false,
      dataSource: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({
        isLoading:false,
        dataSource:responseJson
      })
    })
  }
  _renderItem = ({item}) =>( 
    <TouchableOpacity onPress={() => alert(item.body)}>
    <View style={styles.welcome}>
  <Text>{item.title}</Text>
  </View>
  </TouchableOpacity>
  );
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
       <ActivityIndicator size="large" animating />
        </View>
      )
    }else{

    return (
      <View style={styles.container}>
        <FlatList
  data={this.state.dataSource}
  renderItem={this._renderItem}
      keyExtractor = {(item,index) => index} 

      />  
      </View>
    );
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  item:{
    borderBottomWidth:1,
    padding: 5,
    borderBottomColor: '#eee'
  }
});
