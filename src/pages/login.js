import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Logo from '../components/logo';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>WELCOME TO</Text>
                    <Logo/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#4a6572',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    titleText: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Chalkboard SE',
        fontWeight: '500'
    }
  })