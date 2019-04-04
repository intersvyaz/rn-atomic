import {StyleSheet, Platform} from 'react-native';
import {scale, moderateScale} from './Scaling';

export const COLORS = {
  DEFAULT_BLUE : "#264796",
  MAIN_GRAY: "#555",
  SECOND_GRAY: "#838383",
  WHITE: '#fff',
  ORANGE: '#e96f08',
  RED: '#ff6b54',
  BALANCE_CIRCLE: '#365eac',
  BLACK: '#000',
};

export const TextStyles = StyleSheet.create({
  defaultText:{
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif"
  },
  moneyText: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  moneyRubles: {
    fontFamily: "Arial",
    color: COLORS.WHITE,
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
  moneyCents: {
    fontFamily: "Arial",
    color: COLORS.WHITE,
    fontSize: moderateScale(14),
    marginLeft: scale(3),
    marginBottom: scale(3),
    marginRight: scale(6),
    fontWeight: "bold",
  },
  moneyIcon: {
    color: COLORS.WHITE,
    marginBottom: scale(3),
    fontSize: moderateScale(24)
  }
});

export const SeparatorStyles = StyleSheet.create({
  base:{
    flex: 1,
    borderBottomColor: COLORS.SECOND_GRAY,
    borderBottomWidth:1
  },
  simmetricRowPadding: {
    marginRight: 16,
    marginLeft: 16
  },
  leftIconPadding: {
    marginLeft: 72
  },
  largeLeftIconPadding: {
    marginLeft: 116
  }
});

export const ButtonStyles = StyleSheet.create({
  base:{
    minHeight: 36,
    minWidth: 88,
    paddingLeft: moderateScale(14, 0.4),
    paddingRight: moderateScale(14, 0.4),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(24),
  },
  withIcon:{
    paddingLeft:12
  },
  disabled:{
    backgroundColor: COLORS.MAIN_GRAY
  },
  blue:{
    backgroundColor: COLORS.DEFAULT_BLUE
  },
  orange: {
    backgroundColor: COLORS.ORANGE
  },
  white:{
    borderWidth: 1,
    borderColor: COLORS.ORANGE
  },
  whiteDisabled:{
    borderWidth: 1,
    borderColor: COLORS.MAIN_GRAY
  },
  text:{
    paddingLeft: 8,
    paddingRight: 8
  },
  red: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.RED
  },
  redPressed: {
    backgroundColor: COLORS.RED,
    borderColor: COLORS.RED
  },
  textDisabled:{}
});

export const ButtonTextStyles = StyleSheet.create({
  disabled:{
    color: COLORS.WHITE
  },
  blue:{
    color:COLORS.WHITE
  },
  orange: {
    color:COLORS.WHITE
  },
  white:{
    color: COLORS.ORANGE
  },
  whiteDisabled:{
    color: COLORS.MAIN_GRAY
  },
  text:{
    color: COLORS.DEFAULT_BLUE
  },
  testDisabled:{
    color: COLORS.MAIN_GRAY
  },
  red: {
    color: COLORS.RED,
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
  redPressed: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: moderateScale(12),
  },
});

export const CircleStyles = StyleSheet.create({
  balanceText: {
    textAlign: "center",
    fontSize: moderateScale(12),
    color: "white",
    marginBottom: scale(4),
    marginTop: scale(4)
  },
  balanceCircle: {
    borderColor: COLORS.BALANCE_CIRCLE,
    backgroundColor: COLORS.BALANCE_CIRCLE,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 0, height: scale(8) },
        shadowOpacity: scale(0.42),
        shadowRadius: scale(12),
      },
      android: {
        elevation: 3,
      },
    }),
  },
});