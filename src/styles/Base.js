import {StyleSheet, Platform} from 'react-native';

export const COLORS = {
  DEFAULT_BLUE : "#264796",
  MAIN_GRAY: "#555",
  SECOND_GRAY: "#838383",
  WHITE: '#fff',
  ORANGE: '#e96f08'
};

export const TextStyles = StyleSheet.create({
  defaultText:{
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif"
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
    height:36,
    minWidth: 64,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 1
  },
  withIcon:{
    paddingLeft:12
  },
  disbled:{
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
  textDisabled:{}
});

export const ButtonTextStyles = StyleSheet.create({
  disbled:{
    color: COLORS.MAIN_GRAY
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
  }
});