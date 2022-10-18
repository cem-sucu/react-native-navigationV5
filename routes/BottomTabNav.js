import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStackNav";
import Settings from "../screens/Settings";
import { AntDesign } from "@expo/vector-icons";
import Discover from "../screens/Discover";
import Gozat from "../screens/Gozat";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Gozat") {
                        iconName = "gift";
                        size = focused ? 27 : 20;
                        color = focused ? "#BB37DB" : "#fff";
                    } else if (route.name === "Settings") {
                        iconName = "setting";
                        size = focused ? 27 : 20;
                        color = focused ? "#BB37DB" : "#fff";
                    } else if (route.name === "Discover") {
                        iconName = "";
                        size = focused ? 27 : 20;
                        color = focused ? "#BB37DB" : "#fff";
                    }
                    return (
                        <AntDesign name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: "#BB37DB",
                tabBarInactiveTintColor: "#fff",
                tabBarStyle: { backgroundColor: "#1C1DB9" },
                headerStyle: { backgroundColor: "#1C1DB9" },
                // tabBarInactiveBackgroundColor: "#dddd"
                // tabBarShowLabel: false,
            })}
        >
            <Tab.Screen
                name="Gozat"
                component={Gozat}
                options={{ title: "Gözat", headerTintColor: "#fff" }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{ title: "Découverte", headerTintColor: "#fff" }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{ title: "Réglages", headerTintColor: "#fff" }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});

export default BottomTabNav;
