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



class Profile extends Component {

  constructor(props) {
    super(props);
    this.level = props.profile.level || 1;

    this.state = {
      health: {
        name: 'Health',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        value: 'Level 1'
      },
      cool: {
        name: 'Cool',
        avatar_url: 'https://i.stack.imgur.com/Lkn5a.png?s=328&g=1',
        value: 'Level 1'
      }
    };

  }

  render() {
    console.log(this.state)
    for(var o in this.props.profile.data) {
      if(!this.state[o])
        continue;

      this.state[o].value = this.props.profile.data[o].value || 1;

    }
    return(
      <View style={{flex: 1, paddingTop: 0, top: 0, margin: 0, marginTop: 0}}>
        <ScrollView>
          <List containerStyle={{marginBottom: 20, marginTop: 0}}>
            {
              Object.keys(this.state).map((item, i) => (
                <ListItem
                  roundAvatar
                  onPress={() => console.log('something')}
                  avatar={{uri:item.avatar_url}}
                  key={i}
                  title={this.state[item].name}
                  subtitle={this.state[item].value} />
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
