import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import SimpleText from '../00atoms/SimpleText';
import {ButtonStyles, ButtonTextStyles, COLORS} from '../styles/Base';

export const BUTTON_TYPES = {
  BLUE: 'blue',
  ORANGE: 'orange',
  WHITE: 'white',
  RED: 'red',
  TEXT: 'text'
};

const BUTTON_TYPES_ARRAY = Object.values(BUTTON_TYPES);

export default class Button extends React.Component {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(BUTTON_TYPES_ARRAY),
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

  constructor(props) {
    super(props);
    this.state = {
      pressedButton: false,
    };
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
        <View style={{height:18, width: 18, marginRight: 8, justifyContent:'center', alignItems:'center'}}>
          {icon}
        </View>
      );
    } else {
      return (<View/>);
    }
  };

  getUnderlayColor = () => {
    let styleName = this.getStyleName();

    return COLORS[styleName.toUpperCase()];
  };

  handleOnPress = () => {
    if (!this.props.enable) {
      return false;
    } else {
      this.props.onPress();
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

  getPressedButtonStyle = () => {
    let styleName = this.getStyleName();
    if (this.state.pressedButton) {
      styleName += "Pressed";
    }

    return ButtonStyles[styleName];
  };

  getTitleStyle = () => {
    let styleName = this.getStyleName();

    if (this.state.pressedButton) {
      styleName += "Pressed";
    }

    return ButtonTextStyles[styleName];
  };

  getStyleName = () => {
    let styleName = 'base';
    if (!this.props.enable) {
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
    let pressedStyle = this.getPressedButtonStyle();
    let underlayColor = this.getUnderlayColor();

    return (
      <TouchableHighlight
        activeOpacity={1}
        onHideUnderlay={() => {
          this.setState({ pressedButton: false });
        }}
        onPress={this.handleOnPress}
        onShowUnderlay={() => {
          this.setState({ pressedButton: true });
        }}
        style={[
          ButtonStyles.base,
          this.state.pressedButton
            ? style
            : pressedStyle
        ]}
        underlayColor={underlayColor}
      >
          <View accessibilityLabel={this.props.accessibilityLabel}>
              {icon}
              {title}
          </View>
      </TouchableHighlight>
    );
  }
}