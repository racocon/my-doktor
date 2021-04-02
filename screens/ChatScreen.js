import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import ChatInput from "../components/ChatInput/ChatInput";
import Chats from "../components/Chats/Chats";
import chatsData from "../data/chat";
import chatStyles from "../styles/chatStyle";

export default function ChatScreen() {
  return (
    <View style={chatStyles.container}>
      <Text style={chatStyles.mainText}>Chats</Text>
      <View style={chatStyles.midContainer}>
        <Image
          style={chatStyles.image}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/1162739713968467974/3g7bc_LX_400x400.jpg",
          }}
        ></Image>
        <Text style={chatStyles.subText}>Dr. Iqbal Baharum</Text>
      </View>
      <FlatList
        data={chatsData.messages}
        renderItem={({ item }) => <Chats message={item} />}
      />

      <ChatInput />
    </View>
  );
}
