import React from 'react';
import {Icon} from "react-native-elements";
import {TextStyles} from '../styles/Base';
import {moderateScale} from "../styles/Scaling";
import PropTypes from "prop-types";

export default class RubleIcon extends React.Component {
  static propTypes = {
    rubleSize: PropTypes.number
  };
  static defaultProps = {
    rubleSize: 24
  };
  
  render(){
    return(
      <Icon
        iconStyle={[TextStyles.moneyIcon, {fontSize: moderateScale(this.props.rubleSize)}]}
        name="ruble"
        type="font-awesome"
      />
    );
  }
}