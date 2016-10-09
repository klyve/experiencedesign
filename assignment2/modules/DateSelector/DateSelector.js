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


class DateSelector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.dateContainer} >
        <Icon
          name='chevron-left'
          type='font-awesome'
          containerStyle={styles.chevronleft}
          iconStyle={styles.barbtnicon}
          onPress={() => this.props.refs.selectPrevDate() }
        />
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>
            {this.props.date}
          </Text>
        </View>
        <Icon
          name='chevron-right'
          type='font-awesome'
          containerStyle={styles.chevronright}
          iconStyle={styles.barbtnicon}
          onPress={() => this.props.refs.selectNextDate() }
        />

      </View>
    );
  }

}


const styles = StyleSheet.create({
  dateContainer: {
    flex: 0.2,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  barbtnicon: {
    color: 'white',
  },
  dateTextContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
    color: 'white'
  },
  chevronleft: {
    flex: 0.2,
  },
  chevronright: {
    flex: 0.2,
  },
});

export default DateSelector
