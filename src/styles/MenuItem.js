import { StyleSheet } from "react-native";
import { COLORS } from "./Base";

export const MenuStyle = StyleSheet.create({
  description: {
    fontSize: 12,
    color: COLORS.MAIN_GRAY
  },
  switch: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  header: {
    paddingTop: 15,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.DEFAULT_BLUE
  },
  subheader: {
    fontSize: 14
  },
  icon: {
    resizeMode: "cover",
    height: 20,
    width: 20
  },
  separatorStyle: {
    height: 1,
    backgroundColor: "#CCC",
    borderColor: "white",
    borderLeftWidth: 20,
    borderRightWidth: 20
  },
  sectionEnd: {
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderColor: "#999",
    marginBottom: 5,
    height: 5
  },
  listRow: {
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
