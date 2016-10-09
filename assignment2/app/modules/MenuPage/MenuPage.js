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

import { SideMenu, List, ListItem, Button, Icon } from 'react-native-elements'



const list = [
  {
    name: 'Dashboard',
    route: 'index',
  },
  {
    name: 'Settings',
    route: 'settings'
  },
  {
    name: 'Food',
    route: 'food'
  },
]


class MenuPage extends Component {
  constructor(props) {
    super(props)
  }
  navigate(pid) {
    this.setState({
      toggled: false
    })
    let routes = this.props.navigator.getCurrentRoutes();
    if(pid != routes[routes.length-1].id)
      this.props.navigator.push({
        id: pid
      })
  }
  render() {
    const MenuComponent = (

      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
        {
          list.map((item, i) => (
            <ListItem
              roundAvatar
              onPress={() => this.navigate(item.route)}
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
        toggled={this.props.state}>
        {this.props.children}
      </SideMenu>
    );
  }

}

const styles = StyleSheet.create({
  headerContainer:{}
});


export default MenuPage;