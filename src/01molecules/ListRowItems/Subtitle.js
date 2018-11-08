import React from 'react';
import SimpleText from '../../00atoms/SimpleText';
import { ListviewTextStyles } from '../../styles/ListView';

export default class Subtitle extends React.Component{
  render() {
    <SimpleText
      style={ListviewTextStyles.subtitle}
      numberOfLines={this.props.twoLinesSubtitle ? 2 : 1}
      allowFontScaling={false}
    >
      {this.props.title}
    </SimpleText>
  }
}