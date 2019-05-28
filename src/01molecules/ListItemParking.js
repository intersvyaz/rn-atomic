import React from 'react';
import PropTypes from 'prop-types'
import {View, TouchableOpacity, Text} from 'react-native';
import {ListItemParkingStyles} from '../styles/ListView';
import Content from './ListRowItems/Content';
import Chevrone from './ListRowItems/Chevrone';
import SimpleText from '../00atoms/SimpleText';

export default class ListItemParking extends React.Component{
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
		rowStyle: PropTypes.object,
		firstItemHighlight: PropTypes.bool
	};

	static defaultProps = {
		showRightChevrone: false,
		onSelectItem: () => {},
		reverseOrder: false,
		twoLinesSubtitle: false,
		largeLeftIcon: false
	};

	getLeftBubble = () => {
		if (this.props.freePlaces) {
			return (
				<View style={this.props.firstItemHighlight ? ListItemParkingStyles.bubbleHighlight : ListItemParkingStyles.bubble}>
				    <SimpleText style={this.props.firstItemHighlight ? ListItemParkingStyles.bubbleTextHighlight : ListItemParkingStyles.bubbleText}>
				        {this.props.freePlaces}
				    </SimpleText>
				</View>
			)
		} else {
			return (<View/>)
		}
	};

	getDistance = () => {
		if (this.props.distance) {
			return (
				<View style={this.props.firstItemHighlight ? ListItemParkingStyles.distanceHighlight : ListItemParkingStyles.distance}>
					<SimpleText style={this.props.firstItemHighlight ? ListItemParkingStyles.distanceTextHighlight : ListItemParkingStyles.distanceText}>
						{this.props.distance}
					</SimpleText>
				</View>
			);
		} else {
			return (<View/>)
		}
	};

	getContent = () => {
		if (this.props.renderContent) {
			return this.props.renderContent(this.props);
		} else {
			return (<Content {...this.props}/>);
		}
	};

	getChevrone = () => {
		if (!this.props.showRightChevrone && !this.props.renderChevrone) {return <View/>}
		if (this.props.renderChevrone) {
			return this.props.renderChevrone(this.props);
		} else {
			return (<Chevrone {...this.props}/>);
		}
	};

	render() {
		let leftBubble = this.getLeftBubble();
		let content = this.getContent();
		let distance = this.getDistance();
		let chevrone = this.getChevrone();
		return(
			<View style={ListItemParkingStyles.main}>
				<TouchableOpacity style={ListItemParkingStyles.container} onPress={() => {this.props.onSelectItem(this.props)}}>
					{leftBubble}
					<View style={{flex:1}}>
						{content}
					</View>
					<View style={{flexDirection: "row", alignItems:'center', justifyContent:"flex-end"}}>
						{distance}
						{chevrone}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}