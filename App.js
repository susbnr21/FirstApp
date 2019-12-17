import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#ffffff', fontSize: 20}}>Hello There!!!</Text>
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


