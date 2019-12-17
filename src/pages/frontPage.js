import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button, Alert, TouchableOpacity} from 'react-native';
import Logo from '../components/logo';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>WELCOME TO</Text>
                    <Logo/>
                <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('So Lets Get Started')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#1c313a',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    titleText: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'Chalkboard SE',
        fontWeight: '500',
        marginTop: 180,
        marginBottom: 20,
        //backgroundColor: '#E3B4B4',
        width: 450,
        textAlign: 'center'
    },

    miniText: {
        color: '#ED0000',
        fontFamily: 'Chalkboard SE',
        fontSize: 15,
        fontWeight: 'bold'
    },

    button: {
        width: 250,
        backgroundColor: '#ED0000',
        marginVertical: 30,
        paddingVertical: 6,
        marginTop: 80,
        marginBottom: 100,
        borderRadius: 35
    },

    buttonText: {
        fontSize: 30,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        color: '#000000',
        fontWeight: '500'
    }
  })