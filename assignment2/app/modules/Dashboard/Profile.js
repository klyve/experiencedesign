import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
   Icon,
   List,
   ListItem
} from 'react-native-elements'


import Block from '../Dashboard/Block'
import Levelbar from '../Dashboard/Levelbar'

const list = [
  {
    name: 'Health',
    avatar_url: 'https://i.stack.imgur.com/Lkn5a.png?s=328&g=1',
    subtitle: 'Level 9'
  },
  {
    name: 'Doe johnson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Level 11'
  },
]

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {date: 12}
  }

  render() {
    return(
      <View style={{flex: 1, paddingTop: 0, top: 0, margin: 0, marginTop: 0}}>
        <ScrollView>
          <List containerStyle={{marginBottom: 20, marginTop: 0}}>
            {
              list.map((item, i) => (
                <ListItem
                  roundAvatar
                  onPress={() => console.log('something')}
                  avatar={{uri:item.avatar_url}}
                  key={i}
                  title={item.name}
                  subtitle={item.subtitle} />
              ))
            }
            </List>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
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

export default Profile
