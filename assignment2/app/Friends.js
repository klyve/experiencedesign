
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
    name: 'John doe',
    avatar_url: 'https://i.stack.imgur.com/Lkn5a.png?s=328&g=1',
    level: 15,
    data: {
      'health': {
        'value': 15
      },
      'walking': {
        'value': 14
      },
      'jogging': {
        'value': 19
      },
      'food': {
        'value': 15
      }
    }
  },
  {
    name: 'Joe doeson',
    avatar_url: 'https://i.stack.imgur.com/Lkn5a.png?s=328&g=1',
    level: 25,
    data: {
      'health': {
        'value': 35
      },
      'walking': {
        'value': 54
      },
      'jogging': {
        'value': 12
      },
      'food': {
        'value': 45
      }
    }
  },
  {
    name: 'Peter pan',
    avatar_url: 'https://i.stack.imgur.com/Lkn5a.png?s=328&g=1',
    level: 9,
    data: {
      'health': {
        'value': 14
      },
      'walking': {
        'value': 14
      },
      'jogging': {
        'value': 1
      },
      'food': {
        'value': 21
      }
    }
  },
]


class Friends extends Component {
  constructor(props) {
    super(props)
    this.list = this.props.list || list;
  }
  navigate() {
    this.props.navigator.pop();
  }

  showFriend(item) {
    this.props.app.setState({
      inspectFriend: this.list[item]
    });
    this.props.navigator.push({
      id: 'showfriend'
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <HeaderBack navigator={this.props.navigator} title="Friends" />
        <View style={{flex: 1, paddingTop: 0, top: 0, margin: 0, marginTop: 0}}>
          <ScrollView>
        <List containerStyle={{marginBottom: 20, marginTop: 0}}>
          {
            this.list.map((item, i) => (
              <ListItem
                roundAvatar
                onPress={() => this.showFriend(i)}
                avatar={{uri:item.avatar_url}}
                key={i}
                title={item.name}
                subtitle={item.level} />
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

export default Friends
