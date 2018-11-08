import {StyleSheet, Platform} from 'react-native';

export const COLORS = {
  DEFAULT_BLUE : "#264796",
  MAIN_GRAY: "#555",
  SECOND_GRAY: "#838383"
};

export const TextStyles = StyleSheet.create({
  defaultText:{
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif"
  }
})