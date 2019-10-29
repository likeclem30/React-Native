
import React from 'react';
import {StyleSheet, TextInput,Button,StatusBar,AsyncStorage, ActivityIndicator, TouchableOpacity, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator,createAppContainer} from 'react-navigation';

const userinfo = {username:'admin',password:'1234'};

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={username:'',password:''}
  }
  static navigations = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LogIn!</Text>
       
        <TextInput style={styles.Input}
        placeholder='Username' 
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        />
        
        <TextInput style={styles.Input}
        placeholder='Password'
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        
        />
        <TouchableOpacity
        style={styles.btnEnter} onPress={this._signin}>
        <Text
        style={styles.btnEnterText}>Enter</Text>
        </TouchableOpacity>

      </View>
    );
  }
  _signin = async ()=>{
    if(userinfo.username==this.state.username && userinfo.password==this.state.password){
      alert('Logged');
      await AsyncStorage.setItem('logged',true);
      this.props.navigation.navigate('App');
    }else{
      alert('Username or Password Wronged');
    }
  }
}

class HomeScreen extends React.Component {
  render(){
    return(
       <View style={styles.container}>
       <Text style={styles.welcome}>Welcome logged page</Text>

       <Button onPress={this._logout} title="logout"/>
       </View>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

class AuthLoadingScreen extends React.Component{
  constructor(props){
    super(props);
    this._loadData();
  }
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <Statusbar barstyle="default" />
      </View>
    );
  }
  _loadData = async () => {
    const logged = await AsyncStorage.getItem('logged');
    this.props.navigation.navigate(logged !== true ? 'Auth':'App');

  }
}

const AppStack = createStackNavigator({Home:HomeScreen});
const AuthStack = createStackNavigator({Login:LoginScreen});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading:AuthLoadingScreen,
    App:AppStack,
    Auth:AuthStack
  },{
    initialRouteName:'Auth'
  }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Input:{
    margin:1,
    height: 40,
    padding:5,
    fontSize:16,
    borderBottomWidth:1,
    borderBottomColor:'green'
  },
  btnEnter:{
    justifyContent:'center',
    flexDirection: 'row',
    backgroundColor:'#42BAF8', 
    marginLeft: 15,
    marginRight: 15,
    padding:5,
    alignItems: 'center'
  },
  btnEnterText:{
    color:'#ffff',
    fontWeight: '700'
  },
});
