import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { ActionCreators } from '../actions';
import LoginScreen from './LoginScreen';
import UserInfo from './UserInfo';

class AppContainer extends Component {
  componentWillMount() {
    this.props.getAuthenticatedUser();
  }
  render() {
    if (!this.props.user || (this.props.user && !this.props.user.initialiased)) {
      return <View />;
    }
    if (this.props.user && this.props.user.initialiased && !this.props.user.id) {
      return <LoginScreen {...this.props} />;
    }
    return (
      <UserInfo {...this.props} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

AppContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    initialiased: PropTypes.bool,
  }),
  getAuthenticatedUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
