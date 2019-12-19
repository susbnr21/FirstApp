import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#3d3d5c', borderBottomWidth: 0}
      }

  render() {
    return (
    <View style={styles.design}>
        <StatusBar barStyle='light-content'/>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../images/Logo.png')}>
                        </Image>
                        <Text style={styles.title}>Account Information</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <TextInput style={styles.input}
                            placeholder='Username or email'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorrect={false}
                            onSubmitEditing={() => this.refs.txtPassword.focus()}
                            />
                        <TextInput style={styles.input}
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            keyboardType='go'
                            secureTextEntry
                            autoCorrect={false}
                            ref={'txtPassword'}
                            />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() =>
                            this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>LOG IN </Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d5c',
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
        color: '#FFF',
        width: 250,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 35
    },

    buttonContainer: {
        width: 200,
        backgroundColor: '#cc0000',
        marginVertical: 50,
        paddingVertical: 1,
        marginTop: 80,
        borderRadius: 25
    },

    buttonText: {
        fontSize: 30,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        color: '#000000',
        fontWeight: '500'
    },

    design: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    }
});