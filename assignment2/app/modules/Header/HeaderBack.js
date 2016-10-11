
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-elements'

class Header extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.props.children}
      </View>
    );
  }

}


class HeaderBack extends Component {
  constructor(props) {
    super(props)
  }
  navigate() {
    this.props.navigator.pop();
  }
  render() {


    return (
      <View>
        <Header style={styles.headerContainer}>

          <View style={styles.title}>
            <Text style={styles.titleText}>{this.props.title}</Text>
          </View>
          {
            (() => {
              if(this.props.addbutton) {

                return (
                  <TouchableHighlight style={styles.addItemContainer} onPress={ () => this.props.action() }>
                    <Text style={styles.addItem}>Add</Text>
                  </TouchableHighlight>
                )

              }
            })()
          }
          <TouchableHighlight onPress={() => this.navigate() }>
            <View style={styles.textContainer}>
              <Icon
                name='chevron-left'
                type='font-awesome'
                containerStyle={styles.chevronleft}
                iconStyle={styles.barbtnicon}
              />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableHighlight>



        </Header>
      </View>
    );
  }

}
const styles = StyleSheet.create({
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
  addItemContainer: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  addItem: {
    paddingTop: 40,
    fontSize: 15,
    color: 'white',
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


export default HeaderBack;
