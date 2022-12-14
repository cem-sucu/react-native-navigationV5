import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../constants/Color";

const Portfolio = ({ navigation, route }) => {
    const handlePress = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Le Profil</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.bgScreens,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
    btn: {
        padding: 12,
        color: "white",
    },
    btnText: {
        color: "white",
        fontSize: 19,
        paddingBottom: 9,
    },
    btnContainer: {
        flexDirection: "row",
    },
});

export default Portfolio;
