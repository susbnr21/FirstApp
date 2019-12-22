//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Logo from '../components/logo';

export default class Home extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0}
      }
    
    render() {
        return (
            <View style={styles.secondContainer}>
                <StatusBar barStyle='light-content'/>
                    <Text style={styles.titleText}>WELCOME TO</Text>
                        <Logo/>
                    <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() =>
                        this.props.navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    secondContainer : {
      backgroundColor: '#8B8C8C',
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
        width: 450,
        textAlign: 'center'
    },

    miniText: {
        color: '#cc0000',
        fontFamily: 'Chalkboard SE',
        fontSize: 15,
        fontWeight: 'bold'
    },

    button: {
        width: 250,
        backgroundColor: '#cc0000',
        marginVertical: 30,
        paddingVertical: 6,
        marginTop: 80,
        marginBottom: 200,
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