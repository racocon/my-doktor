import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 2,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 15,
    marginVertical: 10,
  },
  midContainer: {
    margin: 10,
    flexDirection: "row",
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
});

export default styles;
