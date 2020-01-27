import React from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, ImageBackground} 
    from 'react-native';

export default class Vehicle extends React.Component {

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

                    <Text style={styles.title}>Select Your Vehicle Size 🚛</Text>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate('')}>
                        <Image style={styles.Struck}
                            source={require('../images/Struck.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate('')}>
                        <Image style={styles.Mtruck}
                            source={require('../images/Mtruck.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate('')}> 
                        <Image style={styles.Ltruck}
                            source={require('../images/Ltruck.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        this.props.navigation.navigate('')}>
                        <Image style={styles.Btruck}
                            source={require('../images/Btruck.png')}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btx}
                        onPress={() =>
                            this.props.navigation.navigate('Worker')}>
                            <Text style={styles.txtbtx}> Next </Text>
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
        height: '100%',
        width: '100%',
    },

    dview: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 35,
        marginBottom: 30
    },

    logo: {
        width: 128,
        height: 128,
        marginTop: 50
    },

    Struck: {
        height: 100,
        width: 350,
        marginBottom: 30,
    },

    Mtruck: {
        height: 90,
        width: 350,
        marginBottom: 30,
    },

    Ltruck: {
        height: 90,
        width: 350,
        marginBottom: 30,
    },

    Btruck: {
        height: 90,
        width: 350,
        marginBottom: 30,
    },
    
    btx: {
        width: 170,
        backgroundColor: '#296AD1',
        marginVertical: 25,
        paddingVertical: 18,
        marginTop: 1,
        borderRadius: 35,
    },

    txtbtx: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },
});