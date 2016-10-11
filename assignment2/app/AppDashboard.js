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
  ScrollView,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';

import { SideMenu, List, ListItem, Button, Icon } from 'react-native-elements'

import {
  DateSelector,
  Dashboard,
  MenuPage
} from './modules'

console.disableYellowBox = true;







class Header extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.props.children}
      </View>
    );
  }

}



let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


let d = new Date();
class AppDashboard extends Component {


  constructor () {
    super()
    let today = "Today " + d.getDate() + " " + monthNames[d.getMonth()];
    let dstring = d.getDate() + ":" + d.getDay() + ":" + d.getYear();
    this.state = { toggled: false, date: today, currentDate: d, dateString: dstring }
  }

  toggleSideMenu () {
    this.props.app.setState({
      toggled: !this.props.app.state.toggled
    })
  }
  selectPrevDate() {

    this.state.currentDate.setDate(this.state.currentDate.getDate() - 1);
    this.setState({
      date: this.dateToText(),
      dateString: d.getDate() + ":" + d.getDay() + ":" + d.getYear()
    })
  }
  selectNextDate() {
    this.state.currentDate.setDate(this.state.currentDate.getDate() +1);
    this.setState({
      date: this.dateToText(),
      dateString: d.getDate() + ":" + d.getDay() + ":" + d.getYear()
    })
  }

  dateToText() {
    let d = new Date();
    return (d.getDate() == this.state.currentDate.getDate() ? "Today " : "") + this.state.currentDate.getDate() + " " + monthNames[this.state.currentDate.getMonth()]
  }

  navigate(pid) {
    this.props.app.setState({
      toggled: false
    })
    let routes = this.props.navigator.getCurrentRoutes();
    if(pid != routes[routes.length-1].id)
      this.props.navigator.push({
        id: pid
      })
  }
  itemNavigate(item) {
    this.props.app.setState({
      toggled: false
    })
    if(item) {
      this.props.navigator.push({
        id: item
      })
    }
  }

  getDateValue(name) {
    if(!appData[this.state.dateString])
      return 0
    return appData[this.state.dateString][name]
  }

  render () {

    return (
      <ScrollView>
      <MenuPage
        state={this.props.app.state.toggled}
        navigator={this.props.navigator}
        app={this.props.app}
      >

        <Header>
          <Icon
            name='bars'
            type='font-awesome'
            containerStyle={styles.barbtn}
            iconStyle={styles.barbtnicon}
            onPress={() => this.toggleSideMenu() }
          />
          <View
            style={styles.centerContainer}
          >
            <Image
              source={require('./img/center.png')}
              style={styles.center}
            >
              <View style={styles.centerImageTextWrapper}>
                <Text style={styles.centerImageText}>{this.getDateValue('points')}</Text>
                <Text style={styles.centerImageText}>Points</Text>
              </View>
            </Image>
            <DateSelector
              date={this.state.date}
              refs={this}
             />
          </View>

        </Header>
        <Dashboard appData={appData} datestring={this.state.dateString}  itemNavigate={ (i) => this.itemNavigate(i)}/>
      </MenuPage>
      </ScrollView>
    )
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centerContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    height: 175,
    width: 175,
  },
  centerImageTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImageText: {
    fontSize: 25,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    height: 300,
    backgroundColor: '#e74c3c',
    paddingTop: 30,
  },
  barbtnicon: {
    color: 'white',
  },
  barbtn: {
    width: 50,
    paddingLeft: 10,
  },
});




const appData = {

  '11:2:116': {
    points: 1237,
    steps: 8913,
    activity: 87,
    calories: 3291,
    sleep: '8h 15m'
  },
  '10:1:116': {
    points: 2341,
    steps: 12913,
    activity: 187,
    calories: 3891,
    sleep: '12h 5m'
  },
  '9:0:116': {
    points: 1341,
    steps: 4913,
    activity: 17,
    calories: 2291,
    sleep: '4h 32m'
  },
  '8:6:116': {
    points: 1841,
    steps: 18913,
    activity: 287,
    calories: 4291,
    sleep: '7h 5m'
  },
  '7:5:116': {
    points: 1641,
    steps: 9913,
    activity: 87,
    calories: 3891,
    sleep: '8h 51m'
  },
  '6:4:116': {
    points: 3141,
    steps: 8913,
    activity: 127,
    calories: 2711,
    sleep: '9h 12m'
  },
  '5:3:116': {
    points: 741,
    steps: 9124,
    activity: 56,
    calories: 2816,
    sleep: '2h 5m'
  }


}




export default AppDashboard;
