import { Text, Button, View, StyleSheet, Pressable  } from "react-native";

import {textBox} from "@/constants/Dimensions"
import { themeColor, themeColor3 } from "@/constants/Colors";

import { MessageProps } from "@/types/components";

export default function Message(props: MessageProps) {
    const receive = props.receive;
    if (receive) {
        return (
            <View style={[styles.textBox, styles.Receive]}>
              <Text style={styles.text}>{props.text}</Text>
            </View>
        );
    }
    return (
        <View style={[styles.textBox, styles.Send]}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  textBox:{
    justifyContent: "center",
    marginHorizontal: "1%",
    marginTop: 5,
    width: "80%",
    height: textBox.Height,
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: themeColor3,
    borderRadius: textBox.Radius,
  },
  Send: {
    backgroundColor: 'white',
    alignSelf: "flex-end",
  },
  Receive: {
    backgroundColor: themeColor,
    alignSelf: "flex-start",
  },
  text:{
    textAlignVertical: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
    height: textBox.Height,
  },
});

// responsive text shape, donmt allow empty messages