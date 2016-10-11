import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {
   Icon
} from 'react-native-elements'


import Block from '../Dashboard/Block'
import Levelbar from '../Dashboard/Levelbar'



class Sleep extends Component {

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
              <Text style={styles.title}>Times awake</Text>
              <Image
                source={require('../../img/awake.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>3</Text>
            </View>
          </Block>
          <Block bottom>
            <View style={styles.blockText}>
              <Text style={styles.title}>Light sleep</Text>
              <Image
                source={require('../../img/sleep.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>1h 20m</Text>
            </View>
          </Block>
        </View>
        <View style={styles.dashboardContainer} >
          <Block right>
            <View style={styles.blockText}>
              <Text style={styles.title}>Deep sleep</Text>
              <Image
                source={require('../../img/deepsleep.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>6h 13m</Text>
            </View>
          </Block>
          <Block>
            <View style={styles.blockText}>
              <Text style={styles.title}>Time in bed</Text>
              <Image
                source={require('../../img/laying.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>8hr</Text>
            </View>
          </Block>
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
    alignSelf: 'stretch',
    width: 100,
    height: 90,
    backgroundColor: 'white'
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

export default Sleep
