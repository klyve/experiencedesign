/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

console.disableYellowBox = true;

import AppDashboard from './app/AppDashboard';
import Settings from './app/Settings'

class FitApp extends Component {


  constructor () {
    super()
  }



  render () {

    return (
      <Navigator
        initialRoute={{
          id: 'index'
        }}
        renderScene={
          this.renderScene
        }
      />
    )
  }

  renderScene(route, navigator) {
    _navigator = navigator
    switch(route.id) {
      case 'index':
        return (<AppDashboard navigator={navigator} />)
      break;
      case 'settings':
        return (<Settings navigator={navigator} />)
      break;
    }
  }
}





const styles = StyleSheet.create({});

AppRegistry.registerComponent('assignment2', () => FitApp);
