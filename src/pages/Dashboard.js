import React from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, ImageBackground } 
    from 'react-native';

export default class Dashboard extends React.Component {

    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        header: null,
      }

    render() {
        return (
            <ImageBackground source={require('../images/boxs.jpeg')} style={styles.view}>
                <View style={styles.dview}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../images/Logo.png')}>
                        </Image>
                    </View>

                        <Text style={styles.title}>Hey There, User</Text>
                        <Text style={styles.setitle}>Welcome To Rental Shifters 👏</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            this.props.navigation.navigate('Vehicle')}>
                            <Text style={styles.txtbtn}> Next </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.btx}
                        onPress={() =>
                            this.props.navigation.navigate('Profile')}>
                            <Text style={styles.txtbtx}>LOG OUT</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dview: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 130,
    },

    setitle: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 40,
    },

    logo: {
        width: 128,
        height: 128,
        marginTop: 200
    },

    button: {
        width: 170,
        backgroundColor: '#296AD1',
        marginVertical: 25,
        paddingVertical: 18,
        marginTop: 1,
        borderRadius: 35,
        marginBottom: 100
    },

    txtbtn: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },

    btx: {
        width: 110,
        backgroundColor: '#E10000',
        marginVertical: 25,
        paddingVertical: 10,
        marginTop: 80,
        borderRadius: 10,
        marginBottom: 100
    },

    txtbtx: {
        fontSize: 14,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },
});
