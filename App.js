import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}> Hello World !!! </Text>
        <Text style={styles.subtitle}> Welcome to my App. </Text>
      </View>
    );
  }
}

