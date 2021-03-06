//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import React from 'react';
import { StyleSheet, Text, View,
     Image, TextInput, StatusBar, ImageBackground,
     KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } 
     from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Profile extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        header: null,
      }

  render() {
    return (
    <ImageBackground source={require('../images/boxs.jpeg')} style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <KeyboardAvoidingView behavior='padding'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../images/Logo.png')}>
                        </Image>
                        <Text style={styles.title}>Account Information</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <TextInput style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={() => this.refs.txtPassword.focus()}
                            />
                        <TextInput style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            secureTextEntry
                            autoCorrect={false}
                            ref={'txtPassword'}
                            />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() =>
                            this.props.navigation.navigate('Dashboard')}>
                        <Text style={styles.buttonText}>LOG IN </Text>
                    </TouchableOpacity>

                        <Text style={styles.txt}>New to Rental Shifters?</Text>

                    <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Registration')}>
                        <Text style={styles.buttontxt}>Register Now</Text>
                    </TouchableOpacity>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#cc0000',
    fontSize: 20,
    fontFamily: 'Chalkboard SE',
    marginBottom: 40
  },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    logo: {
        width: 128,
        height: 128,
    },

    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
        color: '#302F35',
        width: 300,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 35
    },

    buttonContainer: {
        width: 200,
        backgroundColor: '#cc0000',
        marginVertical: 25,
        paddingVertical: 6,
        marginTop: 1,
        borderRadius: 35,
        marginBottom: 100
    },

    buttonText: {
        fontSize: 25,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        color: '#000000',
        fontWeight: '500'
    },

    design: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },

    txt:{
        fontFamily: 'Chalkboard SE',
        fontSize: 16
    },

    buttontxt: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        marginBottom: 30,
    }
});