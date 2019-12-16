import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello Everyone This is Anatomy Moves AKA.'AM' and welcome to my first app. </Text>
      </View>
    );
  }
}
