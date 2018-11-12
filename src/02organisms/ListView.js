import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import SimpleSeparator from '../00atoms/SimpleSeparator';
import ListRowItem from '../01molecules/ListRowItem';
import {ListViewStyles} from '../styles/ListView';

export default class ListView extends React.Component {
  static propTytpes = {
    renderItem: PropTypes.func,
    separatorStyle: PropTypes.object,
    renderSeparator: PropTypes.func
  };

  renderItem = ({item}) => {
    if (this.props.renderItem) {
      return this.props.renderItem(item);
    } else {
      return(
        <ListRowItem
        title={item.title}
        subtitle={item.subtitle}
        {...this.props}
        />
      );
    }
  };

	renderSeparator = () =>{
    if (this.props.renderSeparator) {
      return this.props.renderSeparator();
    } else {
      return (<SimpleSeparator {...this.props}/>);
    }
  };

  render() {
    return(
      <FlatList 
        contentContainerStyle={ListViewStyles.base}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
      {...this.props}
      />
    );
  }
}