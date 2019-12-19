import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        headerStyle: {borderBottomWidth: 0}
      }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo}
                source={require('../images/Logo.png')}>
            </Image>
            <Text style={styles.title}>Account Information</Text>
        </View>
        <Button
          title="LOG IN"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});