import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Sujets = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sujet</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
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

export default Sujets;