import { StyleSheet } from "react-native";
import { COLORS } from "./Base";

export const SearchStyle = StyleSheet.create({
  textInputStyle: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    marginHorizontal: 8,
    alignItems: "center",
    paddingVertical: 0
  },
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.DEFAULT_BLUE_LIGHT_BACKGROUND,
    paddingHorizontal: 8,
    paddingVertical: 8,
    height: 50
  },
  searchSection: {
    flex: 1,
    paddingHorizontal: 8,
    borderRadius: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
