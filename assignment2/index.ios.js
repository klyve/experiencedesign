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
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';

import { SideMenu, List, ListItem, Button, SocialIcon, Icon } from 'react-native-elements'

import {
  DateSelector,
  Dashboard
} from './modules'






class App extends Component {



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Data goes here
        </Text>
      </View>
    );
  }

}
class Header extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.props.children}
      </View>
    );
  }

}


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]


let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


class assignment2 extends Component {


  constructor () {
    super()
    let d = new Date();
    let today = "Today " + d.getDate() + " " + monthNames[d.getMonth()];
    this.state = { toggled: false, date: today, currentDate: d }
  }

  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
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

  render () {
    // SideMenu takes a React Native element as a prop for the actual Side Menu
    const MenuComponent = (

      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((item, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('something')}
              key={i}
              title={item.name}
              subtitle={item.subtitle} />
          ))
        }
        </List>
      </View>
    )

    return (
      <SideMenu
        MenuComponent={MenuComponent}
        toggled={this.state.toggled}>

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
                <Text style={styles.centerImageText}>1257</Text>
                <Text style={styles.centerImageText}>Points</Text>
              </View>
            </Image>
            <DateSelector
              date={this.state.date}
              refs={this}
             />
          </View>

        </Header>
        <Dashboard />
      </SideMenu>
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

AppRegistry.registerComponent('assignment2', () => assignment2);
