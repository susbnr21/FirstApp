import React, { Component } from 'react';
import { Text, View, StyleSheet,
        StatusBar, TextInput, 
        TouchableOpacity} from 'react-native';

class Profile extends Component {
        static navigationOption = {
            title: 'Profile'
        }
    render() {
        return(
            <OuterArea style={styles.design}>
                <StatusBar barStyle='light-content'/>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View>
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
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>LOG IN </Text>
                                </TouchableOpacity>
                            </View>
                        </View>  
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </OuterArea>
        );    
    }
}

export default Profile;

const styles = StyleSheet.create({
    design: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
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

    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },

    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        //backgroundColor: 'red'
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },

    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },

    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontWeight: '100'
    }
})

