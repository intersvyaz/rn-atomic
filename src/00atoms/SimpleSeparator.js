import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {SeparatorStyles} from '../styles/Base';

export default class SimpleSeparator extends React.Component {
  static propTypes = {
    separatorStyle: PropTypes.object,
    renderLeftIcon: PropTypes.func,
		largeLeftIcon: PropTypes.bool
  };

  static defaultProps = {
    largeLeftIcon: false
  };

  getSeparatorStyle() {
    let style = {};
    if (this.props.separatorStyle){
      style = this.props.separatorStyle;
    } else {
      if (this.props.renderLeftIcon || this.props.largeLeftIcon){
        style = this.props.largeLeftIcon? SeparatorStyles.largeLeftIconPadding : SeparatorStyles.leftIconPadding;
      }
    }
    return style;
  }

  render() {
    let style = this.getSeparatorStyle();
    return (
      <View style={[SeparatorStyles.base, style]}/>
    );
  }
}