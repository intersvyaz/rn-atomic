import React from "react";
import PropTypes from "prop-types";
import { View, TouchableWithoutFeedback } from "react-native";
import { ListQuickActions } from "../styles/ListView";
import SimpleText from "../00atoms/SimpleText";
import {Icon} from "react-native-elements";

export default class ListRowQuickActions extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    styleContainer: PropTypes.object,
    styleText: PropTypes.object,
    icon: PropTypes.object
  };

  static defaultProps = {
    onPress: null,
    text: null,
    textColor: "#fff",
    backgroundColor: "#fff",
    style: null,
    styleText: null
  };

  getText() {
    if (this.props.text) {
      return (
        <SimpleText
            style={[
              this.props.styleText,
              ListQuickActions.textAction,
              { color: this.props.textColor }
            ]}
          >
            {this.props.text}
          </SimpleText>
      );
    }
  }

  getIcon() {
    if (this.props.icon) {
      return (
        <Icon
          color={this.props.icon.color}
          name={this.props.icon.name}
          size={28}
      />
      );
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View
          style={[
            this.props.styleContainer,
            ListQuickActions.swipeableAction,
            { backgroundColor: this.props.backgroundColor }
          ]}
        >
        {this.getIcon()}
        {this.getText()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
