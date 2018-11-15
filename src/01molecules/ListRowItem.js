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
	};

	static defaultProps = {
		showRightChevrone: false,
		onSelectItem: () => {},
		reverseOrder: false,
		twoLinesSubtitle: false,
		largeLeftIcon: false
	};

	getStyle = () => {
		let style = {};
		if (this.props.title && this.props.subtitle) {
			if (this.props.twoLinesSubtitle) {
				style = this.props.largeLeftIcon ? ListViewRowStyles.threeLineWithLargeLeftIcon : ListViewRowStyles.threeLineBase;
			} else {
				if (this.props.renderLeftIcon || this.props.renderRightIcon || this.props.largeLeftIcon) {
					style = this.props.largeLeftIcon ? ListViewRowStyles.twoLinesWithLargeLeftIcon : ListViewRowStyles.twoLinesWithIcon
				} else {
					style = ListViewRowStyles.twolineBase
				}
			}
		} else {
		  if (this.props.subtitle && this.props.twoLinesSubtitle) {
			  if (this.props.renderLeftIcon || this.props.renderRightIcon || this.props.largeLeftIcon) {
				  style = this.props.largeLeftIcon ? ListViewRowStyles.twoLinesWithLargeLeftIcon : ListViewRowStyles.twoLinesWithIcon
			  } else {
				  style = ListViewRowStyles.twolineBase
			  }
      } else {
			  if (this.props.renderLeftIcon || this.props.renderRightIcon) {
				  style = this.props.largeLeftIcon ? ListViewRowStyles.oneLineWithLargeLeftIcon : ListViewRowStyles.oneLineWithCustonIcon
			  } else {
				  style = ListViewRowStyles.oneLineBase
			  }
      }
		}
		return style
	};

	getLeftIcon = () => {
		if (this.props.renderLeftIcon) {
			let icon = this.props.renderLeftIcon(this.props);
			return (
				<View style={[ListViewRowStyles.leftIconViewStyle, this.props.largeLeftIcon ? ListViewRowStyles.largeLeftIconViewStyle : ListViewRowStyles.iconViewStyle]}>
					{icon}
				</View>
			)
		} else {
			return (<View/>)
		}
	};

	getRightIcon = () => {
		if (this.props.renderRightIcon) {
			return (
				<View style={{maxHeight:40, maxWidth:40}}>
					{this.props.renderRightIcon(this.props)}
				</View>);
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
		if (this.props.renderChevrone) {
			return this.props.renderChevrone(this.props);
		} else {
			return (<Chevrone {...this.props}/>);
		}
	};

	render() {
		let style = this.getStyle();
		let leftIcon = this.getLeftIcon();
		let content = this.getContent();
		let rightIcon = this.getRightIcon();
		let chevrone = this.getChevrone();
		return(
			<View style={[style, this.props.rowStyle]}>
				<TouchableOpacity style={{flexDirection:'row', alignItems:'center', flex:1}} onPress={() => {this.props.onSelectItem(this.props)}}>
					{leftIcon}
					<View style={{flex:1}}>
						{content}
					</View>
					<View style={{flexDirection: "row", alignItems:'center', justifyContent:"flex-end"}}>
						{rightIcon}
						{chevrone}
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}