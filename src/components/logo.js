import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, Button } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
                <Image style={{width: 190, height: 210}}
                source={require('../images/Logo.png')}/>
        );
    }
}