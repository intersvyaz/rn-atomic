import React from 'react';
import {Icon} from "react-native-elements";
import {COLORS, TextStyles} from '../styles/Base';
import {moderateScale} from "../styles/Scaling";
import PropTypes from "prop-types";

export default class RubleIcon extends React.Component {
  static propTypes = {
    rubleSize: PropTypes.number,
    color: PropTypes.string
  };
  static defaultProps = {
    rubleSize: 24,
    color: COLORS.WHITE
  };
  
  render(){
    return(
      <Icon
        iconStyle={[TextStyles.moneyIcon, {color: this.props.color, fontSize: moderateScale(this.props.rubleSize)}]}
        name="ruble"
        type="font-awesome"
      />
    );
  }
}