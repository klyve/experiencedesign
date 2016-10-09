import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import {
   Icon
} from 'react-native-elements'


class Levelbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let p = [styles.progress, {
      flex: (this.props.progress / 100)
    }];
    let spacer = {flex: 1 - (this.props.progress / 100)};
    return(
      <View style={styles.progressbar}>
        <View style={styles.row}>
          <View style={p}></View>
          <View style={spacer}></View>
        </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  progressbar: {
    height: 5,
    backgroundColor: '#eeeeee',
    alignSelf: "stretch"
  },
  row: {
    flexDirection: 'row',
  },
  progress: {
    flex: 0.8,
    height: 5,
    backgroundColor: '#e74c3c',
  }

});

export default Levelbar
