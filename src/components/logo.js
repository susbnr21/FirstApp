import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <Image style={{width: 120, height: 120}}
            source={require('../images/Logo.png')}/>
        );
    }
}