import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../styles/Base';

export default class Chevrone extends React.Component {
  static propTypes = {
    chevroneColor: PropTypes.string,
    chevroneSize: PropTypes.number
  }

  static defaultProps = {
    chevroneColor: COLORS.MAIN_GRAY,
    chevroneSize: 24
  }

  render() {
    return (
      <View style={{ paddingLeft: 16 }}>
        <Icon name={"chevron-right"} color={this.props.chevroneColor} size={this.props.chevroneSize} />
      </View>
    );
  }
}