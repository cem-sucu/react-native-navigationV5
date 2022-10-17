import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackNav";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Homet"
                component={HomeStackScreen}
                options={{ title: "Accueil", headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ title: "Réglages" }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default BottomTabNav;
