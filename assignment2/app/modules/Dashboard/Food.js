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



class Food extends Component {

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
              <Text style={styles.title}>Breakfast</Text>
              <Image
                source={require('../../img/burn.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>634</Text>
            </View>
          </Block>
          <Block bottom>
            <View style={styles.blockText}>
              <Text style={styles.title}>Lunch</Text>
              <Image
                source={require('../../img/sleep.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>725</Text>
            </View>
          </Block>
        </View>
        <View style={styles.dashboardContainer} >
          <Block right>
            <View style={styles.blockText}>
              <Text style={styles.title}>Dinner</Text>
              <Image
                source={require('../../img/deepsleep.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>875</Text>
            </View>
          </Block>
          <Block>
            <View style={styles.blockText}>
              <Text style={styles.title}>Snack</Text>
              <Image
                source={require('../../img/laying.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>123</Text>
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

export default Food
