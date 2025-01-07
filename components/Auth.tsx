import { useState, useEffect } from "react";
import { Text, Button, TextInput, View, StyleSheet, Pressable } from "react-native";
import { Formik } from 'formik';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-expo';
import Cookies from 'universal-cookie';
import { useRouter } from "expo-router";

import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../chatConfig';

import { themeColor, themeColor2 } from "@/constants/Colors";
//import { Auth } from "@/components";
import { UserProps } from "@/types/components";

const initialState: UserProps = {
    UserID: chatUserId,
    Username: chatUserName,
    Email: '',
    Password: '',
    chatUserToken: chatUserToken,
};

const authenticator = () => { //onFormSubmit(values)
    const router = useRouter();

    const goBack = () => {
        router.push("./home");
      };

    const [isSignUp, setisSignUp] = useState(false)


    const switchMode = () => {
        setisSignUp((preisSignUp) => !preisSignUp)
    }

    const handleFormSubmit = async (values: UserProps) => {

        console.log('Form Submitted with values:', values);
        goBack();
    };

    return (
        <View style={[styles.pageContainer]}>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text> {isSignUp ? "Sign Up" : "Sign In"} </Text>
                    <Formik
                        initialValues={initialState}
                        onSubmit={handleFormSubmit}
                    >
                        {({ handleChange, handleSubmit, values, errors }) => (
                            <View >
                                {isSignUp && (
                                    <TextInput style={styles.textbox} placeholder="UserName" onChangeText={handleChange('username')} value={values.Username} />
                                )}
                                <TextInput style={styles.textbox} placeholder="Email" onChangeText={handleChange('email')} value={values.Email} />
                                <TextInput style={styles.textbox} placeholder="Password" secureTextEntry onChangeText={handleChange('password')} value={values.Password} />

                                <Text>
                                    {isSignUp
                                        ? "Already Have an account? "
                                        : "Don't have an account? "
                                    }
                                </Text>
                                <Pressable onPress={switchMode}>
                                    <Text style={{ fontWeight: "bold" }}>
                                        {isSignUp
                                            ? "Sign In"
                                            : "Sign Up"
                                        }
                                    </Text>
                                </Pressable>
                                <Button title={isSignUp ? "Sign Up" : "Sign In"} onPress={handleSubmit as () => void} />
                            </View>
                        )}

                    </Formik>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        position: "absolute",
        top: '20%',
        alignItems: 'center',
        backgroundColor: themeColor,
    },
    contentContainer: { // makes sign not align center
        backgroundColor: themeColor2,
        width: "100%",
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
    },
    content: { // makes sign not align center
        height: "100%",
        width: "80%",
        paddingVertical: 20,
        borderRadius: 5,
    },
    textbox: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 10,
        maxHeight: 40,
    },

});

export default authenticator;