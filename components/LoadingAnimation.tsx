import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Animated,
    StyleSheet,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColor } from "@/constants/Colors";

const IMAGES = [
    require('@/assets/images/logoOrange.png'),
    require('@/assets/images/logoOrangeClosed2.png'),
];

const ANIMATION_DURATION = 500; //timer amount

const LoadingAnimation = () => {
    const animationValue = useRef(new Animated.Value(0)).current; // Initialize the animated value
    const [isFirstImageVisible, setisFirstImageVisible] = useState(true);

    const swapImages = () => {
        Animated.timing(animationValue, {
            toValue: isFirstImageVisible ? 1 : 0, // Toggle between 0 and 1
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            setisFirstImageVisible(!isFirstImageVisible); // Update the state
        });
    };

    useEffect(() => {
        const timer = setInterval(swapImages, ANIMATION_DURATION);
        return () => clearInterval(timer);
    }, [isFirstImageVisible]);

    // Interpolate the animated value for opacity or any other style
    const firstImageOpacity = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0], // First image fades out as value moves to 1
    });

    const secondImageOpacity = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1], // Second image fades in as value moves to 1
    });

    return (
        <SafeAreaView style={styles.pageContainer}>
            <View style={styles.container}>
                <Animated.Image
                    source={IMAGES[0]}
                    alt="logo"
                    style={[styles.image, { opacity: firstImageOpacity }]}
                />
                <Animated.Image
                    source={IMAGES[1]}
                    alt="logo"
                    style={[styles.image, { opacity: secondImageOpacity }]}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: themeColor,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        position: "absolute", // Overlap the images
    }
});

export default LoadingAnimation;
