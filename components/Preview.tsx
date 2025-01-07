import React from 'react';
import { Text, Button, Image, View, StyleSheet } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Polygon } from 'react-native-svg';

import { themeColor, themeColor2 } from "@/constants/Colors";
import { contactBox, textBox } from "@/constants/Dimensions";
import {
  Channel,
  DefaultStreamChatGenerics,
  ChannelList,
  MessageInput,
  MessageList,
  ChannelPreviewMessenger,
  ChannelPreviewMessengerProps,
  useAttachmentPickerContext,
} from "stream-chat-expo";

const CustomPreview = ({ channel,latestMessagePreview, props }: any) => {
  const { unread } = channel;
  const avatarUrl = channel?.data?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const latestMessage = channel?.state?.messages?.slice(-1)[0];
  const latestMessageText = latestMessage?.text || "No messages yet";
  return (
      <View style={styles.box}>
        <MaskedView
          style={styles.mask}
          maskElement={
            <Svg height={100} width={130}>
              <Polygon points="0,0 130,0 90,100, 0,100" fill="black" />
            </Svg>
          }>
          <Image
            source={{ uri: avatarUrl }}
            style={styles.profile}
            resizeMode="cover"
          />
        </MaskedView>
        {/*<ChannelPreviewMessenger {...props} />*/}
        <View style={styles.messageBox}>
          <Text style={styles.nametext}>{channel.data.name}</Text>
          <Text style={styles.recentMessage}>{latestMessageText}</Text>
        </View>
      </View>
  );
};

export default CustomPreview;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    maxHeight: contactBox.boxHeight,
    marginTop: 0,
    padding: 0,
    flexDirection: "row",
    alignContent: 'center',
    backgroundColor: "white",

  },
  mask: {
    width: 130,
    height: contactBox.profileHeight,
    overflow: 'hidden',  // Ensures the image is clipped to the mask shape
    backgroundColor: "red", //shouldnt be showing
  },
  profile: {
    width: '100%',
    height: '100%',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  recentMessage: {
    textAlign: 'center',       // Center the text horizontally
    fontSize: 18, // Center the text horizontally
    color: '#333',
  },
  nametext: {
    textAlign: 'left',       // Center the text horizontally
    fontSize: 18, // Center the text horizontally
    color: '#333',
  },
});