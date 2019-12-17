import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button, Alert, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>WELCOME TO</Text>
                    <Logo/>
                <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                {/* <Button
                title="Get Started"
                onPress={() => Alert.alert('So Lets Get Started')}
                /> */}
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('So Lets Get Started')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
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

    titleText: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Chalkboard SE',
        fontWeight: '500'
    },

    miniText: {
        color: '#B24343',
        fontFamily: 'Chalkboard SE',
        fontSize: 15
    },

    button: {
        width: 250,
        backgroundColor: '#B24343',
        marginVertical: 30,
        paddingVertical: 16,
        borderRadius: 25
    },

    buttonText: {
        fontSize: 35,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        color: '#DCD1CE'
    }
  })