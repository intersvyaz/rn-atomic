import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

export default class Content extends React.Component {
  render(){
    if (this.props.reverseOrder) {
      return (
        <View>
          <Subtitle {...this.props}/>
          <Title {...this.props}/>
        </View>
      );
    } else {
      return (
        <View>
          <Title {...this.props}/>
          <Subtitle {...this.props}/>
        </View>
      );
    }
  }
}