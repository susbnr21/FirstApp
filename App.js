import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Login from './src/pages/frontPage';
import { } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor= "#1c31ca"
      barStyle="light-content"
      />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#DCD1CE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


