import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Portfolio = (props) => {
    const handlePress = () => {
        props.navigation.pop();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
            <Button title="revenir vers Home" onPress={handlePress} />
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
});
