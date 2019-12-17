import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './src/pages/login';
import Logo from './src/components/logo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor= "#1c31ca"
      barStyle="light-content"
      />
        <Logo/>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


