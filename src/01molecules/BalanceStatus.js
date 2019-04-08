import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {CircleStyles, TextStyles} from '../styles/Base';
import MoneyText from '../00atoms/MoneyText';

export default class BalanceStatus extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    balanceTitle: PropTypes.string,
    disabled: PropTypes.boolean,
    circleStyle: PropTypes.object,
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

  render () {
    return (
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={() => this.handleOnPressCircle()}
          style={[
            CircleStyles.balanceCircle,
            this.props.circleStyle
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
    );
  }
}
