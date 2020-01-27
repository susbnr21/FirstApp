//L3C11_SUSHIL_BHANDARI_17031188
//RENTAL SHIFTERS APP



import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';

export default class Home extends React.Component {
  render() {
    return (
          <AppNavigator
            style={styles.container}
          />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#455a64',
      marginBottom: 100,
      alignItems: 'center',
      justifyContent: 'center',
  }
});