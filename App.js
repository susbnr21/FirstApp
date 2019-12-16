import React, { Component } from 'react';
import Splash from './app/splash';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{flex: 0.75, alignItems: "center", justifyContent: "center"}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreeting extends Component {
  render() {
    return (
      <Splash/>
    );
  }
}