import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';



class Test extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.dateContainer} >
        <Text>This is the view of test</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
});

export default Test
