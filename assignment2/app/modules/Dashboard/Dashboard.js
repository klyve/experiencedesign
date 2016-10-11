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



class Dashboard extends Component {

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
              <Text style={styles.title}>Steps</Text>
              <Image
                source={require('../../img/steps.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>2000</Text>
            </View>
            <Levelbar
              progress={50}
            />
          </Block>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('activity') }>
        <View>
          <Block bottom>
            <View style={styles.blockText}>
              <Text style={styles.title}>Activity</Text>
              <Image
                source={require('../../img/activity.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>20</Text>
            </View>
            <Levelbar
              progress={30}
            />
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
              <Text style={styles.footer}>1524</Text>
            </View>
            <Levelbar
              progress={80}
            />
          </Block>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.touchstyle} onPress={ () => this.action('sleep') }>
        <View>
          <Block>
            <View style={styles.blockText}>
              <Text style={styles.title}>Sleep</Text>
              <Image
                source={require('../../img/sleep.png')}
                style={styles.center}
              />
              <Text style={styles.footer}>8hr</Text>
            </View>
            <Levelbar
              progress={90}
            />
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

export default Dashboard
