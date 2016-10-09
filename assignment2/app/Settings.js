
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ListView,
  Switch
} from 'react-native';

import { Icon, List, ListItem } from 'react-native-elements'

import {
  HeaderBack,
  OptionsItem
} from './modules'




class Settings extends Component {
  constructor(props) {
    super(props)
    this.list = this.props.settings || [];
  }
  navigate() {
    this.props.navigator.pop();
  }



  renderRow (rowData, sectionID) {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderBack navigator={this.props.navigator} />
        <View style={{flex: 1, paddingTop: 0, top: 0, margin: 0, marginTop: 0}}>
          <List containerStyle={{marginBottom: 20, marginTop: 0}}>
          {
            this.list.map((item, i) => (
              <ListItem
                component={() => (
                  <OptionsItem app={this.props.app} name={item.name} type={item.type} value={item.value} navigator={this.props.navigator} id={i} />
                )}
              />
            ))
          }
          </List>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 70,
    backgroundColor: '#e74c3c',
    paddingTop: 30,
    flexWrap: 'wrap',
    flexDirection:'row',
    alignItems:'center',
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingTop: 5,
    alignItems:'center',
  },
  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  textContainer: {
    flex: 0.4,
    flexWrap: 'wrap',
    flexDirection:'row',
    paddingLeft: 10,
  },
  chevronleft: {
  },
  backText: {
    fontSize: 15,
    color: 'white',
    paddingLeft: 10,
    paddingTop: 10,
  },
  barbtnicon: {
    color: 'white',
  },
  barbtn: {
    width: 50,
    paddingLeft: 10,
  },
});

export default Settings
