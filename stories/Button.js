import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { TouchableHighlight } from 'react-native';

// export default function Button(props) {
//   return <TouchableHighlight onPress={props.onPress}>{props.children}</TouchableHighlight>;
// }

export default class Button extends Component {
  render() {
    const { props } = this;
    return (
      <button onPress={props.onPress}>{props.children}</button>
    );
  }
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};