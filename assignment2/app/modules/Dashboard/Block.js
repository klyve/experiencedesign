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


class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let def = [styles.dashboardBlockContainer]
    if(this.props.right)
      def.push(styles.borderRight)

    if(this.props.bottom)
      def.push(styles.borderBottom)
      
    return(
      <View style={def}>
        {this.props.children}
      </View>
    );
  }

}


const styles = StyleSheet.create({
  dashboardBlockContainer: {
    flex: 1,
    height: 183,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#333',
  },
  borderRight: {
    borderRightWidth: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
});

export default Block
