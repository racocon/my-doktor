import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";
import moment from "moment";

export default function Chats(props) {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? "#dff9fb" : "white",
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50,
          },
        ]}
      >
        {!isMyMessage() && (
          <Text style={styles.name}>{message.user.name} </Text>
        )}
        <Text style={styles.message}> {message.content} </Text>
        <Text style={styles.time}>
          {moment(message.createdAt).format("LT")}
        </Text>
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.messageBox}>
    //     <Text style={styles.name}>Mr. Doctor </Text>
    //     <Text style={styles.message}> Hello </Text>
    //   </View>
    // </View>
  );
}
