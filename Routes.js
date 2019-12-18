import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  }
});
export default createAppContainer(Project);q