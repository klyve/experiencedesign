
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
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



const list = [
  {
    name: 'Running',
    avatar_url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/21075-200.png',
    duration: '45min (312points)',
  },
  {
    name: 'Walking',
    avatar_url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/19727-200.png',
    duration: '1h (215points)'
  },
  {
    name: 'Kettlebells',
    avatar_url: 'https://d30y9cdsu7xlg0.cloudfront.net/png/37770-200.png',
    duration: '45min (357points)'
  },
]


class ActivityDashboard extends Component {
  constructor(props) {
    super(props)
    this.list = this.props.list || list;
  }
  navigate() {
    this.props.navigator.pop();
  }

  showActivity(item) {
    this.props.app.setState({
      inspectActivity: this.list[item]
    });
    this.props.navigator.push({
      id: 'activityitem'
    })
  }

  addItem(item) {

  }


  render() {
    return (
      <View style={styles.container}>
        <HeaderBack navigator={this.props.navigator} title="ActivityDashboard" addbutton action={this.addItem} />
        <View style={{flex: 1, paddingTop: 0, top: 0, margin: 0, marginTop: 0}}>
          <ScrollView>
        <List containerStyle={{marginBottom: 20, marginTop: 0}}>
          {
            this.list.map((item, i) => (
              <ListItem
                roundAvatar
                onPress={() => this.showActivity(i)}
                avatar={{uri:item.avatar_url}}
                key={i}
                title={item.name}
                subtitle={item.duration} />
            ))
          }
          </List>
          </ScrollView>
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

export default ActivityDashboard
