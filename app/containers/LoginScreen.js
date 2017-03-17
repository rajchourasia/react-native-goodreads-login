import React, { Component, PropTypes } from 'react';
import Video from 'react-native-video';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const video = require('../../static/broadchurch.mp4');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWrapper: {
    backgroundColor: '#553b08',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

class LoginScreen extends Component {
  login() {
    this.props.authenticateUser();
  }
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={video}
          style={styles.backgroundVideo}
          rate={1} volume={1} muted
          resizeMode="cover" repeat key="video1"
        />
        <TouchableHighlight style={styles.buttonWrapper} onPress={() => { this.login(); }}>
          <Text style={styles.buttonText}>
            Login with GoodReads
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  authenticateUser: PropTypes.func,
};

export default LoginScreen;
