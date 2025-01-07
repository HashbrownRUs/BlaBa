import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import { themeColor, themeColor2 } from "@/constants/Colors";
import {textBox} from "@/constants/Dimensions"


const TextBox = ({onChangeText}: any, ) => {
    const [text,setText] = useState("")

    const handleTextChange = () => {
        onChangeText(text);
        setText("");
      };

    return (
        
        <View style={styles.textBoxContainer}>
            <View style={styles.textBox}>
                <TextInput
                    style={styles.text}
                    placeholder="Enter text here"
                    placeholderTextColor="#aaa"
                    multiline={true}
                    numberOfLines={4} // Suggested height for 4 lines
                    value={text}
                    onChangeText={(value) => setText(value)}
                />
            </View>
            <TouchableOpacity style={styles.button}><Text style={styles.arrowText} onPress={handleTextChange}>→</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textBoxContainer: {
        position: "absolute",
        justifyContent: "center",
        bottom: textBox.bottom,
        left: "2.5%",
        width: "95%",
        height: textBox.BackGHeight, 
        borderRadius: textBox.BackGRadius, 
        backgroundColor: themeColor,
    },
    textBox: {
        position: "absolute",
        justifyContent: "flex-start",
        left: "1%",
        width: "86%",
        height: textBox.Height,
        borderRadius: textBox.Radius,
        backgroundColor: 'white',
    },
    text: {
        textAlignVertical: "center",
        paddingHorizontal: 10,
        fontWeight: "bold",
        height: textBox.Height,
    },

    button: {
        left: "88%",
        height: textBox.Height,
        width: textBox.Height,
        borderRadius: textBox.Radius,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeColor2,
    },
    arrowText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },

});

export default TextBox;