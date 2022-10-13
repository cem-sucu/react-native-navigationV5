import React, { useLayoutEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Portfolio = ({ navigation, route }) => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={{ padding: 9 }}
                        onPress={() => setCount((prevCount) => prevCount + 1)}
                    >
                        <Text style={styles.btnText}>+1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ padding: 9 }}
                        onPress={() => setCount((prevCount) => prevCount - 1)}
                    >
                        <Text style={styles.btnText}>-1</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);

    const handlePress = () => {
        navigation.navigate("Home");
    };

    const myData = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Portfolio</Text>
            <Text style={styles.text}>Nom: {myData.name}</Text>
            <Text style={styles.text}>Age: {myData.age}</Text>
            <Text style={styles.text}>Count: {count}</Text>
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
    btnText: {
        color: "white",
        fontSize: 19,
        paddingBottom: 9,
    },
    btnContainer: {
        flexDirection: "row",
    },
});
