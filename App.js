import React, { Component } from 'react';
import { Text, View, StyleSheet, styles } from 'react-native';

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

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
})