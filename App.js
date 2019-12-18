import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Routes from "./Routes";
const App = () => <Routes/>

export default App;

class Home extends Component {
    render() {
      return (
        <View style={styles.container}>
        <StatusBar
        backgroundColor= "#1c31ca"
        barStyle="light-content"
        />
          <Login/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#DCD1CE',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
});



