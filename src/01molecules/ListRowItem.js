import React from 'react';
import PropTypes from 'prop-types'
import {View, TouchableOpacity} from 'react-native';
import {ListViewRowStyles} from '../styles/ListView';
import Content from './ListRowItems/Content';
import Chevrone from './ListRowItems/Chevrone';

export default class ListRowItem extends React.Component{
  static propTypes = {
    showRightChevrone: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onSelectItem: PropTypes.func,
    twoLinesSubtitle: PropTypes.bool,
    reverseOrder: PropTypes.bool,
    renderRightIcon: PropTypes.func,
    renderLeftIcon: PropTypes.func,
    renderChevrone: PropTypes.func,
    renderContent: PropTypes.func,
    largeLeftIcon: PropTypes.bool,
    rowStyle: PropTypes.object
  }

  static defaultProps = {
    showRightChevrone: false,
    onSelectItem: () => {},
    reverseOrder: false,
    twoLinesSubtitle: false,
    largeLeftIcon: false
  }

  getStyle = () => {
    let style = {};
    if (this.props.title && this.props.subtitle) {
      if (twoLinesSubtitle) {
        style = this.props.largeLeftIcon ? ListViewRowStyles.largeLeftIconThreeLines : ListViewRowStyles.base;
      } else {
        style = this.props.largeLeftIcon ? ListViewRowStyles.largeLeftIcon : ListViewRowStyles.base
      }
    } else {
      if (this.props.renderLeftIcon || this.props.renderRightIcon) {
        style = this.props.largeLeftIcon ? ListViewRowStyles.largeLeftIcon : ListViewRowStyles.oneLineWithCustonIcon
      } else {
        style = ListViewRowStyles.base
      }
    }
    return style
  }

  getLeftIcon = () => {
    if (this.props.renderLeftIcon) {
      let icon = this.props.renderLeftIcon();
      return (
        <View style={ListViewRowStyles.leftIconViewStyle}>
          {icon}
        </View>
      )
    } else {
      return (<View/>)
    }
  }

  getRightIcon = () => {
    if (this.props.renderRightIcon) {
      return this.props.renderRightIcon();
    } else {
      return (<View/>)
    }
  }

  getContent = () => {
    if (this.props.renderContent) {
      return this.props.renderContent();
    } else {
      return (<Content {...this.props}/>);
    }
  }

  getChevrone = () => {
    if (this.props.renderChevrone) {
      return this.props.renderChevrone();
    } else {
      return (<Chevrone {...this.props}/>);
    }
  }

  render() {
    let style = this.getStyle();
    let leftIcon = this.getLeftIcon();
    let content = this.getContent();
    let rightIcon = this.getRightIcon();
    let chevrone = this.getChevrone();
    return(
      <View style={[style, this.props.rowStyle]}>
      <TouchableOpacity style={{flexDirection:'row'}} onPress={this.props.onSelectItem}>
        {leftIcon}
        {content}
        {rightIcon}
        {chevrone}
      </TouchableOpacity>
      </View>
    );
  }
}