import React from "react";
import { FlatList, Text, View } from "react-native";
import Cells from "../components/Cells/Cells";
import menu from "../data/menu";
import landingStyles from "../styles/landingStyle";

export default function LandingScreen() {
  return (
    <View style={landingStyles.container}>
      <Text style={landingStyles.mainText}>Main Menu</Text>
      <FlatList
        style={{ width: "100%" }}
        data={menu}
        renderItem={({ item }) => <Cells menu={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
