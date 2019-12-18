import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';


const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  },
  initialRouteName: 'Home',
});

export default createAppContainer(Project);