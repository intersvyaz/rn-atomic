import React from 'react';
import SimpleText from '../../00atoms/SimpleText';
import {COLORS} from '../../styles/Base';
import {ListviewTextStyles} from '../../styles/ListView';

export default class Title extends React.Component{
  render() {
    <SimpleText 
    style={ListviewTextStyles.title} 
    numberOfLines={1} 
    allowFontScaling={false}
    >
      {this.props.title}
    </SimpleText>
  }
}