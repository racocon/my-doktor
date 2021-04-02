import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import homeStyles from "../styles/homeStyle";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate("Landing");

    console.log(`Logged in to ${email}`);

    setEmail("");
    setPassword("");
  };

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.logoText}>MyDoktor</Text>
      <View style={homeStyles.inputView}>
        <TextInput
          style={homeStyles.inputText}
          placeholder="Email..."
          placeholderTextColor={Colors.background}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={homeStyles.inputView}>
        <TextInput
          style={homeStyles.inputText}
          secureTextEntry={true}
          placeholder="Password..."
          placeholderTextColor={Colors.background}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity>
        <Text style={homeStyles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.loginBtn} onPress={onClick}>
        <Text style={homeStyles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={homeStyles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
