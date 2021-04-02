import React from "react";
import { Image, Text, View } from "react-native";
import homeStyles from "../styles/homeStyle";

export default function ConstructionScreen() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.logoText}>Under Construction!</Text>
      <Image
        style={homeStyles.image}
        source={{
          uri: "https://placekitten.com/300/200",
        }}
      ></Image>
    </View>
  );
}
