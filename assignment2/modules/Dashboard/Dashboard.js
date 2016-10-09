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


class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.dashboardContainer} >

        <Text> Hello this is the dashboard </Text>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  dashboardContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Dashboard
