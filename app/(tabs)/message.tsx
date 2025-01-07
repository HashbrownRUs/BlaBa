import { useState, useEffect } from "react";
import { Text, FlatList, Button, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { themeColor, themeColor2 } from "@/constants/Colors";
import { textBox } from "@/constants/Dimensions";
import { MessageProps } from "@/types/components";


import {Message, TextBox, TabsHeader} from "@/components";


const messageStart = textBox.bottom * 2 + textBox.BackGHeight;

const HomeScreen = () => {

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const [items, setItems] = useState([
    { id: "1", text: "First Component" , receive:true},
    { id: "2", text: "Second Component", receive:true },
    { id: "3", text: "Third Component", receive:false },
  ]);

  const handleTextChange = (newText: string) => {
    const newId = (items.length + 1).toString();
    setItems([...items, { id: newId, text:newText, receive:false}]);
  };

  useEffect(() => {
    console.log(items[items.length-1])
  }, [items]);

  return (
    <View style={styles.pageContainer}>
      <TabsHeader/>
      <Text>dead</Text>
      <View style={styles.contentContainer}>
        <View style={styles.messageContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Message receive={item.receive} text={item.text} id={item.id}/>
            )}
            contentContainerStyle={styles.messages}
          />
        </View>
        <TextBox onChangeText={handleTextChange} />
      </View>
    </View>
  );
};

export default HomeScreen


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 7,
    flexDirection: "column",
    backgroundColor: themeColor2,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    bottom: messageStart,
  },
  messages:{
    flex: 1,
    justifyContent: "flex-end",
  },
});