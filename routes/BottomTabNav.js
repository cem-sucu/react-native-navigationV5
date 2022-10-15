import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./HomeStackNav";
import { PortfolioStackScreen } from "./PortfolioStackNav";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="portfolio" component={PortfolioStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNav;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
