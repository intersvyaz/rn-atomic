import * as React from 'react';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles} from '../styles/Base';
import MoneyText from './MoneyText';
import {moderateScale, baseRadius, getCircleDiagonal} from "../styles/Scaling";

export default class BalanceCircle extends React.Component {
  static propTypes = {
    balanceTitle: PropTypes.string,
    disabled: PropTypes.bool,
    moneySumm: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onPress: PropTypes.func,
  };

  handleOnPressCircle = () => {
    if (this.props.disabled) {
      return false;
    } else {
      this.props.onPress();
    }
  };

  render() {
    let diagonal = baseRadius * moderateScale(0.4);
    return (
      <View>
        {Platform.OS === 'android' &&
        <View style={CircleStyles.shadowContainer}>
          <View
            style={[getCircleDiagonal(diagonal), CircleStyles.circleShadow]}
          />
        </View>
        }
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={() => this.handleOnPressCircle()}
          style={[
            CircleStyles.balanceCircle,
            getCircleDiagonal(diagonal)
          ]}
        >
          <Text
            allowFontScaling={false}
            style={TextStyles.balanceText}
          >
            {this.props.balanceTitle.toUpperCase()}
          </Text>
          <MoneyText
            moneySumm={this.props.moneySumm}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
