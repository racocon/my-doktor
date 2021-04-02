import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import Colors from "../../constants/Colors";

export default function Cells(props) {
  const { menu } = props;

  const menuChoice = () => {
    return menu.id === "s01"
      ? "clinic-medical"
      : menu.id === "s02"
      ? "comment-medical"
      : menu.id === "s03"
      ? "book-medical"
      : "file-medical";
  };

  const chatChoice = () => {
    return menu.id === "s02";
  };

  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate(chatChoice() ? "Chat" : "Construction", {
      id: menu.id,
      name: menu.title,
    });
    console.log(`Clicked ${menu.title}`);
  };

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <FontAwesome5
          name={menuChoice()}
          size={24}
          color={Colors.primary}
          style={styles.icon}
        />
        <Text>{menu.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
