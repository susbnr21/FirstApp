import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, Title} from 'react-native';
import Logo from '../components/logo';

class Home extends Component {
        static navigationOptions = {
            title: 'Home'
        };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <StatusBar
                    backgroundColor= "#1c31ca"
                    barStyle="light-content"
                    />
                        <Login/>
                    <Text style={styles.titleText}>WELCOME TO</Text>
                        <Logo/>
                    <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                    <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                        <Title style={styles.buttonText}>Get Started</Title>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#DCD1CE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    secondContainer : {
      backgroundColor: '#3d3d5c',
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