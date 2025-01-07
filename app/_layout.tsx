import { Stack } from "expo-router";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ChatWrapper } from "../components/ChatWrapper";
import { AppProvider } from "../contexts/AppContext";
import { themeColor } from "@/constants/Colors";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar backgroundColor={themeColor} />
        <ChatWrapper>
          <AppProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </AppProvider>
        </ChatWrapper>
      </GestureHandlerRootView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


