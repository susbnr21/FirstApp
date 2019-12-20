import React from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, StatusBar, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } 
    from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Registration extends React.Component {
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0}
      }

  render() {
    return (
        <View style={styles.regform}>
            <StatusBar barStyle='light-content'/>
            <KeyboardAvoidingView behavior='padding'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.regform}>
                        <Image style={styles.logos}
                            source={require('../images/Logo.png')}>
                        </Image>

                        <Text style={styles.header}>Registration</Text>

                        <TextInput style={styles.textinput}
                                    placeholder='Your Name'/>

                        <TextInput style={styles.textinput}
                                    placeholder='Your Email'/>
                        
                        <TextInput style={styles.textinput}
                                    placeholder='Your Password'
                                    secureTextEntry={true}/>

                        <TouchableOpacity
                            style={styles.regbtncontainer}
                            onPress={() =>
                                this.props.navigation.navigate('')}>
                                <Text style={styles.regbtntxt}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#8B8C8C',
    alignItems: 'center'
  },

  logos: {
    width: 128,
    height: 128,
  },

  header: {
      fontSize: 50,
      color: '#cc0000',
      paddingBottom: 10,
      marginBottom: 40,
      textDecorationLine: 'underline',
      fontFamily: 'Chalkboard SE'
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
  }
});