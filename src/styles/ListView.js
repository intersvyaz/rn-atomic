import { StyleSheet } from 'react-native';
import { COLORS } from './Base';

export const ListviewTextStyles = StyleSheet.create({
	title: {
		color: COLORS.MAIN_GRAY,
		fontSize: 16,
		fontWeight: '700'
	},
	subtitle: {
		color: COLORS.SECOND_GRAY,
		fontSize: 12,
		fontWeight: 'normal'
	},
});

export const ListViewRowStyles = StyleSheet.create({
	oneLineBase: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16,
		height:48
	},
	oneLineWithCustonIcon: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 16,
		height: 56
	},
	oneLineWithLargeLeftIcon:{
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 0,
		height: 72
	},
	twolineBase:{
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16,
		height:64
	},
	twoLinesWithIcon:{
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16,
		height:72
	},
	twoLinesWithLargeLeftIcon:{
		paddingLeft: 0,
		paddingRight: 16,
		paddingTop: 8,
		paddingBottom: 8,
		height:72
	},
	largeLeftIcon: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 0
	},
	largeLeftIconThreeLines: {
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 16,
		paddingLeft: 0,
		height:88
	},
	threeLineWithLargeLeftIcon:{
		paddingTop: 16,
		paddingBottom: 16,
		paddingRight: 16,
		paddingLeft: 0,
		height:88
	},
	threeLineBase:{
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 16,
		paddingBottom: 16,
		height:88
	},
	leftIconViewStyle: {
		marginRight: 16
	}
});