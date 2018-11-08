import React from 'react';
import { View } from 'react-native';
import SimpleText from '../../00atoms/SimpleText';
import { ListviewTextStyles } from '../../styles/ListView';

export default class Title extends React.Component {
  render() {
    if (!this.props.title) {
      return (<View />);
    } else {
      return (
        <SimpleText
          style={ListviewTextStyles.title}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {this.props.title}
        </SimpleText>
      );
    }
  }
}