import { useState, useContext, useMemo, ComponentType } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ChannelSort } from "stream-chat";
import { ChannelList, DefaultStreamChatGenerics, ChannelAvatar, ChannelPreviewProps } from "stream-chat-expo";
import { Stack, useRouter } from "expo-router";


import { themeColor } from "@/constants/Colors";

import { Auth, TabsHeader, Preview } from "@/components";
import { chatUserId } from "../../chatConfig";
import { AppContext } from '@/contexts/AppContext';

const filters = {
  members: { $in: [chatUserId] },
  type: "messaging",
};
const sort: ChannelSort<DefaultStreamChatGenerics> = { last_updated: -1 };
const options = {
  state: true,
  watch: true,
};



export default function index() {
  const memoizedFilters = useMemo(() => filters, []);
  const router = useRouter();
  const { setChannel } = useContext(AppContext);


  const [isLoggedIn, setIsLoggedIn] = useState(false); // if not log show Auth


  return (
    <View style={styles.pageContainer}>
      <Stack.Screen options={{ title: "Channel List Screen" }} />
      <TabsHeader/>
      <ChannelList
        filters={memoizedFilters}
        options={options}
        Preview={Preview}
        onSelect={(channel) => {
          setChannel(channel);
          router.push(`./channel/${channel.cid}`);
        }}

        />
    </View>
  );
}


const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: themeColor,
  },
  authpos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {

    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});
