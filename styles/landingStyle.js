import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  mainText: {
    paddingTop: 50,
    paddingBottom: 20,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
});

export default landingStyles;
