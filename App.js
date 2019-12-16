import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render () {
    return (
      <View style={{alignItems='center'}}>
        <Text>Hello {this.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreeting extends Component {
  render () {
    return (
      <View style={{alignItems='center'}}>
          <Greeting name = 'Sushil'/>
          <Greeting name = 'Sulav'/>
          <Greeting name = 'Summit'/>
          <Greeting name = 'Ashutosh'/>
          <Greeting name = 'Unish'/>
          <Greeting name = 'Prashansa'/>
          <Greeting name = 'Rijan'/>
      </View>
    );
  }
}