import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../components/Menu";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Home = (props) => {
    let [fontsLoaded] = useFonts({
        WorkSans_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    else {
        SplashScreen.hideAsync();
        const description =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ";
        return (
            <View style={styles.mainContainer}>
                <View style={styles.homeTop}>
                    <Image
                        style={styles.headerImage}
                        resizeMode="contain"
                        source={require("../../assets/course/logo.jpeg")}
                    />

                    <Text style={styles.mainHeader}>Welcome to</Text>
                    <Text
                        style={[
                            styles.mainHeader,
                            {
                                fontSize: 33,
                                color: "#4c5dab",
                                marginTop: 0,
                            },
                        ]}>
                        {props.channelName}
                    </Text>

                    <Text style={styles.paraStyle}>{description} </Text>
                </View>

                <View style={styles.menuStyle}>
                    <View style={styles.lineStyle}></View>
                    <Menu />
                    <View
                        style={[
                            styles.lineStyle,
                            {
                                marginVertical: 10,
                            },
                        ]}></View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
        textAlign: "center",
    },

    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1,
        display: "flex",
        alignItems: "stretch",
        marginTop: 50,
        borderRadius: 20,
    },

    mainHeader: {
        fontSize: 30,
        color: "#344055",
        textTransform: "uppercase",
        fontFamily: "Nunito_700Bold",
    },

    paraStyle: {
        textAlign: "left",
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 30,
        paddingBottom: 50,
        lineHeight: 27,
        fontFamily: "WorkSans_400Regular",
    },

    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});

export default Home;
