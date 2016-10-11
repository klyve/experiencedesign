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
  Profile,
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


class ProfileDashboard extends Component {


  constructor (props) {
    super(props)
    let d = new Date();
    let today = "Today " + d.getDate() + " " + monthNames[d.getMonth()];
    this.state = { toggled: false, date: today, currentDate: d }
  }

  toggleSideMenu () {
    this.props.app.setState({
      toggled: !this.props.app.state.toggled
    })
  }
  selectPrevDate() {

    this.state.currentDate.setDate(this.state.currentDate.getDate() - 1);
    this.setState({
      date: this.dateToText()
    })
  }
  selectNextDate() {
    this.state.currentDate.setDate(this.state.currentDate.getDate() +1);
    this.setState({
      date: this.dateToText()
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

  render () {

    return (
      <View>
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
                <Text style={styles.centerImageText}>17</Text>
                <Text style={styles.centerImageText}>level</Text>
              </View>
            </Image>
          </View>

        </Header>
        <View style={styles.contentContainer}>
          <Profile />
        </View>
      </MenuPage>
      </View>
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
  contentContainer: {
    flex: 1,
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




export default ProfileDashboard;
