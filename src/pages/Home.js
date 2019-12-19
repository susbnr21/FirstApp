import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Logo from '../components/logo';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                    <View style={styles.secondContainer}>
                        <Text style={styles.titleText}>WELCOME TO</Text>
                            <Logo/>
                        <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                        <Button
                            title="Get Started"
                            style={styles.buttons}
                            style={styles.buttonText}
                            onPress={() =>
                                this.props.navigation.navigate('Profile')
                            }
                            />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
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

    buttons: {
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