import React from "react";
import PropTypes from "prop-types";
import { SwipeableFlatList } from "react-native";
import SimpleSeparator from "../00atoms/SimpleSeparator";
import ListRowItem from "../01molecules/ListRowItem";
import ListRowQuickActions from "../01molecules/ListRowQuickActions";
import { ListViewStyles } from "../styles/ListView";

export default class SwipeableListView extends React.Component {
  static propTytpes = {
    renderItem: PropTypes.func,
    separatorStyle: PropTypes.object,
    renderSeparator: PropTypes.func,
    renderQuickActions: PropTypes.func
  };

  renderItem = ({ item }) => {
    if (this.props.renderItem) {
      return this.props.renderItem(item);
    } else {
      return (
        <ListRowItem
          title={item.title}
          subtitle={item.subtitle}
          {...this.props}
        />
      );
    }
  };

  renderSeparator = () => {
    if (this.props.renderSeparator) {
      return this.props.renderSeparator();
    } else {
      return <SimpleSeparator {...this.props} />;
    }
  };

  renderQuickActions = ({ item }) => {
    if (this.props.renderQuickActions) {
      return this.props.renderQuickActions(item);
    } else {
      return <ListRowQuickActions {...this.props} />;
    }
  };

  render() {
    return (
      <SwipeableFlatList
        contentContainerStyle={ListViewStyles.base}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        renderQuickActions={this.renderQuickActions}
        {...this.props}
      />
    );
  }
}
