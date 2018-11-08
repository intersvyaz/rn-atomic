import React from 'react';
import {Text} from 'react-native';
import {TextStyles} from '../styles/Base'

export default class SimpleText extends React.Component {
  render(){
    return(
      <Text style = {TextStyles.defaultText} {...this.props}>
        {this.props.children}
      </Text>
    );
  }
}