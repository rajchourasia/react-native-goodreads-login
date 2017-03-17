import React, { PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#F5FCFF',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
    alignSelf: 'center',
  },
});

const UserInfo = (props) => {
  const imageUri = props.user.image
  && props.user.image.default ? props.user.image.default : '';
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>
        Welcome {props.user ? props.user.name : null}
      </Text>
      <TouchableHighlight onPress={props.signOut}>
        <Text>Sign out</Text>
      </TouchableHighlight>
    </View>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.shape({
      default: PropTypes.string,
    }),
  }),
  signOut: PropTypes.func,
};

export default UserInfo;
