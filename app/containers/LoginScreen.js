import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class LoginScreen extends Component {
  login() {
    this.props.authenticateUser();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome {this.props.user ? this.props.user.name : null}
        </Text>
        <TouchableHighlight onPress={() => {this.login() }}>
          <Text style={styles.welcome}>
            Login to GoodReads
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default LoginScreen;
