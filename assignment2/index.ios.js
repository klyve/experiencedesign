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
import FoodDashboard from './app/FoodDashboard'
import SleepDashboard from './app/SleepDashboard'
import Friends from './app/Friends'


const settingsList = [
  {
    name: 'Notifications',
    type: 'switch',
    value: true
  },
  {
    name: 'Test Switch',
    type: 'menu',
    value: true,
    submenu: [
      {
        name: 'Switch1',
        type: 'switch',
        value: true
      },
      {
        name: 'Switch2',
        type: 'switch',
        value: true
      }
    ]
  },
  {
    name: 'Cool features',
    type: 'switch',
    value: false
  },
  {
    name: 'Sound',
    type: 'menu',
    value: true,
    submenu: [
      {
        name: 'Notifications',
        type: 'switch',
        value: true
      },
      {
        name: 'Test1',
        type: 'switch',
        value: true
      },
      {
        name: 'Test2',
        type: 'switch',
        value: true
      },
      {
        name: 'Test3',
        type: 'switch',
        value: true
      },
    ]
  },
  {
    name: 'Test1',
    type: 'menu',
    value: true
  },
  {
    name: 'Test2',
    type: 'menu',
    value: true
  },
  {
    name: 'Test3',
    type: 'menu',
    value: true
  },
  {
    name: 'About',
    type: 'menu',
    value: true
  }
]

let that;
class FitApp extends Component {


  constructor () {
    super()
    this.state = {
      styleTarget: false
    }
    that = this;
  }

  setSubSetting(id) {
    this.setState({
      styleTarget: id
    })
  }



  render () {

    return (
      <Navigator
        initialRoute={{
          id: 'sleep'
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
        return (<AppDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'food':
        return (<FoodDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'sleep':
        return (<SleepDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'friends':
        return (<Friends navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'settings':
        return (<Settings navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'subSettings':
        return (<Settings navigator={navigator} settings={settingsList[that.state.styleTarget].submenu} app={that} />)
      break;
    }
  }
}





const styles = StyleSheet.create({});

AppRegistry.registerComponent('assignment2', () => FitApp);
