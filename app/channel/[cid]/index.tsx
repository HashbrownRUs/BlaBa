import React, { useContext, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import {
  Channel,
  MessageInput,
  MessageList,
  useAttachmentPickerContext,
} from "stream-chat-expo";
import { Stack } from "expo-router";
import { AppContext } from "@/contexts/AppContext";
import { useHeaderHeight } from "@react-navigation/elements";

import { LoadingAnimation } from "@/components";


export default function ChannelScreen() {
  const { channel } = useContext(AppContext);
  const { setTopInset } = useAttachmentPickerContext();
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    setTopInset(headerHeight);
  }, [headerHeight, setTopInset]);

  if (!channel) {
    return (
        <LoadingAnimation />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Channel Screen" }} />
      {channel ? (
        <Channel channel={channel} keyboardVerticalOffset={headerHeight}>
          <MessageList />
          <MessageInput />
        </Channel>
      ) : null}
    </SafeAreaView>
  );
}