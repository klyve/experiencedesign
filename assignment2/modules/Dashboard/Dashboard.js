import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
   Icon
} from 'react-native-elements'


import Block from '../Dashboard/Block'
import Levelbar from '../Dashboard/Levelbar'



class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {date: 12}
  }

  render() {
    return(
      <View>
        <View style={styles.dashboardContainer} >
          <Block right bottom>
            <View style={styles.blockText}>
              <Image
                source={require('../../img/steps.png')}
                style={styles.center}
              >
            </View>
            <Levelbar
              progress={50}
            />
          </Block>
          <Block bottom>
            <View style={styles.blockText}>
              <Image
                source={require('../../img/activity.png')}
                style={styles.center}
              >
            </View>
            <Levelbar
              progress={30}
            />
          </Block>
        </View>
        <View style={styles.dashboardContainer} >
          <Block right>
            <View style={styles.blockText}>
              <Image
                source={require('../../img/burn.png')}
                style={styles.center}
              >
            </View>
            <Levelbar
              progress={80}
            />
          </Block>
          <Block>
            <View style={styles.blockText}>
              <Image
                source={require('../../img/sleep.png')}
                style={styles.center}
              >
            </View>
            <Levelbar
              progress={90}
            />
          </Block>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  blockText: {
    flex: 0.9
  },
  dashboardContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    flexWrap:'wrap'
  }
});

export default Dashboard
