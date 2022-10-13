import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Portfolio = ({ navigation, route }) => {



    const handlePress = () => {
        navigation.navigate("Home");
    };


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
        </View>
    );
};

export default Portfolio;

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
    btnText: {
        color: "white",
        fontSize: 19,
        paddingBottom: 9,
    },
    btnContainer: {
        flexDirection: "row",
    },
});
