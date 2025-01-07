import React, { ReactNode } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chat, useCreateChatClient, OverlayProvider } from "stream-chat-expo";
import {
    chatApiKey,
    chatUserId,
    chatUserName,
    chatUserToken,
} from "../chatConfig";

import { LoadingAnimation } from "@/components";

const user = {
    id: chatUserId,
    name: chatUserName,
};

interface ChatWrapperProps {
    children: ReactNode;
}

export const ChatWrapper = ({ children }: ChatWrapperProps) => {
    if (!chatApiKey || !chatUserToken) {
        console.error("Missing chatApiKey or chatUserToken");
        return <Text>Error: Missing Chat API credentials</Text>;
    }
    console.log(user);
    console.log(chatApiKey), console.log(chatUserToken);
    const chatClient = useCreateChatClient({
        apiKey: chatApiKey,
        userData: user,
        tokenOrProvider: chatUserToken,
    });
    console.log(chatClient);


    if (!chatClient) { // If chatClient is not available, show loading animation
        return (
            <LoadingAnimation />
        );
    }


    return (
        <OverlayProvider>
            <Chat client={chatClient}>{children}</Chat>
        </OverlayProvider>
    );
};