"use strict";

import * as React from 'react';
import {Switch, Platform} from 'react-native';
import PropTypes from 'prop-types';

export default class SwitchExt extends React.Component {
  static propTypes = {
    value: PropTypes.bool, // Значение переключателя
    backgroundColor: PropTypes.string, // Цвет фона / для корректного рендера на Android 4
    onTintColor: PropTypes.string, // Цвет включенного track
    thumbTintColor: PropTypes.string, // Цвет включенного toggle
    thumbTintColorOff: PropTypes.string, // Цвет выключенного toggle
    tintColor: PropTypes.string // Цвет выключенного track
  };

  static defaultProps = {
    backgroundColor: "white",
    onTintColor: "#f4b783",
    thumbTintColor: "#e96f08",
    thumbTintColorOff: "#fafafa",
    tintColor: "#939393"
  };

  render() {
    let props = { ...this.props };

    if (Platform.OS === "android") {
      props.thumbTintColor = this.props.value
        ? this.props.thumbTintColor
        : this.props.thumbTintColorOff;
    } else {
      props.onTintColor = null;
      props.thumbTintColor = null;
      props.thumbTintColorOff = null;
      props.tintColor = null;
      props.backgroundColor = null;
    }

    return <Switch {...props} />;
  }
}