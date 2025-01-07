import { Text, Button, View, StyleSheet, Pressable  } from "react-native";
import { useRouter } from "expo-router";


import { themeColor,themeColor2 } from "@/constants/Colors";

import {Contact, TabsHeader} from "@/components";

const HomeScreen = () => {
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    const goToMessages = () => {
      router.push("./message");
    };

    return (
      <View style={styles.pageContainer}>
        <TabsHeader/>
        <View style={styles.contentContainer}>
          <Contact/> 
          <Contact/>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
    },
    contentContainer: {
      flex: 7,
      flexDirection: "column",
      backgroundColor: themeColor2,
    },
  });

  export default HomeScreen