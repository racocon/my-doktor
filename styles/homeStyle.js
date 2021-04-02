import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 50,
    color: Colors.primary,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: Colors.input,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgotText: {
    color: "white",
    fontSize: 11,
  },
  loginText: {
    color: "white",
    fontSize: 14,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default homeStyles;
