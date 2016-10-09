
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



class OptionsItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      type: this.props.type,
      switchState: this.props.value || false
    }
  }

  createSwitch() {
    return(<View>
            <Text style={styles.itemText}>{this.state.name}</Text>
            <Switch
              onValueChange={(value) => this.setState({switchState: value})}
              style={[styles.leftItem, styles.switch]}
              onTintColor='#e74c3c'
              value={this.state.switchState} />
          </View>
            )
  }
  gotoSetting() {
    this.props.app.setSubSetting(this.props.id);
    this.props.navigator.push({
      id: 'subSettings'
    })
  }
  createMenu() {
    return(<TouchableHighlight
            onPress={() => this.gotoSetting()}
            style={styles.touchable}
            >
            <View >
              <Text style={styles.itemText}>{this.state.name}</Text>
              <Icon
                name='chevron-right'
                type='font-awesome'
                containerStyle={[styles.leftItem, styles.chevron]}
                iconStyle={styles.barbtnicon}
              />
            </View>
          </TouchableHighlight>)
  }
  SettingsType() {
    if(this.state.type == 'switch')
      return this.createSwitch();

    if(this.state.type == 'menu')
      return this.createMenu()
  }

  render() {
    return (
      <View style={styles.OptionsList}>
        {this.SettingsType()}
      </View>
    )
  }
}


const styles = StyleSheet.create({

  OptionsList: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
  },
  touchable: {
    flex: 1,
  },
  itemText: {
    paddingTop: 15,
    paddingLeft: 10,
  },
  chevron: {
    paddingTop: 15,
  },
  leftItem: {
    position: 'absolute',
    right: 10,
    top: 0,
    alignItems:'center',
  },
  switch: {
    top: 10,
  },
  barbtnicon: {
    color: '#bdc6cf',
  },
  barbtn: {
    width: 50,
    paddingLeft: 10,
  },

})


export default OptionsItem;
