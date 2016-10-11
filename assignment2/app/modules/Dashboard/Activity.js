import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import {
   Icon
} from 'react-native-elements'


import Block from '../Dashboard/Block'
import Levelbar from '../Dashboard/Levelbar'



class Activity extends Component {

  constructor(props) {
    super(props);
    this.state = {date: 12}
  }

  action(type) {
    this.props.itemNavigate(type)
  }

  render() {
    return(
      <View>
        <View style={styles.dashboardContainer} >

        <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('') }>
          <View>
          <Block right bottom>
            <View style={styles.blockText}>
              <Text style={styles.title}>Avg. Hr</Text>
              <Image
                source={require('../../img/hr2.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>128</Text>
            </View>
          </Block>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('activity') }>
        <View>
          <Block bottom>
            <View style={styles.blockText}>
              <Text style={styles.title}>Max Hr</Text>
              <Image
                source={require('../../img/hr1.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>179</Text>
            </View>
          </Block>
        </View>
      </TouchableHighlight>

        </View>
        <View style={styles.dashboardContainer} >

      <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('food') }>
        <View>
          <Block right>
            <View style={styles.blockText}>
              <Text style={styles.title}>Calories</Text>
              <Image
                source={require('../../img/burn.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>394</Text>
            </View>
          </Block>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('sleep') }>
        <View>
          <Block>
            <View style={styles.blockText}>
              <Text style={styles.title}>Distance</Text>
              <Image
                source={require('../../img/distance.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>6.8km</Text>
            </View>
          </Block>
        </View>
      </TouchableHighlight>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  blockText: {
    flex: 0.9,
    textAlign: 'center',
    paddingTop: 10,
  },
  title: {
  textAlign: 'center',
    fontSize: 25,
  },
  footer: {
  textAlign: 'center',
    fontSize: 35,
  },
  center: {
    width: 110,
    height: 90
  },
  dashboardContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  touchstyle: {
    flex: 1,
  },
});

export default Activity
