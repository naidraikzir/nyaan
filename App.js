import React, { Component } from 'react';
import { Container, Content, H1, Root } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation';
import AppFooter from './partials/AppFooter';
import HomePage from './pages/Home';
import CameraPage from './pages/Camera';
import MapPage from './pages/Map';
import ProfilePage from './pages/Profile';

console.ignoredYellowBox = ['Remote debugger'];

export default (MainNavigator = createBottomTabNavigator(
  {
    HomePage,
    CameraPage,
    MapPage,
    ProfilePage,
  },
  {
    initialRouteName: 'HomePage',
    tabBarPosition: 'bottom',
    tabBarComponent: AppFooter,
  },
));
