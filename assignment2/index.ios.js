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

import { SideMenu, List, ListItem, Button, SocialIcon } from 'react-native-elements'







class App extends Component {



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+D for dev menu
        </Text>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />

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


class assignment2 extends Component {


  constructor () {
    super()
    this.state = { toggled: false }
  }

  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
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
              avatar={{uri:item.avatar_url}}
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
        <App />
      </SideMenu>
    )
  }
}



// class assignment2 extends Component {
//   constructor () {
//     super()
//     this.state = { toggled: false }
//   }
//
//   toggleSideMenu () {
//     this.setState({
//       toggled: !this.state.toggled
//     })
//   }
//
//   render () {
//     // SideMenu takes a React Native element as a prop for the actual Side Menu
//     const MenuComponent = (
//       <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
//         <List containerStyle={{marginBottom: 20}}>
//         {
//           list.map((item, i) => (
//             <ListItem
//               roundAvatar
//               onPress={() => console.log('something')}
//               avatar={{uri:item.avatar_url}}
//               key={i}
//               title={item.name}
//               subtitle={item.subtitle} />
//           ))
//         }
//         </List>
//       </View>
//     )
//     return (
//       <SideMenu
//         MenuComponent={MenuComponent}
//         toggled={this.state.toggled}>
//         <App />
//       </SideMenu>
//     )
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('assignment2', () => assignment2);
