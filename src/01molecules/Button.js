import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import SimpleText from '../00atoms/SimpleText';
import {ButtonStyles, ButtonTextStyles} from '../styles/Base';

export const BUTTON_TYPES = {
  BLUE: 'blue',
  ORANGE: 'orange',
  WHITE: 'white',
  TEXT: 'text'
}

const BUTTON_TYPES_ARRAY = Object.values(BUTTON_TYPES);

export default class Button extends React.Component {
  static porpTtypes = {
    title: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string.oneOf(BUTTON_TYPES_ARRAY),
    enable: PropTypes.bool,
    renderIcon: PropTypes.func,
    renderTitle: PropTypes.func,
    onPress: PropTypes.func
  }
  static defaultProps = {
    enable: true,
    onPress: () => {},
    type: BUTTON_TYPES.ORANGE
  }

  renderTitle = () => {
    if (this.props.renderTitle) {
      return this.props.renderTitle();
    } else {
      if (this.props.title) {
        return (
          <SimpleText style={this.getTitleStyle()}>
            {this.props.title.toUpperCase()}
          </SimpleText>
        );
      } else {
        return (<View/>);
      }
    }
  };

  renderIcon = () => {
    if (this.props.renderIcon && this.props.type !== BUTTON_TYPES.TEXT){
      let icon = this.props.renderIcon();
      return (
        <View style={{height:18, width: 18, marginLeft: 8}}>
          {icon}
        </View>
      );
    } else {
      return (<View/>);
    }
  };

  handleOnPress = () => {
    if (!this.props.enable) {
      return false;
    } else {
      this.props.onPress();
    }
  };

  getButtonStyle = () => {
    let styleName = this.getStyleName;
    if (this.props.renderIcon || this.props.type !== BUTTON_TYPES.TEXT) {
      return Object.assign({}, ButtonStyles[styleName], ButtonStyles.withIcon);
    } else {
      return ButtonStyles[styleName];
    }
  };

  getTitleStyle = () => {
    let styleName = this.getStyleName;
    return ButtonTextStyles[styleName];
  };

  getStyleName = () => {
    let styleName = 'base';
    if (!this.props.enable) {
      switch (this.props.type) {
        case BUTTON_TYPES.TEXT: styleName = 'textDisabled';
        case BUTTON_TYPES.WHITE: styleName = 'whiteDisabled';
        default: styleName = 'disabled'
      }
    } else {
      styleName = this.props.type;
    }

    return styleName;
  };

  render() {
    let title = this.renderTitle();
    let icon = this.renderIcon();
    let style = this.getButtonStyle();

    return (
      <TouchableOpacity
        activeOpacity={!this.props.enable? 0 : 1}
        onPress={this.handleOnPress}
      >
      <View style={[ButtonStyles.base, style]}>
        {icon}
        {title}
      </View>
      </TouchableOpacity>
    );
  }
}