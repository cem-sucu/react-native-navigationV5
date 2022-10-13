import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Portfolio = ({ navigation, route }) => {
    const handlePress = () => {
        props.navigation.navigate("Home");
    };

    const myData = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
            <Text style={styles.text}>Nom: {myData.name}</Text>
            <Text style={styles.text}>Age: {myData.age}</Text>
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
