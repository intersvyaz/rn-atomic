import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import SimpleText from '../00atoms/SimpleText';
import {ButtonStyles, ButtonTextStyles} from '../styles/Base';

export const BUTTON_TYPES = {
  BLUE: 'blue',
  ORANGE: 'orange',
  WHITE: 'white',
  RED: 'red',
  TEXT: 'text',
  RED_PRIMARY: 'redPrimary'
};

const BUTTON_TYPES_ARRAY = Object.values(BUTTON_TYPES);

export default class Button extends React.Component {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    title: PropTypes.string,
    titleSize: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    type: PropTypes.oneOf(BUTTON_TYPES_ARRAY),
    disabled: PropTypes.bool,
    renderIcon: PropTypes.func,
    renderTitle: PropTypes.func,
    onPress: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    onPress: () => {},
    type: BUTTON_TYPES.ORANGE
  };

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
        <View style={{height:18, width: 18, marginRight: 8, justifyContent:'center', alignItems:'center'}}>
          {icon}
        </View>
      );
    } else {
      return (<View/>);
    }
  };

  getButtonStyle = () => {
    let styleName = this.getStyleName();
    if (this.props.renderIcon && this.props.type !== BUTTON_TYPES.TEXT) {
      return Object.assign({}, ButtonStyles[styleName], ButtonStyles.withIcon);
    } else {
      return ButtonStyles[styleName];
    }
  };

  getTitleStyle = () => {
    let styleName = this.getStyleName();

    if (this.props.titleSize)
      return [ButtonTextStyles[styleName], {fontSize: this.props.titleSize}];
    return ButtonTextStyles[styleName];
  };

  getStyleName = () => {
    let styleName = 'base';
    if (this.props.disabled) {
      switch (this.props.type) {
        case BUTTON_TYPES.TEXT: styleName = 'textDisabled';
        case BUTTON_TYPES.WHITE: styleName = 'whiteDisabled';
        default: styleName = 'disabled';
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
        activeOpacity={0.5}
        disabled={this.props.disabled}
        onPress={() => this.props.onPress()}
        style={[ButtonStyles.base, this.props.style, style]}
      >
        <View accessibilityLabel={this.props.accessibilityLabel}>
          {icon}
          {title}
        </View>
      </TouchableOpacity>
    );
  }
}