import { Text, Button, Image, View, StyleSheet } from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Polygon } from 'react-native-svg';

import { contactBox } from "@/constants/Dimensions";


export default function Contact() {

    return (
        <View style={styles.box}>
            <Text>dead</Text>
            <MaskedView
                style={styles.mask}
                maskElement={
                    <Svg height={100} width={130}>
                        <Polygon points="0,0 130,0 90,100, 0,100" fill="black" />
                    </Svg>
                }>
                <Image
                    source = {require('../assets/images/blank-profile-picture.webp')}
                    style={styles.profile}
                    resizeMode="cover"
                />
            </MaskedView>
            <View style={styles.recentMessage}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        maxHeight: contactBox.boxHeight,
        marginTop: 5,
        padding: 5,
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
    recentMessage: {
        flex: 1,
        backgroundColor: "skyblue",
    },
});