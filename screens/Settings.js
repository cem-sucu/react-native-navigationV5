import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "../constants/Color";

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Paramètre</Text>
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
});

export default Settings;
