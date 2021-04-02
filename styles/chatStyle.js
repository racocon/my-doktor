import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 5,
  },
  midContainer: {
    padding: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10,
    height: 70,
    alignItems: "center",
  },
  mainText: {
    paddingTop: 50,
    paddingBottom: 5,
    paddingHorizontal: 10,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  subText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  messageBox: {
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
});

export default chatStyles;
