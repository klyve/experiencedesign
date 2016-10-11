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
import ProfileDashboard from './app/ProfileDashboard'
import Friends from './app/Friends'
import AddFood from './app/AddFood'
import ActivityDashboard from './app/ActivityDashboard'
import ActivityItem from './app/ActivityItem'


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


const foodlist = {
  'breakfast': [{
    name: 'Breakfast Chicken fillet',
    avatar_url: 'https://greatwebmarketingzine.files.wordpress.com/2014/03/153957315.jpg',
    subtitle: '128 calories'
  }],
  'lunch': [{
    name: 'Lunch Chicken fillet',
    avatar_url: 'https://greatwebmarketingzine.files.wordpress.com/2014/03/153957315.jpg',
    subtitle: '128 calories'
  }],
  'dinner': [{
    name: 'Dinner Chicken fillet',
    avatar_url: 'https://greatwebmarketingzine.files.wordpress.com/2014/03/153957315.jpg',
    subtitle: '128 calories'
  }],
  'snack': [{
    name: 'Snack Chicken fillet',
    avatar_url: 'https://greatwebmarketingzine.files.wordpress.com/2014/03/153957315.jpg',
    subtitle: '128 calories'
  }],
}

let that;
class FitApp extends Component {


  constructor () {
    super()
    this.state = {
      styleTarget: false,
      foodObject: '',
      toggled: false,
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
        return (<AppDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'food':
        return (<FoodDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'sleep':
        return (<SleepDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'profile':
        return (<ProfileDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'activity':
        return (<ActivityDashboard navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'activityitem':
        return (<ActivityItem navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'showfriend':
        return (<ProfileDashboard navigator={navigator} settings={settingsList} inspect={that.state.inspectFriend} app={that} />)
      break;
      case 'friends':
        return (<Friends navigator={navigator} settings={settingsList} app={that} />)
      break;
      case 'addfood':
        return (<AddFood navigator={navigator} settings={settingsList} foods={foodlist} app={that} />)
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
