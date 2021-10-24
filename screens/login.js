import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen'

export default class Login extends React.Component {
  constructor() {
    super(); 
    this.state = { 
      input: '',
      password:'8-I',
    }; 
  } 

  login=()=>{
    var passWord=this.state.password;
    passWord === this.state.input
       ?  this.props.navigation.navigate('HomeScreen')
       : alert('Wrong Passcode')
  };
  

  render() {
    return (<SafeAreaProvider>
      <View style = {styles.container}>
  
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2016/09/16/829986_school_512x512.png',
          }}
        />
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ input: text });
            }}
            value={this.state.input}
            defaultValue = {"vibhu"}
            placeholder = "Type your passcode here"
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.login();
        }}>
          <Text style = {styles.displayText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#2E5866'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});
