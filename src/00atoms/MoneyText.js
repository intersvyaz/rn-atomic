import React from 'react';
import {Text, View} from 'react-native';
import {TextStyles} from '../styles/Base';
import PropTypes from "prop-types";
import {Icon} from "react-native-elements";

export default class MoneyText extends React.Component {
  static propTypes = {
    moneySumm: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };
  static defaultProps = {
    moneySumm: null
  };

  formatCurrencyDot = (value) => {
    return this.formatCurrency(value).split(".");
  };

  formatCurrency = (value, toFloat = true) => {
    if (value === undefined || value === null || value === "") {
      return "0.00";
    }
    if (typeof value === "string" && value.indexOf(",") !== -1) {
      value = value.replace(",", ".");
    }
    return toFloat ? parseFloat(value).toFixed(2) : parseInt(value, 10);
  };

  render() {
    if (this.props.moneySumm === null || this.props.moneySumm === "") {
      return <View/>;
    }

    let currencyText = this.formatCurrencyDot(this.props.moneySumm);
    let rubles = parseInt(currencyText[0]);
    if (rubles > 1000 || rubles < -1000) {
      let length = currencyText[0].length;
      rubles =
        currencyText[0].substr(0, length - 3) +
        " " +
        currencyText[0].substr(length - 3);
    }

    return (
        <View
          accessible={false}
          style={TextStyles.moneyText}
        >
            <Text
              allowFontScaling={false}
              style={TextStyles.moneyRubles}
            >
                {rubles}
                {","}
            </Text>
            <Text
              allowFontScaling={false}
              style={TextStyles.moneyCents}
            >
                {currencyText[1]}
            </Text>
            <Icon
              iconStyle={TextStyles.moneyIcon}
              name="ruble"
              type="font-awesome"
            />
        </View>
    );
  }
}