import React from 'react';
import {View, TextInput, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {SearchStyle} from '../styles/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "../styles/Base";

export default class Search extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    underlineColorAndroid: PropTypes.string,
    editable: PropTypes.bool.isRequired,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    textInputStyle: ViewPropTypes.style,
    containerStyle: ViewPropTypes.style,
    searchSection: ViewPropTypes.style
  };

  static defaultProps = {
    placeholder: "Поиск",
    underlineColorAndroid: "transparent",
    editable: true,
    iconColor: COLORS.DEFAULT_BLUE_LIGHT,
    iconSize: 20
  };

  renderTextInput() {
    return (
      <TextInput
        autoCorrect={false}
        editable={this.props.editable}
        keyboardType={"default"}
        placeholder={this.props.placeholder}
        returnKeyType="search"
        style={[SearchStyle.textInputStyle, this.props.textInputStyle]}
        underlineColorAndroid={this.props.underlineColorAndroid}
        {...this.props}
      />
    )
  }

  renderIcon() {
    return (
      <Icon
        color={this.props.iconColor}
        name={"search"}
        size={this.props.iconSize}
      />
    )
  }

  render() {
    let icon = this.renderIcon();
    let textInput = this.renderTextInput();
    return (
      <View style={[SearchStyle.containerStyle, this.props.containerStyle]}>
        <View style={[SearchStyle.searchSection, this.props.searchSection]}>
          {icon}
          {textInput}
        </View>
      </View>
    );
  }
}