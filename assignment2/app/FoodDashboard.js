import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  Image,
  TouchableOpacity
} from 'react-native';

import { SideMenu, List, ListItem, Button, Icon } from 'react-native-elements'

import {
  DateSelector,
  Food,
  MenuPage
} from './modules'








class Header extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.props.children}
      </View>
    );
  }

}

let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


class FoodDashboard extends Component {
  constructor () {
    super()
    let d = new Date();
    let today = "Today " + d.getDate() + " " + monthNames[d.getMonth()];
    this.state = { toggled: false, date: today, currentDate: d }
  }

  toggleSideMenu () {
    this.setState({
      toggled: !this.state.toggled
    })
  }
  selectPrevDate() {

    this.state.currentDate.setDate(this.state.currentDate.getDate() - 1);
    this.setState({
      date: this.dateToText()
    })
  }
  selectNextDate() {
    this.state.currentDate.setDate(this.state.currentDate.getDate() +1);
    this.setState({
      date: this.dateToText()
    })
  }

  dateToText() {
    let d = new Date();
    return (d.getDate() == this.state.currentDate.getDate() ? "Today " : "") + this.state.currentDate.getDate() + " " + monthNames[this.state.currentDate.getMonth()]
  }



  render() {
    return (
      <MenuPage
        state={this.state.toggled}
        navigator={this.props.navigator}
      >

        <Header>
          <Icon
            name='bars'
            type='font-awesome'
            containerStyle={styles.barbtn}
            iconStyle={styles.barbtnicon}
            onPress={() => this.toggleSideMenu() }
          />
          <View
            style={styles.centerContainer}
          >

            <Image
              source={require('./img/imgfood.png')}
              style={styles.centerimg}
            >
              <View style={styles.centerImageTextWrapper}>
                <Text style={styles.centerImageText}>1987</Text>
                <Text style={styles.centerImageText}>Calories</Text>
              </View>
            </Image>

            <View style={styles.trebar}>
              <View style={styles.trebarcontainer}>
                <Text style={styles.trebarTitle}>Carbs</Text>
                <Text style={styles.trebarValue}>12</Text>
              </View>

              <View style={styles.trebarcontainer}>
                <Text style={styles.trebarTitle}>Protein</Text>
                <Text style={styles.trebarValue}>13</Text>
              </View>

              <View style={styles.trebarcontainer}>
                <Text style={styles.trebarTitle}>Fat</Text>
                <Text style={styles.trebarValue}>14</Text>
              </View>
            </View>
          </View>

        </Header>
        <ScrollView style={styles.contentContainer}>
          <Food />
        </ScrollView>
      </MenuPage>
    );
  }

}



const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerimg: {
    height: 175,
    width: 175,
  },

  trebar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    marginTop: 10
  },
  trebarcontainer: {
    flex: 0.333333333,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trebarTitle: {
    fontSize: 18,
    color: 'white'
  },
  trebarValue: {
    fontSize: 15,
    color: 'white'
  },

  centerImageTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImageText: {
    fontSize: 25,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header_image: {
    alignSelf: 'stretch',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    height: 300,
  },
  centerContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    height: 105,
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },
  centerImageTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImageText: {
    fontSize: 25,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    height: 300,
    backgroundColor: '#2ECC71',
    paddingTop: 30,
  },
  barbtnicon: {
    color: 'white',
  },
  barbtn: {
    width: 50,
    paddingLeft: 10,
  },

  textwrapper: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection:'row',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  alignleft: {
    flex: 0.5,
    color: 'white',
    fontSize: 20,
  },
  alignright: {
    flex: 0.5,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  alignrightText: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  sleepnum: {
    marginTop:10,
    color: 'white',
    fontSize: 25,
  }

});




export default FoodDashboard;
