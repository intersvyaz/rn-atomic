import { StyleSheet } from 'react-native';
import { COLORS, PARKING_COLOR } from './Base';

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
	}, 
	iconViewStyle:{
		height: 40,
		width:40
	},
	largeLeftIconViewStyle:{
		height:56,
		width:100
	}
});

export const ListItemParkingStyles = StyleSheet.create({
	main: {
		flex:1,
		backgroundColor: COLORS.WHITE,
	},
	container: {
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 8,
		flexDirection:'row',
		flex:1,
		backgroundColor: COLORS.WHITE
	},
	bubble: {
		width: 44,
		height: 44,
		backgroundColor: PARKING_COLOR.BUBBLE_BACKGROUND,
		borderRadius: 44/2,
		alignItems: "center",
		justifyContent: "center",
		marginRight:16
	},
	bubbleHighlight: {
		width: 44,
		height: 44,
		backgroundColor: PARKING_COLOR.BUBBLE_BACKGROUND_HIGHLIGHT,
		borderRadius: 44/2,
		alignItems: "center",
		justifyContent: "center",
		marginRight:16
	},
	distance: {
		minWidth: 54,
		backgroundColor: PARKING_COLOR.DEFAULT_BLUE_LIGHT_BACKGROUND,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 8,
		paddingVertical: 2,
		paddingHorizontal:8
	},
	distanceHighlight: {
		minWidth: 54,
		backgroundColor: PARKING_COLOR.DEFAULT_BLUE_BACKGROUND,
		borderRadius: 4,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 8,
		paddingVertical: 2,
		paddingHorizontal: 8
	},
	distanceText: {
		color: PARKING_COLOR.DEFAULT_BLUE_TEXT,
		fontSize: 14,
		fontWeight: '400',
	},
	distanceTextHighlight: {
		color: COLORS.WHITE,
		fontSize: 14,
		fontWeight: '500',
	},
	bubbleText:{
		color: COLORS.WHITE,
		fontSize: 22,
	},
	bubbleTextHighlight:{
		color: COLORS.RED,
		fontSize: 22,
	}
});

export const ListQuickActions = StyleSheet.create({
	swipeableAction: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		height: '100%',
		borderRadius: 4,
		margin: 8,
		marginRight:20
	},
	textAction: {
		textAlign: 'center',
		fontSize: 14,
		paddingHorizontal: 8
	}
});

export const ListViewStyles = StyleSheet.create({
	base:{
		flexGrow: 1,
		marginTop: 8,
		paddingBottom: 8
	}
});