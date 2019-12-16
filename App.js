import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Text> Hello World !!!</Text>
      </View>
    );
  }
}