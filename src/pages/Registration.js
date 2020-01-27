//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP

import React from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, StatusBar,ImageBackground,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } 
    from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Registration extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#fff', borderBottomWidth: 0},
        header: null,
      }

  render() {
    return (
      <View style={styles.regform}>
        <ImageBackground source={require('../images/boxs.jpeg')} style={styles.regform}>
            <StatusBar barStyle='light-content'/>
            <KeyboardAvoidingView behavior='padding'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.regis}>
                        <Image style={styles.logos}
                            source={require('../images/Logo.png')}>
                        </Image>

                        <TextInput style={styles.textinput}
                                    placeholder='Your Name'/>

                        <TextInput style={styles.textinput}
                                    placeholder='Your Email'/>
                        
                        <TextInput style={styles.textinput}
                                    placeholder='Your Password'
                                    secureTextEntry={true}/>

                        <TextInput style={styles.textinput}
                                    placeholder='Confirm Password'
                                    secureTextEntry={true}/>

                        <TouchableOpacity
                            style={styles.regbtncontainer}
                            onPress={() =>
                                this.props.navigation.navigate('')}>
                                <Text style={styles.regbtntxt}>Register</Text>
                        </TouchableOpacity>

                        <Text style={styles.btnacc}>Already Have an Account?</Text>

                        <TouchableOpacity
                        onPress={() => 
                            this.props.navigation.navigate('Profile')}>
                            <Text style={styles.loginbtn}>LOG IN</Text>
                        </TouchableOpacity>
                        
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regis: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  regform: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logos: {
    width: 128,
    height: 128,
    marginBottom: 40,
    marginTop: 200,
  },

  textinput: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    textAlign: 'center',
    color: '#302F35',
    width: 300,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 35
  },

  regbtncontainer: {
    width: 200,
    backgroundColor: '#cc0000',
    marginVertical: 25,
    paddingVertical: 6,
    marginTop: 1,
    borderRadius: 35
  },

  regbtntxt: {
    fontSize: 25,
    fontFamily: 'Chalkboard SE',
    textAlign: 'center',
    fontWeight: '500'
  },

  btnacc: {
    fontFamily: 'Chalkboard SE',
    fontSize: 16,
    marginTop: 90,
  },

  loginbtn: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontFamily: 'Chalkboard SE',
    textAlign: 'center',
    marginBottom: 140,
}
});