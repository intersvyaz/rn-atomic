import React from 'react';
import { View } from 'react-native';
import SimpleText from '../../00atoms/SimpleText';
import { ListviewTextStyles } from '../../styles/ListView';

export default class Subtitle extends React.Component {
  render() {
    if (!this.props.subtitle) {
      return (<View />);
    } else {
      return (
        <SimpleText
          style={ListviewTextStyles.subtitle}
          numberOfLines={this.props.twoLinesSubtitle ? 2 : 1}
          allowFontScaling={false}
        >
          {this.props.subtitle}
        </SimpleText>
      );
    }
  }
}