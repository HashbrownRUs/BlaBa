import { Text, Button, View, StyleSheet, Pressable  } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";


import { themeColor,themeColor2 } from "@/constants/Colors";
import Contact from "@/components/DPT_Contact";

const TabsHeader = () => {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    const goToMessages = () => {
      router.back();
      router.push("./message");
    };

    const goToindex = () => {
        router.push("./index");
    };

    const goToHome = () => {
        router.back();
        router.push("./home");
    };

    return (
        <View style={styles.header}>
          <Text> Blaba </Text>
          <Button title="Go Back" onPress={goBack} />
          <View style={styles.Tabs}>
            <Button title="dead link idk y" onPress={goToindex} />
            <Button title="Go To message" onPress={goToMessages} />
            <Button title="Go To home" onPress={goToHome} />
          </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    header: {
        flex: 1,
        zIndex: 100,
        minHeight: 5,
        maxHeight: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColor,
    },
    Tabs:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '100%',
        marginTop: 10, 
    },
});

export default TabsHeader;
