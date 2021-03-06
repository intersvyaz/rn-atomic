import {StyleSheet, Platform} from 'react-native';
import {scale, moderateScale} from './Scaling';

export const COLORS = {
  DEFAULT_BLUE: "#4063B4",
  DEFAULT_BLUE_TEXT: '#697d9e',
  DEFAULT_BLUE_LIGHT: "#b0c2df",
  DEFAULT_BLUE_LIGHT_BACKGROUND: "#e1ebfc",
  MAIN_GRAY: "#555",
  SECOND_GRAY: "#838383",
  WHITE: '#fff',
  ORANGE: '#e96f08',
  RED: '#ff6b54',
  RED_PRIMARY: '#ff6b54',
  BLACK: '#000',
  BLUE: "#365eac"
};

export const PARKING_COLOR = {
  DEFAULT_BLUE_TEXT: '#697d9e',
  DEFAULT_BLUE_LIGHT: "#b0c2df",
  DEFAULT_BLUE_LIGHT_BACKGROUND: "#e1ebfc",
  DEFAULT_BLUE_BACKGROUND: "#607eb5",
  BUBBLE_BACKGROUND: "#84a5e3",
  BUBBLE_BACKGROUND_HIGHLIGHT: "#365eac",
};

export const CIRCLE_COLOR = {
  NETWORK_RED: "#ff8875",
  NETWORK_YELLOW: "#ffb575",
  NETWORK_GREEN: "#85c2b2",
  DETAIL_WHITE: "#FFF",
  DETAIL_BLUE: "#4063B4",
  BALANCE_BLUE: '#365eac',
};

export const TextStyles = StyleSheet.create({
  defaultText: {
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif"
  },
  balanceText: {
    textAlign: "center",
    fontSize: scale(14),
    color: "white",
    marginBottom: scale(4),
    marginTop: scale(4)
  },
  moneyText: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  moneyRubles: {
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  moneyCents: {
    fontFamily: "Arial",
    marginLeft: scale(3),
    marginBottom: scale(3),
    marginRight: scale(6),
    fontWeight: "bold",
  },
  moneyIcon: {
    marginBottom: scale(3),
  },
  networkTitle: {
    color: COLORS.WHITE,
    fontSize: scale(9),
  },
  networkIcon: {
    color: COLORS.WHITE,
    marginBottom: scale(2),
    marginTop: scale(8)
  },
  networkStatus: {
    color: COLORS.BLUE,
    marginHorizontal: scale(6),
    backgroundColor: "transparent",
    textAlign: "center"
  },
  detailTitle: {
    color: CIRCLE_COLOR.DETAIL_BLUE,
    fontWeight: "700",
    fontSize: moderateScale(10)
  },
});

export const SeparatorStyles = StyleSheet.create({
  base: {
    flex: 1,
    borderBottomColor: COLORS.SECOND_GRAY,
    borderBottomWidth: 1
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
  base: {
    minHeight: 36,
    minWidth: 88,
    paddingLeft: moderateScale(14, 0.4),
    paddingRight: moderateScale(14, 0.4),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(24),
  },
  withIcon: {
    paddingLeft: 12
  },
  disabled: {
    backgroundColor: 'transparent',
    borderColor: COLORS.DEFAULT_BLUE_LIGHT
  },
  blue: {
    backgroundColor: COLORS.DEFAULT_BLUE
  },
  orange: {
    backgroundColor: COLORS.ORANGE
  },
  white: {
    borderWidth: 1,
    borderColor: COLORS.ORANGE
  },
  whiteDisabled: {
    borderWidth: 1,
    borderColor: COLORS.MAIN_GRAY
  },
  text: {
    paddingLeft: 8,
    paddingRight: 8
  },
  red: {
    backgroundColor: 'transparent',
    borderColor: COLORS.RED
  },
  redPrimary: {
    backgroundColor: COLORS.RED,
    borderColor: COLORS.RED
  },
  textDisabled: {}
});

export const ButtonTextStyles = StyleSheet.create({
  disabled: {
    color: COLORS.DEFAULT_BLUE_LIGHT,
    fontWeight: "bold",
    textAlign: 'center'
  },
  blue: {
    color: COLORS.WHITE,
    textAlign: 'center'
  },
  orange: {
    color: COLORS.WHITE,
    textAlign: 'center'
  },
  white: {
    color: COLORS.ORANGE,
    textAlign: 'center'
  },
  whiteDisabled: {
    color: COLORS.MAIN_GRAY,
    textAlign: 'center'
  },
  text: {
    color: COLORS.DEFAULT_BLUE,
    textAlign: 'center'
  },
  testDisabled: {
    color: COLORS.MAIN_GRAY,
    textAlign: 'center'
  },
  red: {
    color: COLORS.RED,
    fontWeight: "bold",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
  redPrimary: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: moderateScale(12),
    textAlign: 'center'
  },
});

export const CircleStyles = StyleSheet.create({
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: scale(5),
    paddingBottom: scale(15),
    backgroundColor: "transparent"
  },
  balanceCircle: {
    borderColor: CIRCLE_COLOR.BALANCE_BLUE,
    backgroundColor: CIRCLE_COLOR.BALANCE_BLUE,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.42,
        shadowRadius: 12,
      },
      android: {},
    }),
  },
  networkCircle: {
    ...Platform.select({
      ios: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.23,
        shadowRadius: 3,
      },
      android: {},
    }),
  },
  networkPosition: {
    ...Platform.select({
      ios: {
        zIndex: -10,
      },
      android: {},
    }),
  },
  detailStyle: {
    flex: 1,
    zIndex: 10,
    alignItems: "flex-end",
    bottom: scale(-13),
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute"
  },
  detailCircle: {
    backgroundColor: "white",
    marginRight: 0,
    marginLeft: 0,
    borderColor: CIRCLE_COLOR.DETAIL_BLUE,
    borderWidth: scale(1.5),
    alignItems: "center",
    justifyContent: "center"
  },
  shadowContainer: {
    marginTop: scale(6),
    marginLeft: scale(6),
    position: "absolute",
  },
  circleShadow: {
    backgroundColor: ['rgba(0,0,0,0.05)', 'transparent'],
  }
});